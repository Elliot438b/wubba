#include "lizard.hpp"

ACTION lizard::initsymbol(name code, string sym, asset minperbet)
{
    require_auth(adminaccount);
    eosio_assert(0 == minperbet.symbol.code().to_string().compare(sym), "The minperbet's symbol not match!");
    auto existing = tablecurrency.find(code.value);
    eosio_assert(existing == tablecurrency.end(), "Symbol already exsits!");
    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        code, {{adminaccount, "active"_n}},
        {adminaccount, _self, minperbet, std::string("test symbol")});

    symbol symB = symbol(symbol_code(sym), 4);
    asset init_asset_empty = asset(0, symB);
    if (code == "eosio.token"_n)
    {
        eosio::print("------ insert the core symbol ------");
        asset selfSymBalance = eosio::token::get_balance(code, _self, symB.code());
        eosio_assert(selfSymBalance > init_asset_empty, "_self must own the core symbol itself!");
    }
    else
    {
        eosio::print("------ insert the custom symbol ------");
        asset selfSymBalance = eosio::token::get_balance(code, code, symB.code());
        eosio_assert(selfSymBalance > init_asset_empty, "Symbol creator must own the asset itself!");
    }
    tablecurrency.emplace(_self, [&](auto &s) {
        s.code = code;
        s.sym = symB;
        s.minPerBet_default = minperbet;
    });
}

ACTION lizard::newtable(uint64_t newtableId, name dealer, asset deposit, bool isPrivate, name code, string sym, string commission_rate_agent, string commission_rate_player, asset oneRoundMaxTotalBet_bsoe, asset minPerBet_bsoe, asset oneRoundMaxTotalBet_anytri, asset minPerBet_anytri, asset oneRoundMaxTotalBet_trinum, asset minPerBet_trinum, asset oneRoundMaxTotalBet_pairnum, asset minPerBet_pairnum, asset oneRoundMaxTotalBet_txx, asset minPerBet_txx, asset oneRoundMaxTotalBet_twocom, asset minPerBet_twocom, asset oneRoundMaxTotalBet_single, asset minPerBet_single)
{
    require_auth(dealer);
    require_auth(serveraccount);
    auto existing = tableround.find(newtableId);
    eosio_assert(existing == tableround.end(), "tableId exist...");

    asset minPerBet_default_temp;
    asset oneRoundDealerMaxPay_temp;
    asset deposit_tmp;
    extended_symbol cur_ex_sym = defaultSym;

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
    eosio_assert(table_num <= maxinum_table_per_dealer, "Exceeding the maxinum_table_per_dealer limit!");

    auto existing_cur = tablecurrency.find(code.value);
    if (existing_cur != tablecurrency.end())
    {
        if (0 == existing_cur->sym.code().to_string().compare(sym))
        {
            cur_ex_sym = extended_symbol(symbol(symbol_code(sym), 4), code);
            minPerBet_default_temp = existing_cur->minPerBet_default;
            eosio::print("----EXIST IN tablecuurrency");
        }
    }

    asset init_asset_empty = asset(0, cur_ex_sym.get_symbol());
    eosio_assert(oneRoundMaxTotalBet_bsoe > init_asset_empty && minPerBet_bsoe > minPerBet_default_temp && oneRoundMaxTotalBet_anytri > init_asset_empty && minPerBet_anytri > minPerBet_default_temp && oneRoundMaxTotalBet_trinum > init_asset_empty && minPerBet_trinum > minPerBet_default_temp && oneRoundMaxTotalBet_pairnum > init_asset_empty && minPerBet_pairnum > minPerBet_default_temp && oneRoundMaxTotalBet_txx > init_asset_empty && minPerBet_txx > minPerBet_default_temp && oneRoundMaxTotalBet_twocom > init_asset_empty && minPerBet_twocom > minPerBet_default_temp && oneRoundMaxTotalBet_single > init_asset_empty && minPerBet_single > minPerBet_default_temp, "max bet amount is < 0 || min bet amount < minPerBet_default_temp!");

    auto temp_rate_agent = Atof(commission_rate_agent.c_str());
    auto temp_rate_player = Atof(commission_rate_player.c_str());
    // verify the {player, agent} rate can't be set <0
    eosio_assert(temp_rate_agent >= 0 && temp_rate_player >= 0, "Commission rate can't be set negtive!");

    auto diff_max = oneRoundMaxTotalBet_bsoe * 2 + oneRoundMaxTotalBet_txx * 14 + oneRoundMaxTotalBet_twocom * 5 * 3 + oneRoundMaxTotalBet_single * 3;
    auto pair_nontri_max = oneRoundMaxTotalBet_bsoe * 2 + oneRoundMaxTotalBet_pairnum * 8 + oneRoundMaxTotalBet_txx * 50 + oneRoundMaxTotalBet_twocom * 5 + oneRoundMaxTotalBet_single * 2;
    auto tri_max = oneRoundMaxTotalBet_anytri * 24 + oneRoundMaxTotalBet_trinum * 150 + oneRoundMaxTotalBet_pairnum * 8 + oneRoundMaxTotalBet_txx * 14 + oneRoundMaxTotalBet_single * 1;

    eosio::print("diff_max=", diff_max, " pair_nontri_max=", pair_nontri_max, " tri_max=", tri_max, "   ");

    oneRoundDealerMaxPay_temp = max(diff_max, pair_nontri_max);
    oneRoundDealerMaxPay_temp = max(oneRoundDealerMaxPay_temp, tri_max);
    oneRoundDealerMaxPay_temp += (oneRoundMaxTotalBet_bsoe + oneRoundMaxTotalBet_anytri + oneRoundMaxTotalBet_trinum + oneRoundMaxTotalBet_pairnum + oneRoundMaxTotalBet_txx + oneRoundMaxTotalBet_twocom + oneRoundMaxTotalBet_single) * (comission_rate_platform_default + temp_rate_agent + temp_rate_player);
    deposit_tmp = oneRoundDealerMaxPay_temp * minTableRounds;

    eosio_assert(deposit >= deposit_tmp, "Table deposit is not enough!");

    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        cur_ex_sym.get_contract(), {{dealer, "active"_n}},
        {dealer, _self, deposit, std::string("new:tabledeposit")});

    // table init.
    tableround.emplace(_self, [&](auto &s) {
        s.tableId = newtableId;
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_END;
        s.dealer = dealer;
        s.trusteeship = false;
        s.dealerBalance = deposit;
        s.isPrivate = isPrivate;
        s.oneRoundMaxTotalBet_bsoe = oneRoundMaxTotalBet_bsoe;
        s.minPerBet_bsoe = minPerBet_bsoe;
        s.oneRoundMaxTotalBet_anytri = oneRoundMaxTotalBet_anytri;
        s.minPerBet_anytri = minPerBet_anytri;
        s.oneRoundMaxTotalBet_trinum = oneRoundMaxTotalBet_trinum;
        s.minPerBet_trinum = minPerBet_trinum;
        s.oneRoundMaxTotalBet_pairnum = oneRoundMaxTotalBet_pairnum;
        s.minPerBet_pairnum = minPerBet_pairnum;
        s.oneRoundMaxTotalBet_txx = oneRoundMaxTotalBet_txx;
        s.minPerBet_txx = minPerBet_txx;
        s.oneRoundMaxTotalBet_twocom = oneRoundMaxTotalBet_twocom;
        s.minPerBet_twocom = minPerBet_twocom;
        s.oneRoundMaxTotalBet_single = oneRoundMaxTotalBet_single;
        s.minPerBet_single = minPerBet_single;
        s.oneRoundDealerMaxPay = oneRoundDealerMaxPay_temp;
        s.minTableDeposit = deposit_tmp;
        s.currRoundBetSum_bsoe = init_asset_empty;
        s.currRoundBetSum_anytri = init_asset_empty;
        s.currRoundBetSum_trinum = init_asset_empty;
        s.currRoundBetSum_pairnum = init_asset_empty;
        s.currRoundBetSum_txx = init_asset_empty;
        s.currRoundBetSum_twocom = init_asset_empty;
        s.currRoundBetSum_single = init_asset_empty;
        s.amountSymbol = cur_ex_sym;
        s.commission_rate_agent = temp_rate_agent;
        s.commission_rate_player = temp_rate_player;
        s.upgradingFlag = false;
    });
}

