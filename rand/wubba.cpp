/**
 *  @file
 *  @copyright defined in eos/LICENSE
 */

#include "wubba.hpp"


ACTION wubba::dealerseed( uint64_t roundId, checksum256 encodeSeed)
{

//    round_t roundstable( _self, _self );
    auto existing = roundstable.find(roundId );
    eosio_assert( existing == roundstable.end(), "roundId already exists when save dealer seed" );

    roundstable.emplace( _self, [&]( auto& s ) {
       s.roundId           = roundId;
       s.dealerseed        = encodeSeed;
    });
}


ACTION wubba::serverseed( uint64_t roundId, checksum256 encodeSeed)
{
//    round_t roundstable( _self, _self );
    auto existing = roundstable.find(roundId );
    eosio_assert( existing != roundstable.end(), "roundId not exists when save server seed" );

    roundstable.modify( existing, _self , [&]( auto& s ) {
       s.serverseed        = encodeSeed;
    });
}

ACTION wubba::playerbet( uint64_t roundId, bool bet)
{
  //  round_t roundstable( _self, _self );
    auto existing = roundstable.find(roundId );
    eosio_assert( existing != roundstable.end(), "roundId not exists when palyer bet" );

    roundstable.modify( existing, _self, [&]( auto& s ) {
       s.bet        = bet;
    });

}

ACTION wubba::verdealeseed(uint64_t roundId, string seed)
{
    //round_t roundstable( _self, _self );
    auto existing = roundstable.find(roundId );
    eosio_assert( existing != roundstable.end(), "roundId not exists when verify dealer seed" );

    assert_sha256( seed.c_str(), seed.size(), ((*existing).dealerseed) );
}

ACTION wubba::verserveseed(uint64_t roundId, string seed)
{
   // round_t roundstable( _self, _self );
    auto existing = roundstable.find(roundId );
    eosio_assert( existing != roundstable.end(), "roundId not exists when verify dealer seed" );

    assert_sha256( seed.c_str(), seed.size(), ((*existing).serverseed) );

}

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

ACTION wubba::reveal(uint64_t roundId)
{
    //round_t roundstable( _self, _self );
    auto existing = roundstable.find(roundId );
    eosio_assert( existing != roundstable.end(), "roundId not exists when reveal" );

    //uint64_t randSeed = existing->dealerseed + existing->serverseed;
    constexpr size_t max_stack_buffer_size = 512;
    char* buffer = (char*)( malloc(max_stack_buffer_size) );

    datastream<char*> ds( buffer, max_stack_buffer_size );
    ds << existing->dealerseed << existing->serverseed;
    wbrng.srand(SDBMHash(buffer));

    uint64_t limitNum = wbrng.rand()%10;
    bool result = false;
    if(limitNum >= 5)
	    result = true;
    
    roundstable.modify( existing, _self, [&]( auto& s ) {
       if(existing->bet == result)
       	  s.result       = "win";
       else
          s.result       = "lose";
    });
}

EOSIO_DISPATCH( wubba, (dealerseed)(serverseed)(playerbet)(verdealeseed)(verserveseed)(reveal) )
