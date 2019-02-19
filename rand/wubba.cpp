/**
 *  @file
 *  @copyright defined in eos/LICENSE
 */

#include "wubba.hpp"
#include <eosiolib/crypto.hpp>
#include "eosio.token.hpp"

uint32_t wubba::betPeriod = 30;
uint32_t wubba::minTableRounds = 2;
uint16_t wubba::decks = 8;

asset wubba::minPerBet = asset(20000, symbol(symbol_code("SYS"), 4));
asset wubba::oneRoundMaxTotalBet = asset(100000, symbol(symbol_code("SYS"), 4));
asset wubba::minTableDeposit = wubba::oneRoundMaxTotalBet * wubba::minTableRounds;

std::string to_hex_w( const char* d, uint32_t s )
{
    std::string r;
    const char* to_hex="0123456789abcdef";
    uint8_t* c = (uint8_t*)d;
    for( uint32_t i = 0; i < s; ++i )
        (r += to_hex[(c[i]>>4)]) += to_hex[(c[i] &0x0f)];
    return r;
}

void shuffcards(std::vector<uint16_t> &cardVec)
{
    uint16_t tempNum = 0;
    for (; tempNum < wubba::decks * 52; tempNum++)
    {
        cardVec.emplace_back(tempNum);
    }
}

ACTION wubba::newtable(name dealer, asset deposit)
{
    require_auth(dealer);
    eosio_assert(deposit >= minTableDeposit, "Table deposit is not enough!");
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        "eosio.token"_n, {{dealer, "active"_n}},
        {dealer, _self, deposit, std::string("tabledeposit")});

    tableround.emplace(_self, [&](auto &s) {
        s.tableId = tableround.available_primary_key();
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_END;
        s.dealer = dealer;
        s.dealerBalance = deposit;
        shuffcards(s.validCardVec);
    });
}

ACTION wubba::dealerseed(uint64_t tableId, checksum256 encodeSeed)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
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
            s.currRoundBetSum = asset(0, symbol(symbol_code("SYS"), 4));
            s.roundResult = "";
            s.playerInfo = tempVec;
        });
    }
}

ACTION wubba::serverseed(uint64_t tableId, checksum256 encodeSeed)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    if (existing->trusteeship)
    {
        eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "The currenct round isn't end!");
        checksum256 hash;
        std::vector<player_bet_info> tempVec;
        tableround.modify(existing, _self, [&](auto &s) {
            s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_BET;
            s.betStartTime = now();
            s.dealerSeed = hash;
            s.dSeedVerity = 0;
            s.serverSeed = encodeSeed;
            s.sSeedVerity = 0;
            s.currRoundBetSum = asset(0, symbol(symbol_code("SYS"), 4));
            s.roundResult = "";
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

ACTION wubba::playerbet(uint64_t tableId, name player, asset betDealer, asset betPlayer, asset betTie, asset betDealerPush, asset betPlayerPush)
{
    require_auth(player);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_BET, "tableStatus != bet");
    eosio_assert((now() - existing->betStartTime) < betPeriod, "Timeout, can't bet!");
    // eosio_assert(betAmount > minPerBet, "betAmount < minPerBet");

    asset player_amount_sum = existing->currRoundBetSum;

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
    //player_amount_sum += betAmount;
    //eosio_assert(player_amount_sum < oneRoundMaxTotalBet, "Over the peak of total bet amount of this round!");

    asset depositAmount = (betDealer + betPlayer + betTie + betDealerPush + betPlayerPush);
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        "eosio.token"_n, {{player, "active"_n}},
        {player, _self, depositAmount, std::string("playerbet")});

    player_bet_info temp;
    temp.player = player;
    temp.betDealer = betDealer;
    temp.betPlayer = betPlayer;
    temp.betTie = betTie;
    temp.betDealerPush = betDealerPush;
    temp.betPlayerPush = betPlayerPush;
    temp.pBonns = asset(0, symbol(symbol_code("SYS"), 4));
    temp.dBonns = asset(0, symbol(symbol_code("SYS"), 4));

    tableround.modify(existing, _self, [&](auto &s) {
        s.playerInfo.emplace_back(temp);
        s.currRoundBetSum = player_amount_sum;
    });
}

// server defer action
ACTION wubba::endbet(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_BET, "tableStatus != bet");
    uint64_t useTime = now() - existing->betStartTime;
    print_f("use time is %\n", useTime);
    eosio_assert(useTime > betPeriod, "Bet time is not end now, wait... ");

    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_REVEAL;
    });

}