ACTION lizard::edittable(uint64_t tableId, bool isPrivate, name code, string sym, string commission_rate_agent, string commission_rate_player, asset oneRoundMaxTotalBet_bsoe, asset minPerBet_bsoe, asset oneRoundMaxTotalBet_anytri, asset minPerBet_anytri, asset oneRoundMaxTotalBet_trinum, asset minPerBet_trinum, asset oneRoundMaxTotalBet_pairnum, asset minPerBet_pairnum, asset oneRoundMaxTotalBet_txx, asset minPerBet_txx, asset oneRoundMaxTotalBet_twocom, asset minPerBet_twocom, asset oneRoundMaxTotalBet_single, asset minPerBet_single)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    require_auth(existing->dealer);
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "The table can only be edited at the ROUND_END stage!");

    extended_symbol cur_ex_sym = defaultSym;
    asset minPerBet_default_temp;
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
    eosio_assert(oneRoundMaxTotalBet_bsoe > init_asset_empty && minPerBet_bsoe > minPerBet_default_temp && oneRoundMaxTotalBet_anytri > init_asset_empty && minPerBet_anytri > minPerBet_default_temp && oneRoundMaxTotalBet_trinum > init_asset_empty && minPerBet_trinum > minPerBet_default_temp && oneRoundMaxTotalBet_pairnum > init_asset_empty && minPerBet_pairnum > minPerBet_default_temp && oneRoundMaxTotalBet_txx > init_asset_empty && minPerBet_txx > minPerBet_default_temp && oneRoundMaxTotalBet_twocom > init_asset_empty && minPerBet_twocom > minPerBet_default_temp && oneRoundMaxTotalBet_single > init_asset_empty && minPerBet_single > minPerBet_default_temp, "max bet amount is < 0 || min bet amount < minPerBet_default_temp!");

    auto temp_rate_agent = Atof(commission_rate_agent.c_str());
    auto temp_rate_player = Atof(commission_rate_player.c_str());
    // verify the {player, agent} rate can't be set <0
    eosio_assert(temp_rate_agent >= 0 && temp_rate_player >= 0, "Commission rate can't be set negtive!");

    auto diff_max = oneRoundMaxTotalBet_bsoe * 2 + oneRoundMaxTotalBet_txx * 14 + oneRoundMaxTotalBet_twocom * 5 * 3 + oneRoundMaxTotalBet_single * 3;
    auto pair_nontri_max = oneRoundMaxTotalBet_bsoe * 2 + oneRoundMaxTotalBet_pairnum * 8 + oneRoundMaxTotalBet_txx * 50 + oneRoundMaxTotalBet_twocom * 5 + oneRoundMaxTotalBet_single * 2;
    auto tri_max = oneRoundMaxTotalBet_anytri * 24 + oneRoundMaxTotalBet_trinum * 150 + oneRoundMaxTotalBet_pairnum * 8 + oneRoundMaxTotalBet_txx * 14 + oneRoundMaxTotalBet_single * 1;

    eosio::print("diff_max=", diff_max, " pair_nontri_max=", pair_nontri_max, " tri_max=", tri_max, "   ");

    auto oneRoundDealerMaxPay_temp = max(diff_max, pair_nontri_max);
    oneRoundDealerMaxPay_temp = max(oneRoundDealerMaxPay_temp, tri_max);
    oneRoundDealerMaxPay_temp += (oneRoundMaxTotalBet_bsoe + oneRoundMaxTotalBet_anytri + oneRoundMaxTotalBet_trinum + oneRoundMaxTotalBet_pairnum + oneRoundMaxTotalBet_txx + oneRoundMaxTotalBet_twocom + oneRoundMaxTotalBet_single) * (comission_rate_platform_default + temp_rate_agent + temp_rate_player);
    auto deposit_tmp = oneRoundDealerMaxPay_temp * minTableRounds;

    // table modify.
    tableround.modify(existing, _self, [&](auto &s) {
        s.isPrivate = isPrivate;
        s.oneRoundMaxTotalBet_bsoe = oneRoundMaxTotalBet_bsoe;
        s.minPerBet_bsoe = minPerBet_bsoe;
        s.oneRoundMaxTotalBet_anytri = oneRoundMaxTotalBet_anytri;
        s.minPerBet_anytri = minPerBet_anytri;
        s.oneRoundMaxTotalBet_trinum = oneRoundMaxTotalBet_trinum;
        s.minPerBet_trinum = minPerBet_trinum;
        s.oneRoundMaxTotalBet_pairnum = oneRoundMaxTotalBet_pairnum;
        s.minPerBet_pairnum = minPerBet_pairnum;
        s.oneRoundMaxTotalBet_txx = oneRoundMaxTotalBet_txx;
        s.minPerBet_txx = minPerBet_txx;
        s.oneRoundMaxTotalBet_twocom = oneRoundMaxTotalBet_twocom;
        s.minPerBet_twocom = minPerBet_twocom;
        s.oneRoundMaxTotalBet_single = oneRoundMaxTotalBet_single;
        s.minPerBet_single = minPerBet_single;
        s.oneRoundDealerMaxPay = oneRoundDealerMaxPay_temp;
        s.minTableDeposit = deposit_tmp;
        s.amountSymbol = cur_ex_sym;
        s.commission_rate_agent = temp_rate_agent;
        s.commission_rate_player = temp_rate_player;
    });
}

