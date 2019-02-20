#include "wubba.hpp"

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
        shuffle(s.validCardVec);
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
        // start a new round. init.
        eosio::print(" ===validCardVec.size:", existing->validCardVec.size());
        checksum256 hash;
        std::vector<player_bet_info> emptyPlayers;
        std::vector<card_info> emptyCards;
        tableround.modify(existing, _self, [&](auto &s) {
            s.betStartTime = 0;
            s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_START;
            s.currRoundBetSum = asset(0, symbol(symbol_code("SYS"), 4));
            s.dealerSeedHash = encodeSeed;
            s.serverSeedHash = hash;
            s.dealerSeed = "";
            s.serverSeed = "";
            s.dSeedVerity = 0;
            s.sSeedVerity = 0;
            s.playerInfo = emptyPlayers;
            s.roundResult = "";
            s.playerHands = emptyCards;
            s.bankerHands = emptyCards;
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
        // start a new round. init.
        eosio::print(" ===validCardVec.size:", existing->validCardVec.size());
        checksum256 hash;
        std::vector<player_bet_info> emptyPlayers;
        std::vector<card_info> emptyCards;
        tableround.modify(existing, _self, [&](auto &s) {
            s.betStartTime = now();
            s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_BET;
            s.currRoundBetSum = asset(0, symbol(symbol_code("SYS"), 4));
            s.dealerSeedHash = hash;
            s.serverSeedHash = encodeSeed;
            s.dealerSeed = "";
            s.serverSeed = "";
            s.dSeedVerity = 0;
            s.sSeedVerity = 0;
            s.playerInfo = emptyPlayers;
            s.roundResult = "";
            s.playerHands = emptyCards;
            s.bankerHands = emptyCards;
        });
    }
    else
    {
        eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_START, "Dealer haven't started a new round yet!");
        tableround.modify(existing, _self, [&](auto &s) {
            s.serverSeedHash = encodeSeed;
            s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_BET;
            s.betStartTime = now();
        });
    }

    //TODO:defer 30 ,bet->reveal
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
    eosio::print("spend time : ", useTime, "s, need ", betPeriod, "s!");
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
        assert_sha256(seed.c_str(), seed.size(), ((*existing).dealerSeedHash));
        tableround.modify(existing, _self, [&](auto &s) {
            s.dSeedVerity = true;
            s.dealerSeed = seed;
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
    assert_sha256(seed.c_str(), seed.size(), ((*existing).serverSeedHash));
    tableround.modify(existing, _self, [&](auto &s) {
        s.sSeedVerity = true;
        s.serverSeed = seed;
    });
    // root_seed.
    string root_seed = seed;
    if (existing->trusteeship)
    {
        eosio::print("Dealer trusteeship, don't need dealer seed.");
    }
    else if (!existing->dSeedVerity)
    { // dealer disconnect notify
        INLINE_ACTION_SENDER(wubba, disconnecthi)
        (
            _self, {{serveraccount, "active"_n}},
            {existing->dealer, existing->tableId});
    }
    else if (existing->dSeedVerity)
    { // dealer online and not trusteeship
        root_seed += existing->dealerSeed;
    }
    // unify 64: root_seed_64.
    checksum256 hash = sha256(root_seed.c_str(), root_seed.size());
    auto hash_data = hash.extract_as_byte_array();
    string root_seed_64 = to_hex_w(reinterpret_cast<const char *>(hash_data.data()), 32);
    eosio::print(" root_seed_64 : ", root_seed_64, " ");
    // Split 6 seeds, parse card info.
    std::vector<card_info> cardInfo;
    std::vector<uint16_t> sixPosVec;
    auto counter = 0;
    while (counter < 6)
    {
        string sub_seed = root_seed_64.substr(counter * 9, 9);
        wbrng.srand(SDBMHash((char *)sub_seed.c_str()));
        uint64_t pos = wbrng.rand() % existing->validCardVec.size();
        uint16_t cardPos = existing->validCardVec[pos]; // value of validCardVec is cardPos(card index).
        sixPosVec.emplace_back(cardPos);
        uint16_t deck = (cardPos) / 52 + 1;
        uint16_t suitcolor = (cardPos + 1) / 13 % 4;
        uint16_t cardnumber = (cardPos + 1) % 13;
        if (cardnumber == 0)
            cardnumber = 13;
        eosio::print("[pos:", pos, ", cardpos:", cardPos, ", deck:", deck, ", number:", cardnumber, ", suitcolor:", suitcolor, "]");
        card_info tempCard;
        tempCard.deck = deck;
        tempCard.cardNum = cardnumber;
        tempCard.cardColor = suitcolor;
        cardInfo.emplace_back(tempCard);
        counter++;
    }
    // init first 2 cards.
    std::vector<card_info> playerHands;
    playerHands.emplace_back(cardInfo[0]);
    playerHands.emplace_back(cardInfo[2]);
    auto sum_p = (cardInfo[0].cardNum + cardInfo[2].cardNum) % 10;

    std::vector<card_info> bankerHands;
    bankerHands.emplace_back(cardInfo[1]);
    bankerHands.emplace_back(cardInfo[3]);
    auto sum_b = (cardInfo[1].cardNum + cardInfo[3].cardNum) % 10;
    // 5th/6th card obtain rules.
    bool fifthCard_flag = false;
    bool sixthCard_flag = false;
    if (sum_p < 6)
    {
        playerHands.emplace_back(cardInfo[4]);
        sum_p = (sum_p + cardInfo[4].cardNum) % 10;
        fifthCard_flag = true;
        if (sum_b == 6 && (sum_p == 6 || sum_p == 7))
        {
            bankerHands.emplace_back(cardInfo[5]);
            sum_b = (sum_b + cardInfo[5].cardNum) % 10;
            sixthCard_flag = true;
        }
    }
    else if ((sum_b < 3) || (sum_b == 3 && !(sum_p == 8 && fifthCard_flag)) || (sum_b == 4 && !((sum_p == 1 || sum_p == 8 || sum_p == 9 || sum_p == 10) && fifthCard_flag)) || (sum_b == 5 && !((sum_p == 1 || sum_p == 2 || sum_p == 3 || sum_p == 8 || sum_p == 9 || sum_p == 10) && fifthCard_flag)))
    {
        if (fifthCard_flag)
        {
            bankerHands.emplace_back(cardInfo[5]);
            sum_b = (sum_b + cardInfo[5].cardNum) % 10;
            sixthCard_flag = true;
        }
        else
        {
            bankerHands.emplace_back(cardInfo[4]);
            sum_b = (sum_b + cardInfo[4].cardNum) % 10;
            fifthCard_flag = true;
        }
    }
    else
    {
        eosio::print("4 cards end, don't need extra card obtain!");
    }
    // cards used.
    if (!fifthCard_flag && !sixthCard_flag)
    {
        sixPosVec.erase(sixPosVec.begin() + 4);
        sixPosVec.erase(sixPosVec.begin() + 4);
    }
    else if (fifthCard_flag || sixthCard_flag)
    {
        sixPosVec.erase(sixPosVec.begin() + 5);
    }
    std::vector<uint16_t> validCardTemp = existing->validCardVec;
    for (auto i : sixPosVec)
    {
        for (auto itr = validCardTemp.begin(); itr != validCardTemp.end(); itr++)
        {
            if (*itr == i)
            {
                itr = validCardTemp.erase(itr);
                eosio::print(" 【erase ", i);
            }
            if (itr == validCardTemp.end())
            {
                break;
            }
        }
        eosio::print(" tem.size ", validCardTemp.size(), "】");
    }
    tableround.modify(existing, _self, [&](auto &s) {
        // TODO::dealerBalance & playerinfo & result.
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_END;
        s.playerHands = playerHands;
        s.bankerHands = bankerHands;
        s.validCardVec = validCardTemp;
    });
}

ACTION wubba::trusteeship(uint64_t tableId)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "tableStatus != end");
    require_auth(existing->dealer); // dealer trustee server.
    tableround.modify(existing, _self, [&](auto &s) {
        s.trusteeship = true;
    });
}

ACTION wubba::exitruteship(uint64_t tableId)
{
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "tableStatus != end");
    require_auth(existing->dealer); // dealer exit trusteeship from server.
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
    eosio::print("SC disconnecthi has already informed :", informed.to_string());
}

ACTION wubba::erasingdata(uint64_t key)
{
    require_auth(_self);
    if (key == -1)
    {
        auto itr = tableround.begin();
        while (itr != tableround.end())
        {
            eosio::print("[Removing data: ", _self, ", key: ", key, ", itr: ", itr->tableId, "]");
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