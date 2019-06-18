#include <gamemallards.hpp>

ACTION gamemallards::initsymbol(name code, string sym, asset minperbet)
{
    require_auth(_self);
    eosio::check(0 == minperbet.symbol.code().to_string().compare(sym), "The minperbet's symbol not match!");
    auto existing = tablecurrency.find(code.value);
    eosio::check(existing == tablecurrency.end(), "Symbol already exsits!");
    symbol symB = symbol(symbol_code(sym), 4);
    asset init_asset_empty = asset(0, symB);
    eosio::print("------ insert symbol ------");
    asset selfSymBalance = eosio::token::get_balance(code, _self, symB.code());
    eosio::check(selfSymBalance > init_asset_empty, "_self must own the token itself!");
    tablecurrency.emplace(_self, [&](auto &s) {
        s.code = code;
        s.sym = symB;
        s.minPerBet_default = minperbet;
    });
}

ACTION gamemallards::newtable(uint64_t newtableId, name dealer, asset deposit, bool isPrivate, bool isFree, name code, string sym, string commission_rate_agent, string commission_rate_player, string commission_rate_player_spread, asset oneRoundMaxTotalBet_bp, asset minPerBet_bp,
                              asset oneRoundMaxTotalBet_tie, asset minPerBet_tie,
                              asset oneRoundMaxTotalBet_pair, asset minPerBet_pair)
{
    require_auth(dealer);
    require_auth(serveraccount);
    auto existing = tableround.find(newtableId);
    eosio::check(existing == tableround.end(), "tableId exist...");

    extended_symbol cur_ex_sym = defaultSym;
    asset minPerBet_default_temp;

    //dealer limit 100
    auto dealer_index = tableround.get_index<"dealer"_n>();
    auto exist_dealer_lower_itr = dealer_index.lower_bound(dealer.value);
    auto exist_dealer_upper_itr = dealer_index.upper_bound(dealer.value);

    uint16_t table_num = 0;
    for (; exist_dealer_lower_itr != exist_dealer_upper_itr; exist_dealer_lower_itr++)
    {
        if (exist_dealer_lower_itr->tableStatus == (uint64_t)table_stats::status_fields::CLOSED)
            continue;
        table_num += 1;
    }
    eosio::check(table_num <= maxinum_table_per_dealer, "Exceeding the maxinum_table_per_dealer limit!");

    //check currency
    auto existing_cur = tablecurrency.find(code.value);
    if (existing_cur != tablecurrency.end())
    {
        if (0 == existing_cur->sym.code().to_string().compare(sym))
        {
            cur_ex_sym = extended_symbol(symbol(symbol_code(sym), 4), code);
            minPerBet_default_temp = existing_cur->minPerBet_default;
            eosio::print(" -----EXIST IN tablecuurrency");
        }
    }

    asset init_asset_empty = asset(0, cur_ex_sym.get_symbol());
    eosio::check(oneRoundMaxTotalBet_bp > init_asset_empty && minPerBet_bp >= minPerBet_default_temp && oneRoundMaxTotalBet_tie > init_asset_empty && minPerBet_tie >= minPerBet_default_temp && oneRoundMaxTotalBet_pair > init_asset_empty && minPerBet_pair >= minPerBet_default_temp, "max bet amount is < 0 || min bet amount < minPerBet_default_temp!");

    //auto temp_rate_platform = Round(comission_rate_platform_default, 4);
    auto temp_rate_agent = Atof(commission_rate_agent.c_str());
    auto temp_rate_player = Atof(commission_rate_player.c_str());
    auto temp_rate_player_spread = Atof(commission_rate_player_spread.c_str());
    eosio::check(temp_rate_agent >= 0 && temp_rate_player >= 0 && temp_rate_player_spread >= 0, "Commission rate can't be set negtive!");
    eosio::check(temp_rate_agent >= temp_rate_player_spread, "Commission of spread account can't bigger than agent commission!");
    eosio::print(" temp_rate_platform:", comission_rate_platform_default, " temp_rate_agent:", temp_rate_agent, " temp_rate_player", temp_rate_player, " temp_rate_player_spread", temp_rate_player_spread);

    asset oneRoundDealerMaxPay_temp = oneRoundMaxTotalBet_pair * 11 * 2 + max(oneRoundMaxTotalBet_bp * 1, oneRoundMaxTotalBet_tie * 8);
    eosio::print(" before====oneRoundDealerMaxPay_temp:", oneRoundDealerMaxPay_temp);
    oneRoundDealerMaxPay_temp += (oneRoundMaxTotalBet_tie + oneRoundMaxTotalBet_bp + oneRoundMaxTotalBet_pair) * (comission_rate_platform_default + temp_rate_agent + temp_rate_player);
    eosio::print(" end====oneRoundDealerMaxPay_temp:", oneRoundDealerMaxPay_temp);
    asset deposit_tmp = oneRoundDealerMaxPay_temp * minTableRounds;

    eosio::check(deposit >= deposit_tmp, "Table deposit is not enough!");
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        cur_ex_sym.get_contract(), {{dealer, "active"_n}},
        {dealer, _self, deposit, std::string("new:tabledeposit")});
    // table init.
    std::vector<uint16_t> validCardVec_empty;
    tableround.emplace(_self, [&](auto &s) {
        s.tableId = newtableId;
        s.cardBoot = 0;
        s.trusteeship = false;
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_SHUFFLE;
        s.dealer = dealer;
        s.dealerBalance = deposit;
        s.isPrivate = isPrivate;
        s.isFree = isFree;
        s.validCardVec = validCardVec_empty;
        s.oneRoundMaxTotalBet_BP = oneRoundMaxTotalBet_bp;
        s.minPerBet_BP = minPerBet_bp;
        s.oneRoundMaxTotalBet_Tie = oneRoundMaxTotalBet_tie;
        s.minPerBet_Tie = minPerBet_tie;
        s.oneRoundMaxTotalBet_Pair = oneRoundMaxTotalBet_pair;
        s.minPerBet_Pair = minPerBet_pair;
        s.oneRoundDealerMaxPay = oneRoundDealerMaxPay_temp;
        s.minTableDeposit = deposit_tmp;
        s.amountSymbol = cur_ex_sym;
        s.commission_rate_agent = temp_rate_agent;
        s.commission_rate_player = temp_rate_player;
        s.commission_rate_player_spread = temp_rate_player_spread;
        s.upgradingFlag = false;
    });
}