ACTION lizard::dealerseed(uint64_t tableId, checksum256 encodeSeed)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    require_auth(existing->dealer);
    eosio_assert(!existing->trusteeship, "Dealer is hosted.");
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END,
                 "tableStatus != end");

    if (existing->dealerBalance < existing->oneRoundDealerMaxPay * 2)
    {
        INLINE_ACTION_SENDER(lizard, pausetabledea)
        (
            _self, {{existing->dealer, "active"_n}},
            {existing->tableId});
        return;
    }

    eosio_assert(!existing->upgradingFlag, "system upgrading...");

    // start a new round. table_round init.
    checksum256 hash;
    std::vector<player_bet_info> emptyPlayers;
    asset init_asset_empty = asset(0, existing->amountSymbol.get_symbol());
    tableround.modify(existing, _self, [&](auto &s) {
        s.betStartTime = 0;
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_START;
        s.dealerSeedHash = encodeSeed;
        s.serverSeedHash = hash;
        s.dealerSeed = "";
        s.serverSeed = "";
        s.dSeedVerity = 0;
        s.sSeedVerity = 0;
        s.playerInfo = emptyPlayers;
        s.roundResult = "";
        s.diceResult = "";
        s.currRoundBetSum_bsoe = init_asset_empty;
        s.currRoundBetSum_anytri = init_asset_empty;
        s.currRoundBetSum_trinum = init_asset_empty;
        s.currRoundBetSum_pairnum = init_asset_empty;
        s.currRoundBetSum_txx = init_asset_empty;
        s.currRoundBetSum_twocom = init_asset_empty;
        s.currRoundBetSum_single = init_asset_empty;
    });
}

