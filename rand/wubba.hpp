/**
 *  @file
 *  @copyright defined in eos/LICENSE
 */
#pragma once

#include <eosiolib/asset.hpp>
#include <eosiolib/eosio.hpp>
#include <eosiolib/crypto.h>
#include <eosiolib/transaction.hpp>
#include <eosiolib/permission.hpp>
#include <eosiolib/action.hpp>
#include <string>
#include <cstdlib>

using namespace eosio;
using namespace std;
using std::string;

CONTRACT wubba : public contract
{
  public:
    using contract::contract;

    wubba(name receiver, name code, datastream<const char *> ds)
        : contract(receiver, code, ds), tableround(receiver, receiver.value) {}

    ACTION newtable(uint64_t tableId, name dealer);
    ACTION dealerseed(uint64_t tableId, checksum256 encodeSeed);
    ACTION serverseed(uint64_t tableId, checksum256 encodeSeed);
    ACTION endbet(uint64_t tableId);
    ACTION playerbet(uint64_t tableId, uint64_t bet, name player, uint64_t betAmount);
    ACTION verdealeseed(uint64_t tableId, string seed);
    ACTION verserveseed(uint64_t tableId, string seed);
    void reveal(uint64_t tableId);

struct player_bet_info{
    name player;
    uint64_t betType;
    uint64_t betAmount;
    string playerResult;

    EOSLIB_SERIALIZE( player_bet_info, (player)(betType)(betAmount)(playerResult) )
};

        TABLE table_stats
        {
            uint64_t tableId;
            uint64_t betStartTime;
            checksum256 dealerSeed;
            bool dSeedVerity;
            checksum256 serverSeed;
            bool sSeedVerity;
            string result;
            uint32_t tableStatus;
            name dealer;

            std::vector<player_bet_info> playerInfo;

            uint64_t primary_key() const { return tableId; }

        enum class status_fields : uint32_t
        {
            START = 1,  // 0001
            BET = 2,    // 0010
            REVEAL = 4, // 0100
            END = 0     // 0000
        };

        EOSLIB_SERIALIZE(table_stats, (tableId)(betStartTime)(dealerSeed)(dSeedVerity)(serverSeed)(sSeedVerity)(result)(tableStatus)(dealer)(playerInfo))
    };

    typedef eosio::multi_index<"tablesinfo"_n, wubba::table_stats> singletable_t;

    // random
    struct WBRNG
    {
        unsigned long next;
        void srand(unsigned int seed)
        {
            next = seed;
        }
        int rand()
        {
            next = next * 1103515245 + 12345;
            return (unsigned int)(next / 65536) % 32768;
        }
    };

    using newtable_action = action_wrapper<"newtable"_n, &wubba::newtable>;
    using dealerseed_action = action_wrapper<"dealerseed"_n, &wubba::dealerseed>;
    using serverseed_action = action_wrapper<"serverseed"_n, &wubba::serverseed>;
    using endbet_action = action_wrapper<"endbet"_n, &wubba::endbet>;
    using playerbet_action = action_wrapper<"playerbet"_n, &wubba::playerbet>;
    using verdealeseed_action = action_wrapper<"verdealeseed"_n, &wubba::verdealeseed>;
    using verserveseed_action = action_wrapper<"verserveseed"_n, &wubba::verserveseed>;

    singletable_t tableround;
    WBRNG wbrng;
};
