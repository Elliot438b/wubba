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
        s.tableStatus = (uint32_t)table_stats::status_fields::END;
        s.dealer = dealer;
    });
}
ACTION wubba::dealerseed(uint64_t tableId, checksum256 encodeSeed)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when save dealer seed");
    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::END, "tableStatus != end");
    require_auth(existing->dealer);
    checksum256 hash;
    tableround.modify(existing, _self, [&](auto &s) {
        s.dealerSeed = encodeSeed;
        s.tableStatus = (uint32_t)table_stats::status_fields::START;
        s.betStartTime = 0;
        s.betType = 0;
        s.dSeedVerity = 0;
        s.serverSeed = hash;
        s.sSeedVerity = 0;
        s.result = "";
        s.player = ""_n;
    });
}

ACTION wubba::serverseed(uint64_t tableId, checksum256 encodeSeed)
{
    name serveraccount = "useraaaaaaah"_n;
    require_auth(serveraccount);

    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when save server seed");
    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::START, "tableStatus != start");

    tableround.modify(existing, _self, [&](auto &s) {
        s.serverSeed = encodeSeed;
        s.tableStatus = (uint32_t)table_stats::status_fields::BET;
        s.betStartTime = now();
        // print_f("start time is %\n", s.betStartTime);
    });

    //todo:defer 30 ,bet->reveal
    eosio::transaction txn;
    txn.actions.emplace_back(
        permission_level{serveraccount, "active"_n},
        _self,
        "endbet"_n,
        tableId);
    txn.delay_sec = 30; //defer 30s
    uint128_t deferred_id = (uint128_t(tableId) << 64);
    cancel_deferred(deferred_id);
    // txn.send(deferred_id, _self, false);
}

ACTION wubba::endbet(uint64_t tableId)
{
    require_auth("useraaaaaaah"_n);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when endbet");

    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::BET, "tableStatus != bet");
    uint32_t useTime = now() - existing->betStartTime;
    print_f("use time is %\n", useTime);
    eosio_assert(useTime > 30, "time <=30, it is not time to change tableStatus to reveal");

    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint32_t)table_stats::status_fields::REVEAL;
    });
}

ACTION wubba::playerbet(uint64_t tableId, uint64_t betType, name player)
{
    require_auth(player);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when palyer bet");
    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::BET, "tableStatus != bet");
    eosio_assert((now() - existing->betStartTime) < 30, "bet already timeout");
    eosio_assert(existing->betType == 0, "you have beted");

    tableround.modify(existing, _self, [&](auto &s) {
        s.betType = betType;
        s.player = player;
    });
}

ACTION wubba::verdealeseed(uint64_t tableId, string seed)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when verify dealer seed");
    require_auth(existing->dealer);
    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::REVEAL, "tableStatus != reveal");
    eosio_assert((now() - existing->betStartTime) > 30, "It's not time to verify dealer seed yet.");
    assert_sha256(seed.c_str(), seed.size(), ((*existing).dealerSeed));

    tableround.modify(existing, _self, [&](auto &s) {
        s.dSeedVerity = true;
    });

    if (existing->dSeedVerity && existing->sSeedVerity)
        reveal(tableId);
}

ACTION wubba::verserveseed(uint64_t tableId, string seed)
{
    require_auth("useraaaaaaah"_n);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), "tableId not exists when verify dealer seed");
    eosio_assert(existing->tableStatus == (uint32_t)table_stats::status_fields::REVEAL, "tableStatus != reveal");
    eosio_assert((now() - existing->betStartTime) > 30, "It's not time verify server seed yet.");
    assert_sha256(seed.c_str(), seed.size(), ((*existing).serverSeed));
    tableround.modify(existing, _self, [&](auto &s) {
        s.sSeedVerity = true;
    });

    if (existing->dSeedVerity && existing->sSeedVerity)
        reveal(tableId); //todo:defer 2s?
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

void wubba::reveal(uint64_t tableId)
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
    tableround.modify(existing, _self, [&](auto &s) {
        if (result)
        {
            if (existing->betType >= 5)
                s.result = "win";
            else
                s.result = "lose";
        }
        else
        {
            if (existing->betType >= 5)
                s.result = "lose";
            else
                s.result = "win";
        }
        s.tableStatus = (uint32_t)table_stats::status_fields::END;
    });
}

EOSIO_DISPATCH(wubba, (newtable)(dealerseed)(serverseed)(endbet)(playerbet)(verdealeseed)(verserveseed)(reveal))