ACTION lizard::serverseed(uint64_t tableId, checksum256 encodeSeed)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);

    if (existing->trusteeship)
    {
        eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "The currenct round isn't end!");
        if (existing->dealerBalance < existing->oneRoundDealerMaxPay * 2)
        {
            INLINE_ACTION_SENDER(lizard, pausetablesee)
            (
                _self, {{serveraccount, "active"_n}},
                {existing->tableId});
            return;
        }

        eosio_assert(!existing->upgradingFlag, "system upgrading...");
        // start a new round. table_round init.
        checksum256 hash;
        std::vector<player_bet_info> emptyPlayers;
        asset init_asset_empty = asset(0, existing->amountSymbol.get_symbol());
        tableround.modify(existing, _self, [&](auto &s) {
            s.betStartTime = now();
            s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_BET;
            s.dealerSeedHash = hash;
            s.serverSeedHash = encodeSeed;
            s.dealerSeed = "";
            s.serverSeed = "";
            s.dSeedVerity = 0;
            s.sSeedVerity = 0;
            s.playerInfo = emptyPlayers;
            s.roundResult = "";
            s.diceResult = "";
            s.currRoundBetSum_bsoe = init_asset_empty;
            s.currRoundBetSum_anytri = init_asset_empty;
            s.currRoundBetSum_trinum = init_asset_empty;
            s.currRoundBetSum_pairnum = init_asset_empty;
            s.currRoundBetSum_txx = init_asset_empty;
            s.currRoundBetSum_twocom = init_asset_empty;
            s.currRoundBetSum_single = init_asset_empty;
        });
    }
    else
    {
        eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_START, "Dealer should send hash seed first!");
        tableround.modify(existing, _self, [&](auto &s) {
            s.serverSeedHash = encodeSeed;
            s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_BET;
            s.betStartTime = now();
        });
    }
}

