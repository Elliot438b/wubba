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
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_END;
        s.dealer = dealer;
    });
}

ACTION wubba::dealerseed(uint64_t tableId, checksum256 encodeSeed)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when save dealer seed");
    if (!existing->trusteeship)
    {
        eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "tableStatus != end");
        require_auth(existing->dealer);
        checksum256 hash;
        std::vector<player_bet_info> tempVec;
        tableround.modify(existing, _self, [&](auto &s) {
            s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_START;
            s.betStartTime = 0;
            s.dealerSeed = encodeSeed;
            s.dSeedVerity = 0;
            s.serverSeed = hash;
            s.sSeedVerity = 0;
            s.result = "";
            s.playerInfo = tempVec;
        });
    }
}

ACTION wubba::serverseed(uint64_t tableId, checksum256 encodeSeed)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when save server seed");
    if (existing->trusteeship)
    {
        eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "The currenct round not end!");
        checksum256 hash;
        std::vector<player_bet_info> tempVec;
        tableround.modify(existing, _self, [&](auto &s) {
            s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_BET;
            s.betStartTime = now();
            s.dealerSeed = hash;
            s.dSeedVerity = 0;
            s.serverSeed = encodeSeed;
            s.sSeedVerity = 0;
            s.result = "";
            s.playerInfo = tempVec;
        });
    }
    else
    {
        eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_START, "Dealer haven't started a new round yet!");
        tableround.modify(existing, _self, [&](auto &s) {
            s.serverSeed = encodeSeed;
            s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_BET;
            s.betStartTime = now();
            // print_f("start time is %\n", s.betStartTime);
        });
    }

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

// server defer action
ACTION wubba::endbet(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when endbet");
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_BET, "tableStatus != bet");
    uint64_t useTime = now() - existing->betStartTime;
    print_f("use time is %\n", useTime);
    eosio_assert(useTime > 30, "time <=30, it's bet time now.");
    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_REVEAL;
    });
}

ACTION wubba::playerbet(uint64_t tableId, uint64_t betType, name player, uint64_t betAmount)
{
    require_auth(player);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when palyer bet");
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_BET, "tableStatus != bet");
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
    if (!existing->trusteeship)
    {
        eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_REVEAL, "tableStatus != reveal");
        eosio_assert((now() - existing->betStartTime) > 30, "It's not time to verify dealer seed yet.");
        assert_sha256(seed.c_str(), seed.size(), ((*existing).dealerSeed));
        tableround.modify(existing, _self, [&](auto &s) {
            s.dSeedVerity = true;
        });
    }
}

// Server push defer 3' action, once got ROUND_REVEAL.
ACTION wubba::verserveseed(uint64_t tableId, string seed)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when verify dealer seed");
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_REVEAL, "tableStatus != reveal");
    eosio_assert((now() - existing->betStartTime) > 30, "It's not time verify server seed yet.");
    assert_sha256(seed.c_str(), seed.size(), ((*existing).serverSeed));
    tableround.modify(existing, _self, [&](auto &s) {
        s.sSeedVerity = true;
    });
    eosio_assert(existing->sSeedVerity, "Illegal server seed info!");
    constexpr size_t max_stack_buffer_size = 128;
    char *buffer = (char *)(malloc(max_stack_buffer_size));
    datastream<char *> ds(buffer, max_stack_buffer_size);
    ds << existing->serverSeed;
    if (!existing->dSeedVerity && !existing->trusteeship)
    { // dealer disconnect
        INLINE_ACTION_SENDER(wubba, disconnecthi)
        (
            _self, {{serveraccount, "active"_n}},
            {existing->dealer, existing->tableId});
    }
    else if (existing->dSeedVerity && !existing->trusteeship)
    { // dealer online and not trusteeship
        ds << existing->dealerSeed;
    }
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
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_END;
        s.result = ""; //todo?
    });
}

ACTION wubba::trusteeship(uint64_t tableId)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when trusteeship");
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "tableStatus != end");
    require_auth(existing->dealer); // dealer trusteeship server.
    tableround.modify(existing, _self, [&](auto &s) {
        s.trusteeship = true;
    });
}

ACTION wubba::exitruteship(uint64_t tableId)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when trusteeship");
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "tableStatus != end");
    require_auth(existing->dealer); // dealer trusteeship server.
    tableround.modify(existing, _self, [&](auto &s) {
        s.trusteeship = false;
    });
}

ACTION wubba::disconnecthi(name informed, uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when trusteeship");
    eosio_assert(existing->dealer == informed, "People informed is not the dealer of table!");
    print_f("SC disconnecthi has already informed %\n", informed.to_string());
}

EOSIO_DISPATCH(wubba, (newtable)(dealerseed)(serverseed)(endbet)(playerbet)(verdealeseed)(verserveseed)(trusteeship)(exitruteship))