ACTION gamemallards::edittable(uint64_t tableId, bool isPrivate, bool isFree, name code, string sym, string commission_rate_agent, string commission_rate_player, string commission_rate_player_spread, asset oneRoundMaxTotalBet_bp, asset minPerBet_bp, asset oneRoundMaxTotalBet_tie, asset minPerBet_tie, asset oneRoundMaxTotalBet_pair, asset minPerBet_pair)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END || existing->tableStatus == (uint64_t)table_stats::status_fields::PAUSED, "The table can only be edited at the ROUND_END or PAUSED stage!");

    asset minPerBet_default_temp;
    extended_symbol cur_ex_sym = defaultSym;
    auto existing_cur = tablecurrency.find(code.value);
    if (existing_cur != tablecurrency.end())
    {
        if (0 == existing_cur->sym.code().to_string().compare(sym))
        {
            cur_ex_sym = extended_symbol(symbol(symbol_code(sym), 4), code);
            minPerBet_default_temp = existing_cur->minPerBet_default;
        }
    }

    asset init_asset_empty = asset(0, cur_ex_sym.get_symbol());

    eosio::check(oneRoundMaxTotalBet_bp > init_asset_empty && minPerBet_bp >= minPerBet_default_temp && oneRoundMaxTotalBet_tie > init_asset_empty && minPerBet_tie >= minPerBet_default_temp && oneRoundMaxTotalBet_pair > init_asset_empty && minPerBet_pair >= minPerBet_default_temp, "max bet amount is < 0 || min bet amount < minPerBet_default_temp!");

    //auto temp_rate_platform = Round(comission_rate_platform_default, 4);
    auto temp_rate_agent = Atof(commission_rate_agent.c_str());
    auto temp_rate_player = Atof(commission_rate_player.c_str());
    auto temp_rate_player_spread = Atof(commission_rate_player_spread.c_str());
    // verify the {player, agent} rate can't be set <0
    eosio::check(temp_rate_agent >= 0 && temp_rate_player >= 0 && temp_rate_player_spread >= 0, "Commission rate can't be set negtive!");
    eosio::check(temp_rate_agent >= temp_rate_player_spread, "Commission of spread account can't bigger than agent commission!");
    eosio::print(" temp_rate_platform:", comission_rate_platform_default, " temp_rate_agent:", temp_rate_agent, " temp_rate_player", temp_rate_player, " temp_rate_player_spread", temp_rate_player_spread);

    asset oneRoundDealerMaxPay_temp = oneRoundMaxTotalBet_pair * 11 * 2 + max(oneRoundMaxTotalBet_bp * 1, oneRoundMaxTotalBet_tie * 8);
    oneRoundDealerMaxPay_temp += (oneRoundMaxTotalBet_tie + oneRoundMaxTotalBet_bp + oneRoundMaxTotalBet_pair) * (comission_rate_platform_default + temp_rate_agent + temp_rate_player);
    asset deposit_tmp = oneRoundDealerMaxPay_temp * minTableRounds;

    tableround.modify(existing, _self, [&](auto &s) {
        s.isPrivate = isPrivate;
        s.isFree = isFree;
        s.oneRoundMaxTotalBet_BP = oneRoundMaxTotalBet_bp;
        s.minPerBet_BP = minPerBet_bp;
        s.oneRoundMaxTotalBet_Tie = oneRoundMaxTotalBet_tie;
        s.minPerBet_Tie = minPerBet_tie;
        s.oneRoundMaxTotalBet_Pair = oneRoundMaxTotalBet_pair;
        s.minPerBet_Pair = minPerBet_pair;
        s.oneRoundDealerMaxPay = oneRoundDealerMaxPay_temp;
        s.minTableDeposit = deposit_tmp;
        s.amountSymbol = cur_ex_sym;
        s.commission_rate_agent = temp_rate_agent;
        s.commission_rate_player = temp_rate_player;
        s.commission_rate_player_spread = temp_rate_player_spread;
    });
}