ACTION lizard::playerbet(uint64_t tableId, name player, string bet, name agent, string nickname)
{
    require_auth(player);
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_BET, "tableStatus != bet");
    eosio_assert((now() - existing->betStartTime) < betPeriod, "Timeout, can't bet!");

    bool flag = false;
    for (const auto &p : existing->playerInfo)
    {
        if (p.player == player)
        {
            flag = true;
            break;
        }
    }

    eosio_assert(!flag, "Player can't bet more than once in one round!");
    asset init_asset_empty = asset(0, existing->amountSymbol.get_symbol());
    asset betAmount = init_asset_empty;
    std::vector<bet_info> betAmountVec;
    bool ret = checkBetOptions(bet, existing->amountSymbol.get_symbol(), betAmount, betAmountVec);
    eosio_assert(ret, "Unknown bet option!");

    asset player_amount_sum_bsoe = existing->currRoundBetSum_bsoe;
    asset player_amount_sum_anytri = existing->currRoundBetSum_anytri;
    asset player_amount_sum_trinum = existing->currRoundBetSum_trinum;
    asset player_amount_sum_pairnum = existing->currRoundBetSum_pairnum;
    asset player_amount_sum_txx = existing->currRoundBetSum_txx;
    asset player_amount_sum_twocom = existing->currRoundBetSum_twocom;
    asset player_amount_sum_single = existing->currRoundBetSum_single;

    for (auto p : betAmountVec)
    {
        if (0 == p.name.compare("small") || 0 == p.name.compare("big") || 0 == p.name.compare("odd") || 0 == p.name.compare("even"))
        {
            //eosio::print(" [amount=]",p.amount,"init_asset_empty=",init_asset_empty);
            if (p.amount > init_asset_empty)
            {
                eosio_assert(p.amount >= existing->minPerBet_bsoe, "bsoe bet is too small!");
                eosio::print("name=", p.name, " [amount=]", p.amount, " player_amount_sum_bsoe=", player_amount_sum_bsoe, " ...");
                player_amount_sum_bsoe += p.amount;
                eosio_assert(player_amount_sum_bsoe < existing->oneRoundMaxTotalBet_bsoe, "Over the peak of total bet_bsoe amount of this round!");
            }
        }
        else if (0 == p.name.compare("anytri"))
        {
            if (p.amount > init_asset_empty)
            {
                eosio_assert(p.amount >= existing->minPerBet_anytri, "anytri bet is too small!");
                player_amount_sum_anytri += p.amount;
                eosio_assert(player_amount_sum_anytri < existing->oneRoundMaxTotalBet_anytri, "Over the peak of total bet_anytri amount of this round!");
            }
        }
        else if (0 == p.name.compare("tri1") || 0 == p.name.compare("tri2") || 0 == p.name.compare("tri3") || 0 == p.name.compare("tri4") || 0 == p.name.compare("tri5") || 0 == p.name.compare("tri6"))
        {
            if (p.amount > init_asset_empty)
            {
                eosio_assert(p.amount >= existing->minPerBet_trinum, "trinum bet is too small!");
                player_amount_sum_trinum += p.amount;
                eosio_assert(player_amount_sum_trinum < existing->oneRoundMaxTotalBet_trinum, "Over the peak of total bet_trinum amount of this round!");
            }
        }
        else if (string::npos != p.name.find("pair"))
        {
            if (p.amount > init_asset_empty)
            {
                eosio_assert(p.amount >= existing->minPerBet_pairnum, "pairnum bet is too small!");
                player_amount_sum_pairnum += p.amount;
                eosio_assert(player_amount_sum_pairnum < existing->oneRoundMaxTotalBet_pairnum, "Over the peak of total bet_pairnum amount of this round!");
            }
        }
        else if (string::npos != p.name.find("total"))
        {
            if (p.amount > init_asset_empty)
            {
                eosio_assert(p.amount >= existing->minPerBet_txx, "total bet is too small!");
                player_amount_sum_txx += p.amount;
                eosio_assert(player_amount_sum_txx < existing->oneRoundMaxTotalBet_txx, "Over the peak of total bet_txx amount of this round!");
            }
        }
        else if (string::npos != p.name.find("c"))
        {
            if (p.amount > init_asset_empty)
            {
                eosio_assert(p.amount >= existing->minPerBet_twocom, "twocom bet is too small!");
                player_amount_sum_twocom += p.amount;
                eosio_assert(player_amount_sum_twocom < existing->oneRoundMaxTotalBet_twocom, "Over the peak of total bet_twocom amount of this round!");
            }
        }
        else if (0 == p.name.compare("s1") || 0 == p.name.compare("s2") || 0 == p.name.compare("s3") || 0 == p.name.compare("s4") || 0 == p.name.compare("s5") || 0 == p.name.compare("s6"))
        {
            if (p.amount > init_asset_empty)
            {
                eosio_assert(p.amount >= existing->minPerBet_single, "single bet is too small!");
                player_amount_sum_single += p.amount;
                eosio_assert(player_amount_sum_single < existing->oneRoundMaxTotalBet_single, "Over the peak of total bet_single amount of this round!");
            }
        }
    }

    eosio::print("betAmount:", betAmount, " .........");
    if (betAmount > init_asset_empty)
    {
        INLINE_ACTION_SENDER(eosio::token, transfer)
        (
            existing->amountSymbol.get_contract(), {{player, "active"_n}},
            {player, _self, betAmount, std::string("playerbet")});
    }

    player_bet_info temp;
    temp.player = player;
    temp.bet = bet;
    temp.pBonus = init_asset_empty;
    temp.dBonus = init_asset_empty;
    temp.agent = agent;
    temp.nickname = nickname;

    // -------------------------------- commission start --------------------------------
    // platform
    auto temp_rate_platform = comission_rate_platform_default;
    asset platformtotransfer = asset(betAmount.amount * comission_rate_platform_default, existing->amountSymbol.get_symbol());
    eosio::print(" sum_bet_amount:", betAmount.amount, " platformtotransfer:", platformtotransfer, " temp_rate_platform:", temp_rate_platform, " ");
    if (platformtotransfer > init_asset_empty)
    {
        INLINE_ACTION_SENDER(eosio::token, transfer)
        (
            existing->amountSymbol.get_contract(), {{_self, "active"_n}},
            {_self, platformaccount, platformtotransfer, std::string("platformcommission")});
    }
    // agent
    asset agentotransfer = init_asset_empty;
    agentotransfer = asset(betAmount.amount * existing->commission_rate_agent, existing->amountSymbol.get_symbol());
    eosio::print(" sum_bet_amount:", betAmount, " agentotransfer:", agentotransfer, " commission_rate_agent:", existing->commission_rate_agent, " ");
    if (agentotransfer > init_asset_empty)
    {
        INLINE_ACTION_SENDER(eosio::token, transfer)
        (
            existing->amountSymbol.get_contract(), {{_self, "active"_n}},
            {_self, agent, agentotransfer, std::string("agentcommission")});
    }
    // player
    asset playertotransfer = asset(betAmount.amount * existing->commission_rate_player, existing->amountSymbol.get_symbol());
    eosio::print(" sum_bet_amount:", betAmount, " playertotransfer:", playertotransfer, " commission_rate_player:", existing->commission_rate_player, " ");
    if (playertotransfer > init_asset_empty)
    {
        INLINE_ACTION_SENDER(eosio::token, transfer)
        (
            existing->amountSymbol.get_contract(), {{_self, "active"_n}},
            {_self, player, playertotransfer, std::string("playercommission")});
    }

    temp.agentcommission = agentotransfer;
    temp.playercommission = playertotransfer;

    asset balance = existing->dealerBalance;
    balance -= platformtotransfer;
    balance -= agentotransfer;
    balance -= playertotransfer;
    // -------------------------------- commission end --------------------------------

    tableround.modify(existing, _self, [&](auto &s) {
        s.playerInfo.emplace_back(temp);
        s.dealerBalance = balance;
        s.currRoundBetSum_bsoe = player_amount_sum_bsoe;
        s.currRoundBetSum_anytri = player_amount_sum_anytri;
        s.currRoundBetSum_trinum = player_amount_sum_trinum;
        s.currRoundBetSum_pairnum = player_amount_sum_pairnum;
        s.currRoundBetSum_txx = player_amount_sum_txx;
        s.currRoundBetSum_twocom = player_amount_sum_twocom;
        s.currRoundBetSum_single = player_amount_sum_single;
    });
}

// server defer action: end bet
ACTION lizard::endbet(uint64_t tableId)
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