ACTION wubba::verdealeseed(uint64_t tableId, string seed)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    require_auth(existing->dealer);
    if (!existing->trusteeship)
    {
        eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_REVEAL, "tableStatus != reveal");
        eosio_assert((now() - existing->betStartTime) > betPeriod, "It's not time to verify dealer seed yet.");
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
    eosio_assert(existing != tableround.end(), notableerr);
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_REVEAL, "tableStatus != reveal");
    eosio_assert((now() - existing->betStartTime) > betPeriod, "It's not time to verify server seed yet.");
    assert_sha256(seed.c_str(), seed.size(), ((*existing).serverSeed));
    tableround.modify(existing, _self, [&](auto &s) {
        s.sSeedVerity = true;
    });

//    constexpr size_t max_stack_buffer_size = 128;
//    char *buffer = (char *)(malloc(max_stack_buffer_size));
//    datastream<char *> ds(buffer, max_stack_buffer_size);
//    ds << existing->serverSeed;
    string serverSeed_str = to_hex_w(reinterpret_cast<const char *>(existing->serverSeed.data()), 32);
    string dealerSeed_str = to_hex_w(reinterpret_cast<const char *>(existing->dealerSeed.data()), 32);
    string hash_str = serverSeed_str;

    if (!existing->dSeedVerity && !existing->trusteeship)
    { // dealer disconnect
        INLINE_ACTION_SENDER(wubba, disconnecthi)
        (
            _self, {{serveraccount, "active"_n}},
            {existing->dealer, existing->tableId});
    }
    else if (existing->dSeedVerity && !existing->trusteeship)
    { // dealer online and not trusteeship
        //ds << existing->dealerSeed;
        hash_str += dealerSeed_str;
    }

    //todo:rand_result
    checksum256 hash;
    hash = sha256( hash_str.c_str(), hash_str.size() );
    auto hash_data = hash.extract_as_byte_array();
    string result_str = to_hex_w(reinterpret_cast<const char *>(hash_data.data()), 32);
    eosio::print(" hash_data : ", result_str);

//    std::vector<string> cardSeedsVec;
    std::vector<uint16_t> cardSeedPos;
    auto counter = 0;
    while (counter < 6)
    {
        string temp_str = result_str.substr(counter * 9, 9);

        wbrng.srand(SDBMHash((char *)temp_str.c_str()));
        uint64_t pos = wbrng.rand() % existing->validCardVec.size();
        // eosio::print(" counter : ", counter, " temp_str=", temp_str);
       // cardSeedsVec.emplace_back(temp_str);
        cardSeedPos.emplace_back(pos);
        counter++;
    }

    std::vector<card_info> cardInfo;
    for (const auto &tem : cardSeedPos)
    {
        //eosio::print("position = ", tem);
        uint16_t decks = (existing->validCardVec[tem])/52 + 1;
        uint16_t suitcolor =  (existing->validCardVec[tem] + 1)/13%4;
        uint16_t cardnumber = (existing->validCardVec[tem] + 1)%13;

        if(cardnumber == 0)
            cardnumber = 13;

        card_info tempCard;
        tempCard.decks = decks;
        tempCard.cardNum = cardnumber;
        tempCard.cardColor = suitcolor;

        switch(suitcolor)
        {
            case 0:
                eosio::print("[pos = ", tem, "  cardpos = ", existing->validCardVec[tem]," S", cardnumber, "]");
                break;
            case 1:
                eosio::print("[pos = ", tem, "  cardpos = ", existing->validCardVec[tem]," H", cardnumber, "]");
                break;
            case 2:
                eosio::print("[pos = ", tem, "  cardpos = ", existing->validCardVec[tem]," D", cardnumber, "]");
                break;
            case 3:
                eosio::print("[pos = ", tem, "  cardpos = ", existing->validCardVec[tem]," C", cardnumber, "]");
                break;
        }

        cardInfo.emplace_back(tempCard);
    }

    //round_result
    std::vector<card_info> playerCard;
    playerCard.emplace_back(cardInfo[0]);
    playerCard.emplace_back(cardInfo[2]);

    std::vector<card_info> bankerCard;
    bankerCard.emplace_back(cardInfo[1]);
    bankerCard.emplace_back(cardInfo[3]);

