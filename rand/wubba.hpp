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

typedef enum {
    START = 0,
    BET,
    REVEAL,
    END
} TABLE_STATUS;

CONTRACT wubba : public contract {
public:
using contract::contract;

wubba( name receiver, name code, datastream<const char*> ds )
: contract(receiver, code, ds), roundstable(receiver, receiver.value) {}
// wubba( name um ):contract(um){}

ACTION newtable(uint64_t tableId, name dealer);

ACTION dealerseed( uint64_t tableId, checksum256 encodeSeed);

ACTION serverseed( uint64_t tableId, checksum256 encodeSeed);

ACTION endbet(uint64_t tableId);

ACTION playerbet( uint64_t tableId, uint64_t bet, name player);

ACTION verdealeseed(uint64_t tableId, string seed);

ACTION verserveseed(uint64_t tableId, string seed);

void reveal(uint64_t tableId);



TABLE round_stats {
        uint64_t          tableId;
        uint64_t	      time;
        uint64_t  	      bet;
        checksum256 	  dealerseed;
        bool              dSeedVerity;
        checksum256       serverseed;
        bool              sSeedVerity;
        string            result;
        string            tableStatus;
        name              dealer;
        name              player;
        //TABLE_STATUS      testStatus;
//        round_stats()
//        {
//            tableStatus = "end";
//        };
        uint64_t primary_key()const { return tableId; }
};

typedef eosio::multi_index< "round"_n, wubba::round_stats> round_t;

struct WBRNG {
    unsigned long next;

    void srand(unsigned int seed) {
        next = seed;
    }

    int rand() {
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
//using reveal_action = action_wrapper<"reveal"_n, &wubba::reveal>;

round_t roundstable;
WBRNG wbrng;
};