ACTION lizard::verdealeseed(uint64_t tableId, string seed)
{
    require_auth(serveraccount);
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
ACTION lizard::verserveseed(uint64_t tableId, string seed)
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
    string root_seed = seed + salt;
    if (existing->trusteeship)
    {
        eosio::print("Dealer trusteeship, don't need dealer seed.");
    }
    // non-trustee server, so table_round is waiting for ACTION::lizard::dealerseed until dealer reconnect.
    // TODO Can be considered: auto trustee server until dealer reconnect and ACTION::lizard::exitruteship.
    else if (!existing->dSeedVerity)
    { // dealer disconnect notify
        INLINE_ACTION_SENDER(lizard, disconnecthi)
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
    // Split 3 seeds, get dice result.
    std::vector<uint16_t> diceResult_temp;
    auto score = 0;
    auto counter = 0;
    while (counter < 3)
    {
        string sub_seed = root_seed_64.substr(counter * 21, 21);
        wbrng.srand(SDBMHash((char *)sub_seed.c_str()));
        uint16_t result = wbrng.rand() % 6 + 1;
        score += result;
        diceResult_temp.emplace_back(result);
        eosio::print("[dice_result:", result, "]");
        counter++;
    }
    sort(diceResult_temp.begin(), diceResult_temp.end());

    //get roundResult
    std::vector<string> roundResult_temp;
    bool tripe_flag = false;
    if (diceResult_temp[0] == diceResult_temp[2])
    {
        roundResult_temp.emplace_back("anytri");
        tripe_flag = true;
        char itc[5];
        sprintf(itc, "%d", diceResult_temp[0]); // transformation, number -> char.
        string tri_name = "tri";
        tri_name += itc;
        roundResult_temp.emplace_back(tri_name);
        string pair_name = "pair";
        pair_name += itc;
        roundResult_temp.emplace_back(pair_name);
        string signal_name = "s";
        signal_name += itc;
        roundResult_temp.emplace_back(signal_name);
    }
    else if (diceResult_temp[0] == diceResult_temp[1] || diceResult_temp[2] == diceResult_temp[1])
    {
        char itc[5];
        sprintf(itc, "%d", diceResult_temp[1]);
        string pair_name = "pair";
        pair_name += itc;
        roundResult_temp.emplace_back(pair_name);

        if (diceResult_temp[0] == diceResult_temp[1] && diceResult_temp[1] != diceResult_temp[2])
        {
            sprintf(itc, "%d%d", diceResult_temp[1], diceResult_temp[2]);
            string com_name = "c";
            com_name += itc;
            roundResult_temp.emplace_back(com_name);

            string signal_name1 = "s";
            sprintf(itc, "%d", diceResult_temp[2]);
            signal_name1 += itc;
            roundResult_temp.emplace_back(signal_name1);
        }
        else if (diceResult_temp[1] == diceResult_temp[2] && diceResult_temp[0] != diceResult_temp[1])
        {
            sprintf(itc, "%d%d", diceResult_temp[0], diceResult_temp[1]);
            string com_name = "c";
            com_name += itc;
            roundResult_temp.emplace_back(com_name);

            string signal_name1 = "s";
            sprintf(itc, "%d", diceResult_temp[0]);
            signal_name1 += itc;
            roundResult_temp.emplace_back(signal_name1);
        }

        string signal_name = "s";
        sprintf(itc, "%d", diceResult_temp[1]);
        signal_name += itc;
        roundResult_temp.emplace_back(signal_name);
    }
    else if (diceResult_temp[0] != diceResult_temp[1] && diceResult_temp[2] != diceResult_temp[1])
    {
        char itc[5];
        sprintf(itc, "%d%d", diceResult_temp[0], diceResult_temp[1]);
        string com_name = "c";
        com_name += itc;
        roundResult_temp.emplace_back(com_name);

        com_name = "c";
        sprintf(itc, "%d%d", diceResult_temp[0], diceResult_temp[2]);
        com_name += itc;
        roundResult_temp.emplace_back(com_name);

        com_name = "c";
        sprintf(itc, "%d%d", diceResult_temp[1], diceResult_temp[2]);
        com_name += itc;
        roundResult_temp.emplace_back(com_name);

        for (auto signal : diceResult_temp)
        {
            string signal_name = "s";
            sprintf(itc, "%d", signal);
            signal_name += itc;
            roundResult_temp.emplace_back(signal_name);
        }
    }

    if (score >= 11 && score <= 17 && !tripe_flag)
        roundResult_temp.emplace_back("big");
    else if (score >= 4 && score <= 10 && !tripe_flag)
        roundResult_temp.emplace_back("small");

    if (score % 2 == 1 && !tripe_flag)
        roundResult_temp.emplace_back("odd");
    else if (score % 2 == 0 && !tripe_flag)
        roundResult_temp.emplace_back("even");

    char itc[15];
    sprintf(itc, "total%d", score);
    roundResult_temp.emplace_back(itc);
    for (auto result : roundResult_temp)
        eosio::print(" round_result: ", result, " ");

    //odds token
    asset init_asset_empty = asset(0, existing->amountSymbol.get_symbol());
    std::vector<player_bet_info> tempPlayerVec;
    asset dealerBalance_temp = existing->dealerBalance;
    for (auto playerBet : existing->playerInfo)
    {
        auto pBonus = init_asset_empty;
        auto dBonus = init_asset_empty;
        auto pos = playerBet.bet.find(":");
        auto pos_end = 0;
        while (pos != string::npos)
        {
            string temp_name = playerBet.bet.substr(pos_end + 2, pos - pos_end - 3);
            bool bet_match_result = false;
            for (auto j : roundResult_temp)
            {
                if (j == temp_name)
                {
                    eosio::print("temp_name:", temp_name, " ...");
                    bet_match_result = true;
                }
            }

            pos_end = playerBet.bet.find(",", pos);
            if (pos_end == -1)
            {
                pos_end = playerBet.bet.find("}", pos);
            }
            string temp_amount = playerBet.bet.substr(pos + 3, pos_end - pos - 4);
            auto amount = from_string(temp_amount, symbol(symbol_code("SYS"), 4));
            eosio::print("temp_amount:[", temp_amount, "] to int:[", amount, "] ...");
            pos = playerBet.bet.find(":", pos_end);
            //odds
            if (bet_match_result)
            {
                if (0 == temp_name.compare("big") || 0 == temp_name.compare("small") || 0 == temp_name.compare("odd") || 0 == temp_name.compare("even") ||
                    0 == temp_name.compare("s1") || 0 == temp_name.compare("s2") || 0 == temp_name.compare("s3") ||
                    0 == temp_name.compare("s4") || 0 == temp_name.compare("s5") || 0 == temp_name.compare("s6"))
                {
                    pBonus += amount * (1 + 1);
                }
                else if (0 == temp_name.compare("c12") || 0 == temp_name.compare("c13") || 0 == temp_name.compare("c14") ||
                         0 == temp_name.compare("c15") || 0 == temp_name.compare("c16") || 0 == temp_name.compare("c23") ||
                         0 == temp_name.compare("c24") || 0 == temp_name.compare("c25") || 0 == temp_name.compare("c26") ||
                         0 == temp_name.compare("c34") || 0 == temp_name.compare("c35") || 0 == temp_name.compare("c36") ||
                         0 == temp_name.compare("c45") || 0 == temp_name.compare("c46") || 0 == temp_name.compare("c56"))
                {
                    pBonus += amount * (1 + 5);
                }
                else if (0 == temp_name.compare("total9") || 0 == temp_name.compare("total12") ||
                         0 == temp_name.compare("total10") || 0 == temp_name.compare("total11"))
                {
                    pBonus += amount * (1 + 6);
                }
                else if (0 == temp_name.compare("total8") || 0 == temp_name.compare("total13") ||
                         0 == temp_name.compare("pair1") || 0 == temp_name.compare("pair2") ||
                         0 == temp_name.compare("pair3") || 0 == temp_name.compare("pair4") ||
                         0 == temp_name.compare("pair5") || 0 == temp_name.compare("pair6"))
                {
                    pBonus += amount * (1 + 8);
                }
                else if (0 == temp_name.compare("total7") || 0 == temp_name.compare("total14"))
                {
                    pBonus += amount * (1 + 12);
                }
                else if (0 == temp_name.compare("total6") || 0 == temp_name.compare("total15"))
                {
                    pBonus += amount * (1 + 14);
                }
                else if (0 == temp_name.compare("total5") || 0 == temp_name.compare("total16"))
                {
                    pBonus += amount * (1 + 18);
                }
                else if (0 == temp_name.compare("anytri"))
                {
                    pBonus += amount * (1 + 24);
                }
                else if (0 == temp_name.compare("total4") || 0 == temp_name.compare("total17"))
                {
                    pBonus += amount * (1 + 50);
                }
                else if (0 == temp_name.compare("tri1") || 0 == temp_name.compare("tri2") ||
                         0 == temp_name.compare("tri3") || 0 == temp_name.compare("tri4") ||
                         0 == temp_name.compare("tri5") || 0 == temp_name.compare("tri6"))
                {
                    pBonus += amount * (1 + 150);
                }
            }
            else
                dBonus += amount;
        }
        eosio::print(" [player:", playerBet.player, ", total bonus:", pBonus, "] ");
        eosio::print(" [dealer:", existing->dealer, ", total bonus:", dBonus, "] ");

        if (pBonus > init_asset_empty)
        {
            INLINE_ACTION_SENDER(eosio::token, transfer)
            (
                existing->amountSymbol.get_contract(), {{_self, "active"_n}},
                {_self, playerBet.player, pBonus, std::string("playerbet win")});
        }

        dealerBalance_temp -= pBonus;
        dealerBalance_temp += dBonus;
        playerBet.pBonus = pBonus;
        playerBet.dBonus = dBonus;
        tempPlayerVec.emplace_back(playerBet);
    }

    char diceResultStr[5];
    sprintf(diceResultStr, "%d%d%d", diceResult_temp[0], diceResult_temp[1], diceResult_temp[2]);

    string roundResultStr = "";
    for (auto str : roundResult_temp)
    {
        roundResultStr += str;
        roundResultStr += " ";
    }

    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_END;
        s.diceResult = diceResultStr;
        s.roundResult = roundResultStr;
        s.dealerBalance = dealerBalance_temp;
        s.playerInfo = tempPlayerVec;
    });
}