ACTION gamemallards::dealerseed(uint64_t tableId, checksum256 encodeSeed)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    require_auth(existing->dealer);
    eosio::check(!existing->trusteeship, "Dealer is hosted.");
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END,
                 "tableStatus != end");
    if (existing->dealerBalance < existing->oneRoundDealerMaxPay * 2)
    {
        INLINE_ACTION_SENDER(gamemallards, pausetablesee)
        (
            _self, {{serveraccount, "active"_n}},
            {existing->tableId});
        eosio_exit(0);
    }

    //system upgrading
    eosio::check(!existing->upgradingFlag, "system upgrading...");
    // start a new round. table_round init.
    checksum256 hash;
    std::vector<player_bet_info> emptyPlayers;
    std::vector<card_info> emptyCards;
    eosio::print(" before===validCardVec.size:", existing->validCardVec.size());
    asset init_asset_empty = asset(0, existing->amountSymbol.get_symbol());
    tableround.modify(existing, _self, [&](auto &s) {
        s.betStartTime = 0;
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_START;
        s.currRoundBetSum_Banker = init_asset_empty;
        s.currRoundBetSum_Player = init_asset_empty;
        s.currRoundBetSum_Tie = init_asset_empty;
        s.currRoundBetSum_BankerPair = init_asset_empty;
        s.currRoundBetSum_PlayerPair = init_asset_empty;
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

ACTION gamemallards::serverseed(uint64_t tableId, checksum256 encodeSeed)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    if (existing->trusteeship)
    {
        eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "The currenct round isn't end!");
        if (existing->dealerBalance < existing->oneRoundDealerMaxPay * 2)
        {
            INLINE_ACTION_SENDER(gamemallards, pausetablesee)
            (
                _self, {{serveraccount, "active"_n}},
                {existing->tableId});
            eosio_exit(0);
        }

        //system upgrading
        eosio::check(!existing->upgradingFlag, "system upgrading...");

        // start a new round. table_round init.
        eosio::print(" before===validCardVec.size:", existing->validCardVec.size());

        checksum256 hash;
        std::vector<player_bet_info> emptyPlayers;
        std::vector<card_info> emptyCards;
        asset init_asset_empty = asset(0, existing->amountSymbol.get_symbol());
        tableround.modify(existing, _self, [&](auto &s) {
            s.betStartTime = eosio::current_time_point().sec_since_epoch();
            s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_BET;
            s.currRoundBetSum_Banker = init_asset_empty;
            s.currRoundBetSum_Player = init_asset_empty;
            s.currRoundBetSum_Tie = init_asset_empty;
            s.currRoundBetSum_BankerPair = init_asset_empty;
            s.currRoundBetSum_PlayerPair = init_asset_empty;
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
        eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_START, "Dealer untrusteeship and haven't start a new round!");
        std::vector<player_bet_info> emptyPlayers;
        std::vector<card_info> emptyCards;
        asset init_asset_empty = asset(0, existing->amountSymbol.get_symbol());
        tableround.modify(existing, _self, [&](auto &s) {
            s.betStartTime = eosio::current_time_point().sec_since_epoch();
            s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_BET;
            s.currRoundBetSum_Banker = init_asset_empty;
            s.currRoundBetSum_Player = init_asset_empty;
            s.currRoundBetSum_Tie = init_asset_empty;
            s.currRoundBetSum_BankerPair = init_asset_empty;
            s.currRoundBetSum_PlayerPair = init_asset_empty;
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
}

ACTION gamemallards::playerbet(uint64_t tableId, name player, asset betDealer, asset betPlayer, asset betTie, asset betDealerPair, asset betPlayerPair, name agent, name spreadAccount, string nickname)
{
    require_auth(player);
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    eosio::check(is_account(agent), "agent account is not exist!");
    eosio::check(is_account(spreadAccount), "spreadAccount account is not exist!");
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_BET, "tableStatus != bet");
    eosio::check((eosio::current_time_point().sec_since_epoch() - existing->betStartTime) < betPeriod, "Timeout, can't bet!");
    asset init_asset_empty = asset(0, existing->amountSymbol.get_symbol());
    if (betDealer > init_asset_empty)
        eosio::check(betDealer >= existing->minPerBet_BP, "Banker bet is too small!");
    if (betPlayer > init_asset_empty)
        eosio::check(betPlayer >= existing->minPerBet_BP, "Player bet is too small!");
    if (betTie > init_asset_empty)
        eosio::check(betTie >= existing->minPerBet_Tie, "Tie bet is too small!");
    if (betDealerPair > init_asset_empty)
        eosio::check(betDealerPair >= existing->minPerBet_Pair, "BankerPair bet is too small!");
    if (betPlayerPair > init_asset_empty)
        eosio::check(betPlayerPair >= existing->minPerBet_Pair, "PlayerPair bet is too small!");

    asset player_amount_sum_banker = existing->currRoundBetSum_Banker;
    asset player_amount_sum_player = existing->currRoundBetSum_Player;
    asset player_amount_sum_tie = existing->currRoundBetSum_Tie;
    asset player_amount_sum_bankerPair = existing->currRoundBetSum_BankerPair;
    asset player_amount_sum_playerPair = existing->currRoundBetSum_PlayerPair;

    bool flag = false;
    for (const auto &p : existing->playerInfo)
    {
        if (p.player == player)
        {
            flag = true;
            break;
        }
    }

    eosio::check(!flag, "Player can't bet more than once in one round!");
    player_amount_sum_banker += betDealer;
    player_amount_sum_player += betPlayer;
    eosio::check(player_amount_sum_banker <= existing->oneRoundMaxTotalBet_BP, "Banker field is over the peak of total bet_bp amount of this round!");
    eosio::check(player_amount_sum_player <= existing->oneRoundMaxTotalBet_BP, "Player field is over the peak of total bet_bp amount of this round!");

    player_amount_sum_tie += betTie;
    eosio::check(player_amount_sum_tie <= existing->oneRoundMaxTotalBet_Tie, "Over the peak of total bet_tie amount of this round!");

    player_amount_sum_bankerPair += betDealerPair;
    player_amount_sum_playerPair += betPlayerPair;
    eosio::check(player_amount_sum_bankerPair <= existing->oneRoundMaxTotalBet_Pair, "BankerPair field is over the peak of total bet_pair amount of this round!");
    eosio::check(player_amount_sum_playerPair <= existing->oneRoundMaxTotalBet_Pair, "PlayerPair field is over the peak of total bet_pair amount of this round!");

    asset depositAmount = (betDealer + betPlayer + betTie + betDealerPair + betPlayerPair);
    if (depositAmount > init_asset_empty)
    {
        INLINE_ACTION_SENDER(eosio::token, transfer)
        (
            existing->amountSymbol.get_contract(), {{player, "active"_n}},
            {player, _self, depositAmount, std::string("playerbet")});
    }
    player_bet_info temp;
    temp.player = player;
    temp.betDealer = betDealer;
    temp.betPlayer = betPlayer;
    temp.betTie = betTie;
    temp.betDealerPair = betDealerPair;
    temp.betPlayerPair = betPlayerPair;
    temp.pBonus = init_asset_empty;
    temp.dBonus = init_asset_empty;
    temp.agent = agent;
    temp.spreadAccount = spreadAccount;
    temp.nickname = nickname;

    tableround.modify(existing, _self, [&](auto &s) {
        s.playerInfo.emplace_back(temp);
        s.currRoundBetSum_Banker = player_amount_sum_banker;
        s.currRoundBetSum_Player = player_amount_sum_player;
        s.currRoundBetSum_Tie = player_amount_sum_tie;
        s.currRoundBetSum_BankerPair = player_amount_sum_bankerPair;
        s.currRoundBetSum_PlayerPair = player_amount_sum_playerPair;
    });
}

// server defer action: end bet
ACTION gamemallards::endbet(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_BET, "tableStatus != bet");
    uint64_t useTime = eosio::current_time_point().sec_since_epoch() - existing->betStartTime;
    eosio::print("spend time : ", useTime, "s, need ", betPeriod, "s!");
    eosio::check(useTime > betPeriod, "Bet time is not end eosio::current_time_point().sec_since_epoch, wait... ");
    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_REVEAL;
    });
}

