#pragma once

#include <eosiolib/transaction.hpp>
#include <eosiolib/permission.hpp>
#include <eosiolib/crypto.hpp>
#include "../../chain/eosio.token.hpp"
#include <cstdlib>

using namespace eosio;
using namespace std;
using std::string;

CONTRACT mallard : public contract
{
  public:
    using contract::contract;

    mallard(name receiver, name code, datastream<const char *> ds)
        : contract(receiver, code, ds), tableround(receiver, receiver.value) {}

    ACTION newtable(name dealer, asset deposit, bool isPrivate, name code, string sym, asset oneRoundMaxTotalBet_BP, asset minPerBet_BP, asset oneRoundMaxTotalBet_Tie, asset minPerBet_Tie, asset oneRoundMaxTotalBet_Push, asset minPerBet_Push);
    ACTION dealerseed(uint64_t tableId, checksum256 encodeSeed);
    ACTION serverseed(uint64_t tableId, checksum256 encodeSeed);
    ACTION playerbet(uint64_t tableId, name player, asset betDealer, asset betPlayer, asset betTie, asset betDealerPush, asset betPlayerPush);
    ACTION endbet(uint64_t tableId);
    ACTION verdealeseed(uint64_t tableId, string seed);
    ACTION verserveseed(uint64_t tableId, string seed);
    ACTION trusteeship(uint64_t tableId);
    ACTION exitruteship(uint64_t tableId);
    ACTION disconnecthi(name informed, uint64_t tableId);
    ACTION erasingdata(uint64_t key);
    ACTION pausetabledea(uint64_t tableId);
    ACTION pausetablesee(uint64_t tableId);
    ACTION continuetable(uint64_t tableId);
    ACTION closetable(uint64_t tableId);
    ACTION depositable(name dealer, uint64_t tableId, asset deposit);
    ACTION dealerwitdaw(uint64_t tableId, asset withdraw);
    ACTION changeprivat(bool isPrivate, uint64_t tableId);

    struct card_info
    {
        uint8_t deck;
        uint8_t cardNum;
        uint8_t cardColor;

        EOSLIB_SERIALIZE(card_info, (deck)(cardNum)(cardColor))
    };

    struct player_bet_info
    {
        name player;
        asset betDealer;
        asset betPlayer;
        asset betTie;
        asset betDealerPush;
        asset betPlayerPush;
        asset pBonus;
        asset dBonus;

        EOSLIB_SERIALIZE(player_bet_info, (player)(betDealer)(betPlayer)(betTie)(betDealerPush)(betPlayerPush)(pBonus)(dBonus))
    };

    struct sym_info
    {
        uint16_t id;
        name code;
        symbol symName;

        EOSLIB_SERIALIZE(sym_info, (id)(code)(symName))
    };

    TABLE table_stats
    {
        // ------------------------------ table field ------------------------------
        std::vector<uint16_t> validCardVec; // newtable init & new round check.
        uint64_t tableId;                   // table fix.
        name dealer;                        // table owner.
        bool trusteeship;                   // table flag.
        bool isPrivate;                     // table flag.
        asset dealerBalance;                // table filed.
        asset oneRoundMaxTotalBet_BP;
        asset minPerBet_BP;
        asset oneRoundMaxTotalBet_Tie;
        asset minPerBet_Tie;
        asset oneRoundMaxTotalBet_Push;
        asset minPerBet_Push;

        asset oneRoundDealerMaxPay;
        asset minTableDeposit;
        symbol amontSymbol;
        // ------------------------------ round field ------------------------------
        uint64_t betStartTime; // for keeping bet stage/round.
        uint64_t tableStatus;  // round stage.
        asset currRoundBetSum_BP;
        asset currRoundBetSum_Tie;
        asset currRoundBetSum_Push;

        checksum256 dealerSeedHash;
        checksum256 serverSeedHash;
        string dealerSeed;
        string serverSeed;
        bool dSeedVerity;
        bool sSeedVerity;

        std::vector<player_bet_info> playerInfo;

        string roundResult;
        std::vector<card_info> playerHands;
        std::vector<card_info> bankerHands;

        uint64_t primary_key() const { return tableId; }
        uint64_t get_dealer() const { return dealer.value; }

        enum class status_fields : uint64_t
        {
            ROUND_START = 1,
            ROUND_BET = 2,
            ROUND_REVEAL = 4,
            ROUND_END = 0,
            PAUSED = 3, // must be changed under ROUND_END status.
            CLOSED = 5
        };
        EOSLIB_SERIALIZE(table_stats, (validCardVec)(tableId)(dealer)(trusteeship)(isPrivate)(dealerBalance)(oneRoundMaxTotalBet_BP)(minPerBet_BP)(oneRoundMaxTotalBet_Tie)(minPerBet_Tie)(oneRoundMaxTotalBet_Push)(minPerBet_Push)(oneRoundDealerMaxPay)(minTableDeposit)(amontSymbol)(betStartTime)(tableStatus)(currRoundBetSum_BP)(currRoundBetSum_Tie)(currRoundBetSum_Push)(dealerSeedHash)(serverSeedHash)(dealerSeed)(serverSeed)(dSeedVerity)(sSeedVerity)(playerInfo)(roundResult)(playerHands)(bankerHands))
    };

    typedef eosio::multi_index<"tablesinfo"_n, mallard::table_stats, indexed_by<"dealer"_n, const_mem_fun<mallard::table_stats, uint64_t, &mallard::table_stats::get_dealer>>> singletable_t;
    // std random
    struct WBRNG
    {
        unsigned long next;
        void srand(unsigned int seed)
        {
            next = seed;
        }
        int rand()
        {
            next = next * 1103515245 + 12345;
            return (unsigned int)(next / 65536) % 32768;
        }
    };
    // char to int:string hash function. SDBMHash
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
    // 32 char to hex:64 string
    string to_hex_w(const char *d, uint32_t s)
    {
        std::string r;
        const char *to_hex = "0123456789abcdef";
        uint8_t *c = (uint8_t *)d;
        for (uint32_t i = 0; i < s; ++i)
            (r += to_hex[(c[i] >> 4)]) += to_hex[(c[i] & 0x0f)];
        return r;
    }
    // shuffle
    void shuffle(std::vector<uint16_t> & cardVec)
    {
        cardVec.clear();
        for (auto i = 0; i < initDecks * 52; i++)
        {
            cardVec.emplace_back(i);
        }
    }

    using newtable_action = action_wrapper<"newtable"_n, &mallard::newtable>;
    using dealerseed_action = action_wrapper<"dealerseed"_n, &mallard::dealerseed>;
    using serverseed_action = action_wrapper<"serverseed"_n, &mallard::serverseed>;
    using playerbet_action = action_wrapper<"playerbet"_n, &mallard::playerbet>;
    using endbet_action = action_wrapper<"endbet"_n, &mallard::endbet>;
    using verdealeseed_action = action_wrapper<"verdealeseed"_n, &mallard::verdealeseed>;
    using verserveseed_action = action_wrapper<"verserveseed"_n, &mallard::verserveseed>;
    using trusteeship_action = action_wrapper<"trusteeship"_n, &mallard::trusteeship>;
    using exitruteship_action = action_wrapper<"exitruteship"_n, &mallard::exitruteship>;
    using disconnecthi_action = action_wrapper<"disconnecthi"_n, &mallard::disconnecthi>;
    using erasingdata_action = action_wrapper<"erasingdata"_n, &mallard::erasingdata>;
    using pausetabledea_action = action_wrapper<"pausetabledea"_n, &mallard::pausetabledea>;
    using pausetableser_action = action_wrapper<"pausetablesee"_n, &mallard::pausetablesee>;
    using continuetable_action = action_wrapper<"continuetable"_n, &mallard::continuetable>;
    using closetable_action = action_wrapper<"closetable"_n, &mallard::closetable>;
    using depositable_action = action_wrapper<"depositable"_n, &mallard::depositable>;
    using dealerwitdaw_action = action_wrapper<"dealerwitdaw"_n, &mallard::dealerwitdaw>;
    using changeprivat_action = action_wrapper<"changeprivat"_n, &mallard::changeprivat>;

    name serveraccount = "useraaaaaaah"_n;
    name platfrmacnt = "useraaaaaaah"_n; // platform commission account.

    const uint16_t CardsMinLimit = 100;
    const uint32_t betPeriod = 30;
    const uint16_t initDecks = 8;
    const uint32_t minTableRounds = 10;

    static std::vector<sym_info> createSymOptions()
    {
        std::vector<sym_info> tempSym;

        sym_info sym_temp;
        sym_temp.id = 0;
        sym_temp.code = "eosio.token"_n;
        sym_temp.symName = symbol(symbol_code("SYS"), 4);;
        tempSym.emplace_back(sym_temp);

        sym_temp.id = 1;
        sym_temp.code = "useraaaaaaaj"_n;
        sym_temp.symName = symbol(symbol_code("TES"), 4);;
        tempSym.emplace_back(sym_temp);

        return tempSym;
    }

//    const asset oneRoundMaxTotalBet_BP_default = asset(1000 * 10000, symbol(symbol_code("SYS"), 4)); //1000
//    const asset minPerBet_BP_default = asset(100 * 10000, symbol(symbol_code("SYS"), 4));            //100
//    const asset oneRoundMaxTotalBet_Tie_default = asset(100 * 10000, symbol(symbol_code("SYS"), 4)); //100
//    const asset minPerBet_Tie_default = asset(1 * 10000, symbol(symbol_code("SYS"), 4));             //1
//    const asset oneRoundMaxTotalBet_Push_default = asset(50 * 10000, symbol(symbol_code("SYS"), 4)); //50
//    const asset minPerBet_Push_default = asset(1 * 10000, symbol(symbol_code("SYS"), 4));            //1
//    const asset init_asset_empty = asset(0, symbol(symbol_code("SYS"), 4));

    const char *notableerr = "TableId isn't existing!";

    static const std::vector<sym_info> symOptions;

    singletable_t tableround;
    WBRNG wbrng;
};
const std::vector<mallard::sym_info> mallard::symOptions = mallard::createSymOptions();