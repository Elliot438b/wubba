/**
 *  @file
 *  @copyright defined in eos/LICENSE
 */

#include "wubba.hpp"

namespace eosio {

void wubba::dealerseed( uint64 roundId, fc::sha256 encodeSeed)
{

    rounds roundstable( _self, _self );
    auto existing = roundstable.find(roundId );
    eosio_assert( existing == roundsstable.end(), "roundId already exists when save dealer seed" );

    roundstable.emplace( _self, [&]( auto& s ) {
       s.roundId           = roundId;
       s.dealerseed        = encodeSeed;
    });
}


void wubba::serverseed( uint64 roundId, fc::sha256 encodeSeed)
{
    rounds roundstable( _self, _self );
    auto existing = roundstable.find(roundId );
    eosio_assert( existing != roundsstable.end(), "roundId not exists when save server seed" );

    roundstable.emplace( _self, [&]( auto& s ) {
       s.serverseed        = encodeSeed;
    });
}

void wubba::playerbet( uint64 roundId, bool bet)
{
    rounds roundstable( _self, _self );
    auto existing = roundstable.find(roundId );
    eosio_assert( existing != roundsstable.end(), "roundId not exists when palyer bet" );

    roundstable.emplace( _self, [&]( auto& s ) {
       s.bet        = bet;
    });

}

void wubba::verdealerseed(uint64 roundid, string seed)
{
    rounds roundstable( _self, _self );
    auto existing = roundstable.find(roundId );
    eosio_assert( existing != roundsstable.end(), "roundId not exists when verify dealer seed" );

    assert_sha256( seed, sizeof(seed.c_str()), &existing->dealerseed );
}

void wubba::verserverseed(uint64 roundid, string seed)
{
    rounds roundstable( _self, _self );
    auto existing = roundstable.find(roundId );
    eosio_assert( existing != roundsstable.end(), "roundId not exists when verify dealer seed" );

    assert_sha256( seed, sizeof(seed.c_str()), &existing->serverseed );

}

void wubba::reveal(uint64 roundId)
{
    rounds roundstable( _self, _self );
    auto existing = roundstable.find(roundId );
    eosio_assert( existing != roundsstable.end(), "roundId not exists when reveal" );

    string randSeed = existing->dealerseed + existing->serverseed;
    uint64 randNum = std::srand(randSeed);
    uint64 limitNum = randNum%10;
    bool result = false;
    if(limitNum >= 5)
	result = true;
    
    roundstable.emplace( _self, [&]( auto& s ) {
       if(existing->bet == result)
       	  s.result       = "win";
       else
          s.result       = "lose";
    });
}
} /// namespace eosio

EOSIO_ABI( eosio::wubba, (dealerseed)(serverseed)(playerbet)(verdealerseed)(verserverseed)(reveal) )