ACTION gamemallards::verdealeseed(uint64_t tableId, string seed)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    require_auth(existing->dealer);
    eosio::check(!existing->trusteeship, "Dealer is hosted.");
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_REVEAL, "tableStatus != reveal");
    eosio::check((eosio::current_time_point().sec_since_epoch() - existing->betStartTime) > betPeriod, "It's not time to verify dealer seed yet.");
    assert_sha256(seed.c_str(), seed.size(), ((*existing).dealerSeedHash));
    tableround.modify(existing, _self, [&](auto &s) {
        s.dSeedVerity = true;
        s.dealerSeed = seed;
    });
}
// Server push defer 3' action, once got ROUND_REVEAL.
ACTION gamemallards::verserveseed(uint64_t tableId, string seed)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_REVEAL, "table status != reveal");
    eosio::check((eosio::current_time_point().sec_since_epoch() - existing->betStartTime) > betPeriod, "It's not time to verify server seed yet.");
    // plaintext seed invaild（lost）
    if (0 == seed.compare(invaild_seed_flag))
    {
        // refund
        for (auto playerBet : existing->playerInfo)
        {
            asset depositAmount = (playerBet.betDealer + playerBet.betPlayer + playerBet.betTie + playerBet.betDealerPair + playerBet.betPlayerPair);
            INLINE_ACTION_SENDER(eosio::token, transfer)
            (
                existing->amountSymbol.get_contract(), {{_self, "active"_n}},
                {_self, playerBet.player, depositAmount, std::string("seed invaild:playerbet refund")});
        }
        tableround.modify(existing, _self, [&](auto &s) {
            s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_END;
        });
        eosio_exit(0);
    }
    assert_sha256(seed.c_str(), seed.size(), ((*existing).serverSeedHash));
    tableround.modify(existing, _self, [&](auto &s) {
        s.sSeedVerity = true;
        s.serverSeed = seed;
    });
    // root_seed.
    string root_seed = seed + salt;
    if (existing->trusteeship)
    {
        eosio::print("Dealer trusteeship, don't need dealer seed.");
    }
    // non-trustee server, so table_round is waiting for ACTION::gamemallards::dealerseed until dealer reconnect.
    // TODO Can be considered: auto trustee server until dealer reconnect and ACTION::gamemallards::exitruteship.
    else if (!existing->dSeedVerity)
    { // dealer disconnect notify
        INLINE_ACTION_SENDER(gamemallards, disconnecthi)
        (
            _self, {{serveraccount, "active"_n}},
            {existing->dealer, existing->tableId});
    }
    else if (existing->dSeedVerity)
    { // dealer online and not trusteeship
        root_seed += existing->dealerSeed;
    }
    int32_t sum_b_R = 0;
    string roundResult;
    std::vector<card_info> bankerHands;
    std::vector<card_info> playerHands;
    std::vector<uint16_t> validCardTemp = existing->validCardVec;
    reveal(root_seed, validCardTemp, playerHands, bankerHands, roundResult, sum_b_R);
    // odds
    std::vector<player_bet_info> tempPlayerVec;
    asset dealerBalance_temp = existing->dealerBalance;
    asset init_asset_empty = asset(0, existing->amountSymbol.get_symbol());
    for (auto playerBet : existing->playerInfo)
    {
        // -------------------------------- commission start --------------------------------
        // platform
        asset depositAmount = (playerBet.betDealer + playerBet.betPlayer + playerBet.betTie + playerBet.betDealerPair + playerBet.betPlayerPair);
        dealerBalance_temp += depositAmount;
        auto temp_rate_platform = comission_rate_platform_default;
        asset platformtotransfer = asset(depositAmount.amount * comission_rate_platform_default, existing->amountSymbol.get_symbol());
        eosio::print(" sum_bet_amount:", depositAmount.amount, " platformtotransfer:", platformtotransfer, " temp_rate_platform:", temp_rate_platform, " ");
        if (platformtotransfer > init_asset_empty)
        {
            INLINE_ACTION_SENDER(eosio::token, transfer)
            (
                existing->amountSymbol.get_contract(), {{_self, "active"_n}},
                {_self, platformaccount, platformtotransfer, std::string("platformcommission")});
        }
        // agent
        asset agentotransfer = init_asset_empty;
        asset spreadAccountotransfer = init_asset_empty;
        if (is_account(playerBet.agent)&&is_account(playerBet.spreadAccount))
        {
            agentotransfer = asset(depositAmount.amount * existing->commission_rate_agent, existing->amountSymbol.get_symbol());
            // spreadAccount, agent pay.
            spreadAccountotransfer = asset(depositAmount.amount * existing->commission_rate_player_spread, existing->amountSymbol.get_symbol());
            agentotransfer = agentotransfer - spreadAccountotransfer;
            eosio::print(" sum_bet_amount:", depositAmount, " agentotransfer:", agentotransfer, " commission_rate_agent:", existing->commission_rate_agent, " ");
            eosio::print(" sum_bet_amount:", depositAmount, " spreadAccountotransfer:", spreadAccountotransfer, " commission_rate_player_spread:", existing->commission_rate_player_spread, " ");
            if (agentotransfer > init_asset_empty)
            {
                INLINE_ACTION_SENDER(eosio::token, transfer)
                (
                    existing->amountSymbol.get_contract(), {{_self, "active"_n}},
                    {_self, playerBet.agent, agentotransfer, std::string("agentcommission")});
            }
            if (spreadAccountotransfer > init_asset_empty)
            {
                INLINE_ACTION_SENDER(eosio::token, transfer)
                (
                    existing->amountSymbol.get_contract(), {{_self, "active"_n}},
                    {_self, playerBet.spreadAccount, spreadAccountotransfer, std::string("spreadaccountcommission")});
            }
        }
        // player
        asset playertotransfer = asset(depositAmount.amount * existing->commission_rate_player, existing->amountSymbol.get_symbol());
        eosio::print(" sum_bet_amount:", depositAmount, " playertotransfer:", playertotransfer, " commission_rate_player:", existing->commission_rate_player, " ");
        if (playertotransfer > init_asset_empty)
        {
            INLINE_ACTION_SENDER(eosio::token, transfer)
            (
                existing->amountSymbol.get_contract(), {{_self, "active"_n}},
                {_self, playerBet.player, playertotransfer, std::string("playercommission")});
        }

        playerBet.playercommission = playertotransfer;
        playerBet.agentcommission = agentotransfer;
        playerBet.spreadaccountcommission = spreadAccountotransfer;

        asset commission_sum = platformtotransfer + agentotransfer + playertotransfer;
        dealerBalance_temp -= commission_sum;
        // -------------------------------- commission end --------------------------------

        auto pBonus = init_asset_empty;
        auto dBonus = init_asset_empty;
        eosio::print("  【 playerBet.betDealer.amount=", playerBet.betDealer.amount, " 】 ");
        // Banker field
        if (roundResult[0] == '1')
        {
            if (!existing->isFree)
            {
                pBonus.set_amount(playerBet.betDealer.amount * (1 + 0.95));
                eosio::print("  【 1pBonus=", pBonus, " 】 ");
            }
            else
            {
                eosio::print(" 【Free game.】 ");
                if (sum_b_R == 6)
                {
                    eosio::print("  【 sum_b_R=", sum_b_R, " 】 ");
                    pBonus.set_amount(playerBet.betDealer.amount * (1 + 0.5));
                }
                else
                {
                    pBonus = playerBet.betDealer * (1 + 1);
                }
            }
        }
        // Player field
        if (roundResult[1] == '1')
            pBonus += playerBet.betPlayer * (1 + 1);
        // Tie field
        if (roundResult[2] == '1')
        {
            pBonus += playerBet.betDealer + playerBet.betPlayer + playerBet.betTie * (1 + 8);
        }
        // DealerPair field
        if (roundResult[3] == '1')
            pBonus += playerBet.betDealerPair * (1 + 11);
        // PlayerPair field
        if (roundResult[4] == '1')
            pBonus += playerBet.betPlayerPair * (1 + 11);

        eosio::print(" [player:", playerBet.player, ", total bonus:", pBonus, "] ");

        if (pBonus > init_asset_empty)
        {
            INLINE_ACTION_SENDER(eosio::token, transfer)
            (
                existing->amountSymbol.get_contract(), {{_self, "active"_n}},
                {_self, playerBet.player, pBonus, std::string("playerbet win")});
        }
        dealerBalance_temp -= pBonus;
        playerBet.pBonus = pBonus - depositAmount;
        playerBet.dBonus = depositAmount - pBonus - commission_sum;
        tempPlayerVec.emplace_back(playerBet);
    }
    // shuffle trigger
    uint64_t tableStatus_temp = (uint64_t)table_stats::status_fields::ROUND_END;
    if (existing->validCardVec.size() <= CardsMinLimit)
        tableStatus_temp = (uint64_t)table_stats::status_fields::ROUND_SHUFFLE;

    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = tableStatus_temp;
        s.playerHands = playerHands;
        s.bankerHands = bankerHands;
        s.validCardVec = validCardTemp;
        s.roundResult = roundResult;
        s.dealerBalance = dealerBalance_temp;
        s.playerInfo = tempPlayerVec;
    });
}