ACTION lizard::trusteeship(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    require_auth(existing->dealer); // dealer trustee server.
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "tableStatus != end");
    tableround.modify(existing, _self, [&](auto &s) {
        s.trusteeship = true;
    });
}

ACTION lizard::exitruteship(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    require_auth(existing->dealer); // dealer exit trusteeship from server.
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "tableStatus != end");
    tableround.modify(existing, _self, [&](auto &s) {
        s.trusteeship = false;
    });
}

ACTION lizard::disconnecthi(name informed, uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_REVEAL, "tableStatus != reveal");
    eosio_assert(existing->dealer == informed, "People informed is not the dealer of table!");
    eosio::print("SC disconnecthi has already informed :", informed.to_string());
}

ACTION lizard::clear12cache(int64_t key)
{
    require_auth(adminaccount);
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

ACTION lizard::pausetabledea(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    require_auth(existing->dealer); // dealer of the table permission.
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "The round isn't end, can't pause table");
    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint64_t)table_stats::status_fields::PAUSED;
    });
}

ACTION lizard::pausetablesee(uint64_t tableId)
{
    require_auth(serveraccount); // server permission.
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "The round isn't end, can't pause table");
    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint64_t)table_stats::status_fields::PAUSED;
    });
}

ACTION lizard::continuetable(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    require_auth(existing->dealer);
    eosio_assert(existing->dealerBalance >= existing->oneRoundDealerMaxPay * 2, "Can't recover table, dealer balance isn't enough!");
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::PAUSED, "The tableid not paused, can`t continuetable");
    tableround.modify(existing, _self, [&](auto &s) {
        s.tableStatus = (uint64_t)table_stats::status_fields::ROUND_END;
    });
}

