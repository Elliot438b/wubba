#include "tina.hpp"

ACTION tina::erasingdata(uint64_t key)
{
    require_auth(_self);
    if (key == -1)
    {
        auto itr = tinatable.begin();
        while (itr != tinatable.end())
        {
            eosio::print(" Removing data ", _self, ", key: ", key, ", itr: ", itr->balance);
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
    string seed = "10";
    eosio::checksum256 result = sha256(seed.c_str(), seed.size());
    eosio::print(" result : ", result);
    auto hash_data = result.extract_as_byte_array();
    string result_str = to_hex(reinterpret_cast<const char *>(hash_data.data()), 32);
    std::vector<string> cardSeedsVec;
    auto counter = 0;
    while (counter < 6)
    {
        string temp_str = result_str.substr(counter * 9, 9);
        // eosio::print(" counter : ", counter, " temp_str=", temp_str);
        cardSeedsVec.emplace_back(temp_str);
        counter++;
    }

    for (const auto &tem : cardSeedsVec)
    {
        eosio::print(" card seed =", tem);
    }

    // eosio::print(" testtransfer : ", money);
    // INLINE_ACTION_SENDER(eosio::token, transfer)
    // (
    //     "eosio.token"_n, {{owner, "active"_n}},
    //     {owner, accounta, money, money.to_string()});
    // tinatable.emplace(_self, [&](auto &s) {
    //     s.id = tinatable.available_primary_key();
    //     s.balance = money;
    // });
}

ACTION tina::testdispatch(string betAmount)
{
    auto amount = from_string(betAmount, symbol(symbol_code("SYS"), 4));
    eosio::print(" [amount] : ", amount);
    auto money = asset(10000, symbol(symbol_code("SYS"), 4)); // money = 1.0000 SYS
    eosio::print(" testtransfer : ", money);
    // INLINE_ACTION_SENDER(eosio::token, transfer)
    // (
    //     "eosio.token"_n, {{owner, "active"_n}},
    //     {owner, accounta, money, money.to_string()});
}

ACTION tina::tesexransfer()
{
    extended_asset examount = extended_asset(10000, extended_symbol(symbol(symbol_code("SYS"), 4), "eosio.token"_n));
    eosio::print(" tesexransfer : ", examount.contract, " ", examount.quantity);
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        examount.contract, {{owner, "active"_n}},
        {owner, accounta, examount.quantity, examount.quantity.to_string()});
}

ACTION tina::testtransfer(asset money)
{
    eosio::print(" testtransfer : ", money);
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        "eosio.token"_n, {{owner, "active"_n}},
        {owner, accounta, money, std::string("money ")});
}

ACTION tina::testreverse(asset money)
{
    eosio::print(" testreverse : ", money);
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        "eosio.token"_n, {{accounta, "active"_n}},
        {accounta, owner, money, std::string("money ")});
}

ACTION tina::testaccount(asset money)
{
    eosio::print(" testaccount : ", money);
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        "eosio.token"_n, {{accounta, "active"_n}},
        {accounta, accountb, money, std::string("money ")});
}
ACTION tina::testcardobta()
{
    for (auto p2 = 0; p2 < 10; p2++)
    {
        for (auto b2 = 0; b2 < 10; b2++)
        {
            for (auto c5 = 0; c5 < 10; c5++)
            {
                for (auto c6 = 0; c6 < 10; c6++)
                {
                    // first 2 cards init.
                    auto sum_p = p2;
                    auto sum_b = b2;
                    // 5th/6th card obtain rules.
                    bool fifthCard_p = false; // if player obtain the 3th card.
                    bool fifthCard_b = false; // if banker obtain the 3th card which is the 5th card of six.
                    bool sixthCard_b = false; // if banker obtain the 3th card which is the 6th card of six.
                    // all non-obtain rules
                    if ((sum_p == 8 || sum_p == 9 || sum_b == 8 || sum_b == 9) || ((sum_p == 6 || sum_p == 7) && (sum_b == 6 || sum_b == 7)))
                    {
                        eosio::print("@"); // player has 2 cards and banker has 2 cards.
                    }
                    // all obtain rules.
                    else
                    {
                        if (sum_p < 6)
                        {
                            sum_p = (sum_p + c5) % 10;
                            fifthCard_p = true;
                            if (sum_b == 6 && (sum_p == 6 || sum_p == 7))
                            {
                                sum_b = (sum_b + c6) % 10;
                                sixthCard_b = true;
                            }
                        }
                        if (!sixthCard_b &&
                            (sum_b < 3 || (sum_b == 3 && !(sum_p == 8 && fifthCard_p)) || (sum_b == 4 && !((sum_p == 1 || sum_p == 8 || sum_p == 9 || sum_p == 0) && fifthCard_p)) || (sum_b == 5 && !((sum_p == 1 || sum_p == 2 || sum_p == 3 || sum_p == 8 || sum_p == 9 || sum_p == 0) && fifthCard_p))))
                        {
                            if (fifthCard_p)
                            {
                                sum_b = (sum_b + c6) % 10;
                                sixthCard_b = true;
                            }
                            else
                            {
                                sum_b = (sum_b + c5) % 10;
                                fifthCard_b = true;
                            }
                        }
                    }
                    // symbol macroscopic
                    if (fifthCard_p && sixthCard_b)
                    {
                        eosio::print("-"); // player has 3 cards and banker has 3 cards.
                    }
                    else if (fifthCard_p && !sixthCard_b)
                    {
                        eosio::print("#"); // player has 3 cards and banker has 2 cards.
                    }
                    else if (fifthCard_b)
                    {
                        eosio::print("$"); // player has 2 cards and banker has 3 cards.
                    }
                    eosio::print("[", p2, ",", b2, ",", c5, ",", c6, "]", "==[", fifthCard_p, ",", fifthCard_b || sixthCard_b, "] ");
                }
            }
        }
    }
}
EOSIO_DISPATCH(tina, (erasingdata)(testmultidex)(testdispatch)(tesexransfer)(testtransfer)(testreverse)(testaccount)(testcardobta))