ACTION gamemallards::trusteeship(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "tableStatus != end");
    tableround.modify(existing, _self, [&](auto &s) {
        s.trusteeship = true;
    });
}

ACTION gamemallards::exitruteship(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "tableStatus != end");
    tableround.modify(existing, _self, [&](auto &s) {
        s.trusteeship = false;
    });
}

ACTION gamemallards::disconnecthi(name informed, uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    eosio::check(existing->dealer == informed, "People informed is not the dealer of table!");
    require_recipient(informed);
}

ACTION gamemallards::clear12cache(int64_t key)
{
    require_auth(_self);
    if (key == delall_key)
    {
        auto itr = tableround.begin();
        while (itr != tableround.end())
        {
            if (itr->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END || itr->tableStatus == (uint64_t)table_stats::status_fields::PAUSED)
            {
                eosio::print("[Removing data: ", _self, ", condition: ", key, ", itr: ", itr->tableId, "]");
                itr = tableround.erase(itr);
            }
            else
                itr++;
        }
    }
    else if (key == -2)
    {
        auto itr = tableround.begin();
        while (itr != tableround.end())
        {
            if (itr->tableStatus == (uint64_t)table_stats::status_fields::CLOSED)
            {
                eosio::print("[Removing data: ", _self, ", condition: ", key, ", itr: ", itr->tableId, "]");
                itr = tableround.erase(itr);
            }
            else
                itr++;
        }
    }
    else
    {
        eosio::print("not spport param...");
    }
}

