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

std::string to_hex_w(const char *d, uint32_t s)
{
    std::string r;
    const char *to_hex = "0123456789abcdef";
    uint8_t *c = (uint8_t *)d;
    for (uint32_t i = 0; i < s; ++i)
        (r += to_hex[(c[i] >> 4)]) += to_hex[(c[i] & 0x0f)];
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
    hash = sha256(hash_str.c_str(), hash_str.size());
    auto hash_data = hash.extract_as_byte_array();
    string result_str = to_hex_w(reinterpret_cast<const char *>(hash_data.data()), 32);
    eosio::print(" hash_data : ", result_str);

    std::vector<card_info> cardInfo;
    std::vector<uint16_t> sixCardsVec;
    std::vector<uint16_t> usedCardsVec;
    auto counter = 0;
    while (counter < 6)
    {
        string temp_str = result_str.substr(counter * 9, 9);
        wbrng.srand(SDBMHash((char *)temp_str.c_str()));
        uint64_t pos = wbrng.rand() % existing->validCardVec.size();
        uint16_t cardElement = existing->validCardVec[pos];
        uint16_t decks = (cardElement) / 52 + 1;
        uint16_t suitcolor = (cardElement + 1) / 13 % 4;
        uint16_t cardnumber = (cardElement + 1) % 13;
        if (cardnumber == 0)
            cardnumber = 13;
        eosio::print("[pos:", pos, ", cardpos:", cardElement, ", suitcolor:", suitcolor, ", number:", cardnumber, ", deck:", decks, "] ");
        card_info tempCard;
        tempCard.decks = decks;
        tempCard.cardNum = cardnumber;
        tempCard.cardColor = suitcolor;
        sixCardsVec.emplace_back(cardElement);
        cardInfo.emplace_back(tempCard);
        counter++;
    }

    std::vector<card_info> playerCard;
    playerCard.emplace_back(cardInfo[0]);
    playerCard.emplace_back(cardInfo[2]);
    auto sum_p = (cardInfo[0].cardNum + cardInfo[2].cardNum) % 10;

    std::vector<card_info> bankerCard;
    bankerCard.emplace_back(cardInfo[1]);
    bankerCard.emplace_back(cardInfo[3]);
    auto sum_b = (cardInfo[1].cardNum + cardInfo[3].cardNum) % 10;

    usedCardsVec.emplace_back(sixCardsVec[0]);
    usedCardsVec.emplace_back(sixCardsVec[1]);
    usedCardsVec.emplace_back(sixCardsVec[2]);
    usedCardsVec.emplace_back(sixCardsVec[3]);
    bool fifthCard_p = false;
    if (sum_p >= 0 && sum_p <= 5)
    {
        playerCard.emplace_back(cardInfo[4]);
        usedCardsVec.emplace_back(sixCardsVec[4]);
        sum_p = (sum_p + cardInfo[4].cardNum) % 10;
        fifthCard_p = true;
        // p optain
        if ((sum_p == 6 && sum_b == 6) || (sum_p == 7 && sum_b == 6))
        {
            bankerCard.emplace_back(cardInfo[5]);
            usedCardsVec.emplace_back(sixCardsVec[5]);
            sum_b = (sum_b + cardInfo[5].cardNum) % 10;
        }
    }
    else if ((sum_b >= 0 && sum_b <= 2) || (sum_b == 3 && !(sum_p == 8 && fifthCard_p)) || (sum_b == 4 && !((sum_p == 1 || sum_p == 8 || sum_p == 9 || sum_p == 10) && fifthCard_p)) || (sum_b == 5 && !((sum_p == 1 || sum_p == 2 || sum_p == 3 || sum_p == 8 || sum_p == 9 || sum_p == 10) && fifthCard_p)))
    {
        if (fifthCard_p)
        {
            bankerCard.emplace_back(cardInfo[5]);
            usedCardsVec.emplace_back(sixCardsVec[5]);
            sum_b = (sum_b + cardInfo[5].cardNum) % 10;
        }
        else
        {
            bankerCard.emplace_back(cardInfo[4]);
            usedCardsVec.emplace_back(sixCardsVec[4]);
            sum_b = (sum_b + cardInfo[4].cardNum) % 10;
        }
    }
    else
    {
        eosio::print("Don't need extra optain!");
    }

    std::sort(usedCardsVec.begin(), usedCardsVec.end());
    tableround.modify(existing, _self, [&](auto &s) {
        s.playerHands = playerCard;
        s.bankerHands = bankerCard;
        s.validCardVec.erase(existing->validCardVec.begin() + usedCardsVec[0]);
        s.validCardVec.erase(existing->validCardVec.begin() + usedCardsVec[1] - 1);
        s.validCardVec.erase(existing->validCardVec.begin() + usedCardsVec[2] - 2);
        s.validCardVec.erase(existing->validCardVec.begin() + usedCardsVec[3] - 3);
        if (usedCardsVec.size() > 4)
            s.validCardVec.erase(existing->validCardVec.begin() + usedCardsVec[4] - 4);
        if (usedCardsVec.size() > 5)
            s.validCardVec.erase(existing->validCardVec.begin() + usedCardsVec[5] - 5);
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
