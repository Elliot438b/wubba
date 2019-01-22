/**
 *  @file
 *  @copyright defined in eos/LICENSE
 */

#include "wubba.hpp"

ACTION wubba::newtable(uint64_t tableId, name dealer)
{
    require_auth(dealer);
    auto existing = roundstable.find(tableId );
    eosio_assert( existing == roundstable.end(), "tableId already exists when newtable" );

    roundstable.emplace( _self, [&]( auto& s ) {
        s.tableId           = tableId;
        s.tableStatus       = "end";
        s.dealer            = dealer;
    });
}
ACTION wubba::dealerseed( uint64_t tableId, checksum256 encodeSeed)
{
    //    round_t roundstable( _self, _self );

    auto existing = roundstable.find(tableId );
    eosio_assert( existing != roundstable.end(), "tableId not exists when save dealer seed" );
    eosio_assert( existing->tableStatus == "end", "tableStatus != end" );
    require_auth(existing->dealer);

    roundstable.modify( existing, _self, [&]( auto& s ) {
        s.dealerseed        = encodeSeed;
        s.tableStatus       = "start";
    });

}


ACTION wubba::serverseed( uint64_t tableId, checksum256 encodeSeed)
{
//    round_t roundstable( _self, _self );
    require_auth("useraaaaaaah"_n);

    auto existing = roundstable.find(tableId );
    eosio_assert( existing != roundstable.end(), "roundId not exists when save server seed" );
    eosio_assert( existing->tableStatus == "start", "tableStatus != start" );

    roundstable.modify( existing, _self , [&]( auto& s ) {
        s.serverseed        = encodeSeed;
        s.tableStatus        = "bet";
        s.time              = now();
       // print_f("start time is %\n", s.time);
    });

    //todo:defer 30 ,bet->reveal
    eosio::transaction txn{};
    txn.actions.emplace_back(
            permission_level{_self, "active"_n},
            _self,
            "endbet"_n,
            std::make_tuple(tableId));
    txn.delay_sec = 30;//defer 30s
    uint128_t deferred_id = (uint128_t(tableId) << 64);
    cancel_deferred( deferred_id );
    txn.send( deferred_id, _self );
    //txn.send(0xffffffffffffffff, _self, true);
    //txn.send( (uint128_t("eosio"_n) << 64), _self, true);

}

ACTION wubba::endbet(uint64_t tableId)
{
    auto existing = roundstable.find(tableId);
    eosio_assert( existing != roundstable.end(), "roundId not exists when endbet" );

    eosio_assert( existing->tableStatus == "bet", "tableStatus != bet" );
    uint32_t useTime = now() - existing->time;
    print_f("use time is %\n", useTime);
    eosio_assert((now() - existing->time) > 30, "time <=30, it is not time to change tableStatus to reveal");

    roundstable.modify( existing, _self, [&]( auto& s ) {
        s.tableStatus        = "reveal";
    });
}

ACTION wubba::playerbet( uint64_t tableId, uint64_t bet, name player)
{
    //  round_t roundstable( _self, _self );
    require_auth(player);

    auto existing = roundstable.find(tableId );
    eosio_assert( existing != roundstable.end(), "roundId not exists when palyer bet" );
    eosio_assert( existing->tableStatus == "bet", "tableStatus != bet" );
    eosio_assert((now() - existing->time) < 30, "bet already timeout");
    eosio_assert(existing->bet == 0, "you have beted");

    roundstable.modify( existing, _self, [&]( auto& s ) {
        s.bet        = bet;
    });

}

ACTION wubba::verdealeseed(uint64_t tableId, string seed)
{
    //round_t roundstable( _self, _self );

    auto existing = roundstable.find(tableId );
    eosio_assert( existing != roundstable.end(), "roundId not exists when verify dealer seed" );
    require_auth(existing->dealer);
    eosio_assert( existing->tableStatus == "reveal", "tableStatus != reveal" );
    eosio_assert((now() - existing->time) > 30, "It's not time to verify dealer seed yet.");

    assert_sha256( seed.c_str(), seed.size(), ((*existing).dealerseed) );

    roundstable.modify( existing, _self, [&]( auto& s ) {
        s.dSeedVerity        = true;
    });

    if(existing->dSeedVerity && existing->sSeedVerity)
        reveal(tableId);
}

ACTION wubba::verserveseed(uint64_t tableId, string seed)
{
    // round_t roundstable( _self, _self );
    require_auth("useraaaaaaah"_n);

    auto existing = roundstable.find( tableId );
    eosio_assert( existing != roundstable.end(), "roundId not exists when verify dealer seed" );
    eosio_assert( existing->tableStatus == "reveal", "tableStatus != reveal" );
    eosio_assert((now() - existing->time) > 30, "It's not time verify server seed yet.");

    assert_sha256( seed.c_str(), seed.size(), ((*existing).serverseed) );

    roundstable.modify( existing, _self, [&]( auto& s ) {
        s.sSeedVerity        = true;
    });

    if(existing->dSeedVerity && existing->sSeedVerity)
        reveal(tableId);//todo:defer 2s?
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

void wubba::reveal(uint64_t tableId)
{
    //round_t roundstable( _self, _self );
    auto existing = roundstable.find( tableId );
    eosio_assert( existing != roundstable.end(), "roundId not exists when reveal" );

    constexpr size_t max_stack_buffer_size = 128;
    char* buffer = (char*)( malloc(max_stack_buffer_size) );

    datastream<char*> ds( buffer, max_stack_buffer_size );
    if(!existing->dSeedVerity)
        print_f("connet is wrong");
    else
        ds << existing->dealerseed;
    ds << existing->serverseed;
    wbrng.srand(SDBMHash(buffer));

    uint64_t limitNum = wbrng.rand()%10;
    bool result = false;
    if(limitNum >= 5)
        result = true;

    print_f("result is %\n", result);

    roundstable.modify( existing, _self, [&]( auto& s ) {
        if(result)
        {
            if (existing->bet >= 5)
                s.result = "win";
            else
                s.result = "lose";
        }
        else
        {
            if(existing->bet >= 5)
                s.result = "lose";
            else
                s.result = "win";
        }
        s.tableStatus = "end";
    });
}

EOSIO_DISPATCH( wubba, (newtable)(dealerseed)(serverseed)(endbet)(playerbet)(verdealeseed)(verserveseed)(reveal) )