ACTION gamemallards::pausetabledea(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "The round isn't end, can't pause table");
    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint64_t)table_stats::status_fields::PAUSED;
    });
}

ACTION gamemallards::pausetablesee(uint64_t tableId)
{
    require_auth(serveraccount); // server permission.
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "The round isn't end, can't pause table");
    require_recipient(existing->dealer); // inform dealer whose table is paused.
    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint64_t)table_stats::status_fields::PAUSED;
    });
}
ACTION gamemallards::continuetable(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    eosio::check(existing->dealerBalance >= existing->oneRoundDealerMaxPay * 2, "Can't recover table, dealer balance isn't enough!");
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::PAUSED, "The tableid not paused, can`t continuetable");
    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_END;
    });
}

ACTION gamemallards::closetable(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "The round isn't end, can't close!");

    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        existing->amountSymbol.get_contract(), {{_self, "active"_n}},
        {_self, existing->dealer, existing->dealerBalance, std::string("closetable, withdraw all")});

    asset init_asset_empty = asset(0, existing->amountSymbol.get_symbol());
    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint64_t)table_stats::status_fields::CLOSED;
        s.dealerBalance = init_asset_empty;
    });
}

ACTION gamemallards::depositable(uint64_t tableId, asset deposit)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    require_auth(existing->dealer);
    eosio::check(deposit + existing->dealerBalance >= existing->minTableDeposit, "Table deposit is not enough!");

    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        existing->amountSymbol.get_contract(), {{existing->dealer, "active"_n}},
        {existing->dealer, _self, deposit, std::string("re:tabledeposit")});

    tableround.modify(existing, _self, [&](auto &s) {
        s.dealerBalance += deposit;
    });
    // automate recover the table round.
    // if (existing->tableStatus == (uint64_t)table_stats::status_fields::PAUSED)
    // {
    //     INLINE_ACTION_SENDER(gamemallards, continuetable)
    //     (
    //         _self, {{existing->dealer, "active"_n}},
    //         {existing->tableId});
    // }
}

