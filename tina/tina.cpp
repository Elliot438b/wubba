#include "tina.hpp"

ACTION tina::erasingdata(uint64_t key)
{
    require_auth(_self);
    if (key == -1)
    {
        auto itr = tinatable.begin();
        while (itr != tinatable.end())
        {
            eosio::print("Removing data ", _self, ", key: ", key, ", itr: ", itr->balance);
            itr = tinatable.erase(itr);
        }
    }
    else
    {
        auto itr = tinatable.find(key);
        tinatable.erase(itr);
    }
}

ACTION tina::testmultidex(asset money)
{
    print_f("testtransfer : %\n", money);
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        "eosio.token"_n, {{owner, "active"_n}},
        {owner, accounta, money, money.to_string()});
    tinatable.emplace(_self, [&](auto &s) {
        s.id = tinatable.available_primary_key();
        s.balance = money;
    });
}

ACTION tina::testdispatch()
{
    auto money = asset(10000, symbol(symbol_code("SYS"), 4)); // money = 1.0000 SYS
    print_f("testtransfer : %\n", money);
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        "eosio.token"_n, {{owner, "active"_n}},
        {owner, accounta, money, money.to_string()});
}

ACTION tina::testtransfer(asset money)
{
    print_f("testtransfer : %\n", money);
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        "eosio.token"_n, {{owner, "active"_n}},
        {owner, accounta, money, std::string("money ")});
}

ACTION tina::testreverse(asset money)
{
    print_f("testreverse : %\n", money);
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        "eosio.token"_n, {{accounta, "active"_n}},
        {accounta, owner, money, std::string("money ")});
}

ACTION tina::testaccount(asset money)
{
    print_f("testaccount : %\n", money);
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        "eosio.token"_n, {{accounta, "active"_n}},
        {accounta, accountb, money, std::string("money ")});
}

EOSIO_DISPATCH(tina, (erasingdata)(testmultidex)(testdispatch)(testtransfer)(testreverse)(testaccount))