ACTION lizard::closetable(uint64_t tableId)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    require_auth(existing->dealer);
    eosio_assert(existing->tableStatus == (uint64_t)table_stats::status_fields::ROUND_END, "The round isn't end, can't close!");

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

ACTION lizard::depositable(uint64_t tableId, asset deposit)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    require_auth(existing->dealer);
    eosio_assert(deposit + existing->dealerBalance >= existing->minTableDeposit, "Table deposit is not enough!");
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
    //     INLINE_ACTION_SENDER(lizard, continuetable)
    //     (
    //         _self, {{existing->dealer, "active"_n}},
    //         {existing->tableId});
    // }
}

ACTION lizard::dealerwitdaw(uint64_t tableId, asset withdraw)
{
    require_auth(serveraccount);
    auto existing = tableround.find(tableId);
    eosio_assert(existing != tableround.end(), notableerr);
    require_auth(existing->dealer);
    eosio_assert((existing->dealerBalance - withdraw) > existing->minTableDeposit, "Table dealerBalance is not enough to support next round!");

    INLINE_ACTION_SENDER(eosio::token, transfer)
    (
        existing->amountSymbol.get_contract(), {{_self, "active"_n}},
        {_self, existing->dealer, withdraw, std::string("withdraw")});
    tableround.modify(existing, _self, [&](auto &s) {
        s.dealerBalance -= withdraw;
    });
}

ACTION lizard::upgrading(bool isupgrading)
{
    require_auth(adminaccount);
    auto existing = tableround.begin();
    for (; existing != tableround.end(); existing++)
    {
        tableround.modify(existing, _self, [&](auto &s) {
            s.upgradingFlag = isupgrading;
        });
    }
}

ACTION lizard::import12data(uint64_t tableId, uint64_t tableStatus, name dealer, bool trusteeship, bool isPrivate, asset dealerBalance, asset oneRoundMaxTotalBet_bsoe, asset minPerBet_bsoe, asset oneRoundMaxTotalBet_anytri, asset minPerBet_anytri, asset oneRoundMaxTotalBet_trinum, asset minPerBet_trinum, asset oneRoundMaxTotalBet_pairnum, asset minPerBet_pairnum, asset oneRoundMaxTotalBet_txx, asset minPerBet_txx, asset oneRoundMaxTotalBet_twocom, asset minPerBet_twocom, asset oneRoundMaxTotalBet_single, asset minPerBet_single, asset oneRoundDealerMaxPay, asset minTableDeposit, float commission_rate_agent, float commission_rate_player, bool upgradingFlag, extended_symbol amountSymbol)
{
    require_auth(adminaccount);

    tableround.emplace(_self, [&](auto &s) {
        s.tableId = tableId;
        s.tableStatus = tableStatus;
        s.dealer = dealer;
        s.dealerBalance = dealerBalance;
        s.isPrivate = isPrivate;
        s.trusteeship = trusteeship;
        s.oneRoundMaxTotalBet_bsoe = oneRoundMaxTotalBet_bsoe;
        s.minPerBet_bsoe = minPerBet_bsoe;
        s.oneRoundMaxTotalBet_anytri = oneRoundMaxTotalBet_anytri;
        s.minPerBet_anytri = minPerBet_anytri;
        s.oneRoundMaxTotalBet_trinum = oneRoundMaxTotalBet_trinum;
        s.minPerBet_trinum = minPerBet_trinum;
        s.oneRoundMaxTotalBet_pairnum = oneRoundMaxTotalBet_pairnum;
        s.minPerBet_pairnum = minPerBet_pairnum;
        s.oneRoundMaxTotalBet_txx = oneRoundMaxTotalBet_txx;
        s.minPerBet_txx = minPerBet_txx;
        s.oneRoundMaxTotalBet_twocom = oneRoundMaxTotalBet_twocom;
        s.minPerBet_twocom = minPerBet_twocom;
        s.oneRoundMaxTotalBet_single = oneRoundMaxTotalBet_single;
        s.minPerBet_single = minPerBet_single;
        s.oneRoundDealerMaxPay = oneRoundDealerMaxPay;
        s.minTableDeposit = minTableDeposit;
        s.amountSymbol = amountSymbol;
        s.commission_rate_agent = commission_rate_agent;
        s.commission_rate_player = commission_rate_player;
        s.upgradingFlag = true;
    });
}
EOSIO_DISPATCH(lizard, (initsymbol)(newtable)(dealerseed)(serverseed)(endbet)(playerbet)(verdealeseed)(verserveseed)(trusteeship)(exitruteship)(disconnecthi)(clear12cache)(pausetabledea)(pausetablesee)(continuetable)(closetable)(depositable)(dealerwitdaw)(edittable)(upgrading)(import12data))