ACTION gamemallards::dealerwitdaw(uint64_t tableId, asset withdraw)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    require_auth(existing->dealer);
    eosio::check((existing->dealerBalance - withdraw) >= existing->minTableDeposit, "Table dealerBalance is not enough to support next round!");

    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        existing->amountSymbol.get_contract(), {{_self, "active"_n}},
        {_self, existing->dealer, withdraw, std::string("withdraw")});
    tableround.modify(existing, _self, [&](auto &s) {
        s.dealerBalance -= withdraw;
    });
}
ACTION gamemallards::shuffle(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio::check(existing != tableround.end(), notableerr);
    eosio::check(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_SHUFFLE, "The round isn't shuffle, can't shuffle!");

    std::vector<uint16_t> cardVec_temp = existing->validCardVec;
    shuffleFun(tableId, cardVec_temp);

    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_END;
        s.validCardVec = cardVec_temp;
        s.cardBoot += 1;
    });
}

ACTION gamemallards::upgrading(bool isupgrading)
{
    require_auth(_self);
    auto existing = tableround.begin();
    for (; existing != tableround.end(); existing++)
    {
        tableround.modify(existing, _self, [&](auto &s) {
            s.upgradingFlag = isupgrading;
        });
    }
}

ACTION gamemallards::import12data(uint64_t tableId, uint64_t tableStatus, uint64_t cardBoot, name dealer, bool trusteeship,
                                  bool isPrivate, bool isFree, asset dealerBalance, asset oneRoundMaxTotalBet_BP, asset minPerBet_BP,
                                  asset oneRoundMaxTotalBet_Tie, asset minPerBet_Tie, asset oneRoundMaxTotalBet_Pair,
                                  asset minPerBet_Pair, asset oneRoundDealerMaxPay, asset minTableDeposit,
                                  double commission_rate_agent, double commission_rate_player, double commission_rate_player_spread, bool upgradingFlag,
                                  extended_symbol amountSymbol, std::vector<uint16_t> validCardVec)
{
    require_auth(_self);

    tableround.emplace(_self, [&](auto &s) {
        s.tableId = tableId;
        s.tableStatus = tableStatus;
        s.validCardVec = validCardVec;
        s.cardBoot = cardBoot;
        s.dealer = dealer;
        s.dealerBalance = dealerBalance;
        s.isPrivate = isPrivate;
        s.isFree = isFree;
        s.trusteeship = trusteeship;
        s.oneRoundMaxTotalBet_BP = oneRoundMaxTotalBet_BP;
        s.minPerBet_BP = minPerBet_BP;
        s.oneRoundMaxTotalBet_Tie = oneRoundMaxTotalBet_Tie;
        s.minPerBet_Tie = minPerBet_Tie;
        s.oneRoundMaxTotalBet_Pair = oneRoundMaxTotalBet_Pair;
        s.minPerBet_Pair = minPerBet_Pair;
        s.oneRoundDealerMaxPay = oneRoundDealerMaxPay;
        s.minTableDeposit = minTableDeposit;
        s.amountSymbol = amountSymbol;
        s.commission_rate_agent = commission_rate_agent;
        s.commission_rate_player = commission_rate_player;
        s.commission_rate_player_spread = commission_rate_player_spread;
        s.upgradingFlag = true;
    });
}