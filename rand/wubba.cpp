/**
 *  @file
 *  @copyright defined in eos/LICENSE
 */

#include "wubba.hpp"

ACTION wubba::newtable(uint64_t tableId, name dealer)
{
    require_auth(dealer);
    auto existing = tableround.find(tableId);
    eosio_assert(existing == tableround.end(), "tableId already exists when newtable");

    tableround.emplace(_self, [&](auto &s) {
        s.tableId = tableId;
        s.tableStatus = (uint32_t)table_stats::status_fields::ROUND_END;
        s.dealer = dealer;
    });
}
ACTION wubba::dealerseed(uint64_t tableId, checksum256 encodeSeed)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when save dealer seed");
    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::ROUND_END, "tableStatus != end");
    require_auth(existing->dealer);
    checksum256 hash;
    std::vector<player_bet_info> tempVec;
    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint32_t)table_stats::status_fields::ROUND_START;
        s.betStartTime = 0;
        s.dealerSeed = encodeSeed;
        s.dSeedVerity = 0;
        s.serverSeed = hash;
        s.sSeedVerity = 0;
        s.result = "";
        s.playerInfo = tempVec;
    });
}

ACTION wubba::serverseed(uint64_t tableId, checksum256 encodeSeed)
{
    name serveraccount = "useraaaaaaah"_n;
    require_auth(serveraccount);

    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when save server seed");
    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::ROUND_START, "tableStatus != start");

    tableround.modify(existing, _self, [&](auto &s) {
        s.serverSeed = encodeSeed;
        s.tableStatus = (uint32_t)table_stats::status_fields::ROUND_BET;
        s.betStartTime = now();
        // print_f("start time is %\n", s.betStartTime);
    });

    //todo:defer 30 ,bet->reveal
    // eosio::transaction txn;
    // txn.actions.emplace_back(
    //     permission_level{serveraccount, "active"_n},
    //     _self,
    //     "endbet"_n,
    //     tableId);
    // txn.delay_sec = 30; //defer 30s
    // uint128_t deferred_id = (uint128_t(tableId) << 64);
    // cancel_deferred(deferred_id);
    // txn.send(deferred_id, _self, false);
}

ACTION wubba::endbet(uint64_t tableId)
{
    require_auth("useraaaaaaah"_n);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when endbet");

    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::ROUND_BET, "tableStatus != bet");
    uint32_t useTime = now() - existing->betStartTime;
    print_f("use time is %\n", useTime);
    eosio_assert(useTime > 30, "time <=30, it is not time to change tableStatus to reveal");

    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint32_t)table_stats::status_fields::ROUND_REVEAL;
    });
}

ACTION wubba::playerbet(uint64_t tableId, uint64_t betType, name player, uint64_t betAmount)
{
    require_auth(player);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when palyer bet");
    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::ROUND_BET, "tableStatus != bet");
    eosio_assert((now() - existing->betStartTime) < 30, "bet already timeout");

    bool flag = false;
    for (const auto &p : existing->playerInfo)
    {
        if (p.player == player)
        {
            flag = true;
            break;
        }
    }
    eosio_assert(!flag, "player have bet");

    player_bet_info temp;
    temp.player = player;
    temp.betAmount = betAmount;
    temp.betType = betType;

    tableround.modify(existing, _self, [&](auto &s) {
        s.playerInfo.emplace_back(temp);
    });
}

ACTION wubba::verdealeseed(uint64_t tableId, string seed)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when verify dealer seed");
    require_auth(existing->dealer);
    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::ROUND_REVEAL, "tableStatus != reveal");
    eosio_assert((now() - existing->betStartTime) > 30, "It's not time to verify dealer seed yet.");
    assert_sha256(seed.c_str(), seed.size(), ((*existing).dealerSeed));

    tableround.modify(existing, _self, [&](auto &s) {
        s.dSeedVerity = true;
    });
}

ACTION wubba::trusteeship(uint64_t tableId)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when trusteeship");
    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::ROUND_END, "tableStatus != end");
    require_auth(existing->dealer);

    tableround.modify(existing, _self, [&](auto &s) {
        s.trusteeship = true;
    });
}

ACTION wubba::verserveseed(uint64_t tableId, string seed)
{
    require_auth("useraaaaaaah"_n);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when verify dealer seed");
    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::ROUND_REVEAL, "tableStatus != reveal");
    eosio_assert((now() - existing->betStartTime) > 30, "It's not time verify server seed yet.");
    assert_sha256(seed.c_str(), seed.size(), ((*existing).serverSeed));
    tableround.modify(existing, _self, [&](auto &s) {
        s.sSeedVerity = true;
    });

   /**
     * @brief dealer disconnect/trusteeship
     * server eosjs controll: verserveseed action is 2' behind verdealeseed.
     * */
     if (existing->trusteeship && existing->sSeedVerity)
          reveal(tableId, true); // trusteeship：only use server seed to reveal.
     else if (existing->dSeedVerity && existing->sSeedVerity)
          reveal(tableId, false); // use both server and dealer seed to reveal.
     else if(!existing->dSeedVerity && existing->sSeedVerity)
          reveal(tableId, true); // disconnected：only use server seed to reveal.

}

// char to int
unsigned int SDBMHash(char *str)
{
    unsigned int hash = 0;
    while (*str)
    {
        // equivalent to: hash = 65599*hash + (*str++);
        hash = (*str++) + (hash << 6) + (hash << 16) - hash;
    }
    return (hash & 0x7FFFFFFF);
}

void wubba::reveal(uint64_t tableId, bool trusteeship)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when reveal");
    constexpr size_t max_stack_buffer_size = 128;
    char *buffer = (char *)(malloc(max_stack_buffer_size));
    datastream<char *> ds(buffer, max_stack_buffer_size);
    if (!existing->dSeedVerity)
        print_f("connet is wrong");
    else
        ds << existing->dealerSeed;

    ds << existing->serverSeed;
    wbrng.srand(SDBMHash(buffer));
    uint64_t limitNum = wbrng.rand() % 10;
    bool result = false;
    if (limitNum >= 5)
        result = true;
    print_f("result is %\n", result);
    std::vector<player_bet_info> tempVec;

    auto itr = (existing->playerInfo).begin();
    for (; itr != (existing->playerInfo).end(); itr++)
    {
        player_bet_info tempInfo;
        tempInfo = (*itr);
        if (result)
        {
            if (itr->betType >= 5)
                tempInfo.playerResult = "win";
            else
                tempInfo.playerResult = "lose";
        }
        else
        {
            if (itr->betType >= 5)
                tempInfo.playerResult = "lose";
            else
                tempInfo.playerResult = "win";
        }
        tempVec.emplace_back(tempInfo);
    }
    tableround.modify(existing, _self, [&](auto &s) {
        s.playerInfo = tempVec;
        s.tableStatus = (uint32_t)table_stats::status_fields::ROUND_END;
        s.result = ""; //todo?
    });
}

EOSIO_DISPATCH(wubba, (newtable)(dealerseed)(serverseed)(endbet)(playerbet)(verdealeseed)(verserveseed)(trusteeship)(reveal))
