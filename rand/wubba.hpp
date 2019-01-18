/**
 *  @file
 *  @copyright defined in eos/LICENSE
 */
#pragma once

#include <eosiolib/asset.hpp>
#include <eosiolib/eosio.hpp>

#include <string>

namespace eosiosystem {
   class system_contract;
}

namespace eosio {

   using std::string;

   class wubba : public contract {
      public:
         wubba( account_name self ):contract(self){}

         void dealerseed( uint64 roundId, fc::sha256 encodeSeed);

         void serverseed( uint64 roundId, fc::sha256 encodeSeed);

         void playerbet( uint64 roundId, bool bet);
      
         void verdealerseed(uint64 roundid, string seed);

	 void verserverseed(uint64 roundid, string seed);
         
         void reveal(uint64 roundId);

      private:

         struct round_stats {
            uint64          roundId;
	    uint64	    flag;
	    bool  	    betStat;
            fc::sha256 	    dealerseed;
            fc::sha256      serverseed;
	    string          result;

            uint64_t primary_key()const { return roundId; }
         };

         typedef eosio::multi_index<N(round), round_stats> rounds;


   };


} /// namespace eosio