//    uint8_t dPoint;
//    uint8_t pPoint
//    if(dPoint == 8 || dPoint == 9 || pPoint == 8 || pPoint == 9)
//    {
//        dPoint =(bankerCard[0].cardnumber+bankerCard[1].cardnumber)%10;
//        pPoint =(playerCard[0].cardnumber+playerCard[1].cardnumber)%10;
//    }
//    else if(dPoint == 6)
//    {
//        if(pPoint == 6 || pPoint == 7)
//        {
//            bankerCard.emplace_push(cardInfo[4]);
//        }
//    }


    //////////////////////////////
    /*
    wbrng.srand(SDBMHash(buffer));
    uint64_t limitNum = wbrng.rand() % 10;
    print_f("limitNum is %\n", limitNum);
    bool result = false;
    if (limitNum >= 5)
        result = true;
    print_f("result is %\n", result);
    std::vector<player_bet_info> tempVec;

    asset temp_balance = existing->dealerBalance;
    auto itr = (existing->playerInfo).begin();
    for (; itr != (existing->playerInfo).end(); itr++)
    {
        //        player_bet_info tempInfo;
        //        tempInfo = (*itr);
        //        if (result)
        //        {
        //            if (itr->betType >= 5)
        //                tempInfo.playerResult = "win";
        //            else
        //                tempInfo.playerResult = "lose";
        //        }
        //        else
        //        {
        //            if (itr->betType >= 5)
        //                tempInfo.playerResult = "lose";
        //            else
        //                tempInfo.playerResult = "win";
        //        }
        //
        //        asset win = tempInfo.betAmount * 2;
        //        //win.amount = tempInfo.betAmount.amount*2;
        //        if (tempInfo.playerResult == "win")
        //        {
        //            INLINE_ACTION_SENDER(eosio::token, transfer)
        //            (
        //                "eosio.token"_n, {{_self, "active"_n}},
        //                {_self, tempInfo.player, win, std::string("playerbet result")});
        //
        //            temp_balance -= tempInfo.betAmount;
        //        }
        //        else
        //        {
        //            temp_balance += tempInfo.betAmount;
        //        }
        //        tempVec.emplace_back(tempInfo);
    }
*/
    eosio::print("[pos = ", cardSeedPos[3]);
    tableround.modify(existing, _self, [&](auto &s) {
        //s.playerInfo = tempVec;
       // s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_END;
       // if (existing->dealerBalance.amount > temp_balance.amount)
       //     s.roundResult = "dealer lose"; //todo?
       // else if (existing->dealerBalance.amount == temp_balance.amount)
       //     s.roundResult = "dealer tie";
       // else
       //     s.roundResult = "dealer win";
       // s.dealerBalance = temp_balance;
        s.playerHands = playerCard;
        s.bankerHands = bankerCard;
        s.validCardVec.erase(existing->validCardVec.begin()+cardSeedPos[0]);
        s.validCardVec.erase(existing->validCardVec.begin()+cardSeedPos[1]);
        s.validCardVec.erase(existing->validCardVec.begin()+cardSeedPos[2]);
        s.validCardVec.erase(existing->validCardVec.begin()+cardSeedPos[3]);
    });

}

ACTION wubba::trusteeship(uint64_t tableId)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "tableStatus != end");
    require_auth(existing->dealer); // dealer trusteeship server.
    tableround.modify(existing, _self, [&](auto &s) {
        s.trusteeship = true;
    });
}

ACTION wubba::exitruteship(uint64_t tableId)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
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
    eosio_assert(existing != tableround.end(), notableerr);
    eosio_assert(existing->dealer == informed, "People informed is not the dealer of table!");
    print_f("SC disconnecthi has already informed %\n", informed.to_string());
}

ACTION wubba::erasingdata(uint64_t key)
{
    require_auth(_self);
    if (key == -1)
    {
        auto itr = tableround.begin();
        while (itr != tableround.end())
        {
            eosio::print("Removing data ", _self, ", key: ", key, ", itr: ", itr->tableId, "\n");
            itr = tableround.erase(itr);
        }
    }
    else
    {
        auto itr = tableround.find(key);
        eosio::print("Removing data ", _self, ", key: ", key, ", itr: ", itr->tableId);
        tableround.erase(itr);
    }
}

EOSIO_DISPATCH(wubba, (newtable)(dealerseed)(serverseed)(endbet)(playerbet)(verdealeseed)(verserveseed)(trusteeship)(exitruteship)(disconnecthi)(erasingdata))
