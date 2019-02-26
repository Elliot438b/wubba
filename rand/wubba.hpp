#pragma once

#include <eosiolib/transaction.hpp>
#include <eosiolib/permission.hpp>
#include <eosiolib/crypto.hpp>
#include "eosio.token.hpp"
#include <cstdlib>

using namespace eosio;
using namespace std;
using std::string;

CONTRACT wubba : public contract
{
  public:
    using contract::contract;

    wubba(name receiver, name code, datastream<const char *> ds)
        : contract(receiver, code, ds), tableround(receiver, receiver.value) {}

    ACTION newtable(name dealer, asset deposit, bool isPrivate, asset oneRoundMaxTotalBet_BP, asset minPerBet_BP, asset oneRoundMaxTotalBet_Tie, asset minPerBet_Tie, asset oneRoundMaxTotalBet_Push, asset minPerBet_Push);
    ACTION dealerseed(uint64_t tableId, checksum256 encodeSeed);
    ACTION serverseed(uint64_t tableId, checksum256 encodeSeed);
    ACTION endbet(uint64_t tableId);
    ACTION playerbet(uint64_t tableId, name player, asset betDealer, asset betPlayer, asset betTie, asset betDealerPush, asset betPlayerPush);
    ACTION verdealeseed(uint64_t tableId, string seed);
    ACTION verserveseed(uint64_t tableId, string seed);
    ACTION trusteeship(uint64_t tableId);
    ACTION exitruteship(uint64_t tableId);
    ACTION disconnecthi(name informed, uint64_t tableId);
    ACTION erasingdata(uint64_t key);
    ACTION pausetable(uint64_t tableId);
    ACTION pausetablehi(uint64_t tableId);
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

    TABLE table_stats
    {
        // ------------------------------ table field ------------------------------
        std::vector<uint16_t> validCardVec; // newtable init & new round check.
        uint64_t tableId;                   // table fix.
        name dealer;                        // table owner.
        bool trusteeship;                   // table flag.
        bool isPrivate;
        asset dealerBalance; // table filed.
        asset oneRoundMaxTotalBet_BP;
        asset minPerBet_BP;
        asset oneRoundMaxTotalBet_Tie;
        asset minPerBet_Tie;
        asset oneRoundMaxTotalBet_Push;
        asset minPerBet_Push;

        asset oneRoundDealerMaxPay;
        asset minTableDeposit;
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
        EOSLIB_SERIALIZE(table_stats, (validCardVec)(tableId)(dealer)(trusteeship)(isPrivate)(dealerBalance)(oneRoundMaxTotalBet_BP)(minPerBet_BP)(oneRoundMaxTotalBet_Tie)(minPerBet_Tie)(oneRoundMaxTotalBet_Push)(minPerBet_Push)(oneRoundDealerMaxPay)(minTableDeposit)(betStartTime)(tableStatus)(currRoundBetSum_BP)(currRoundBetSum_Tie)(currRoundBetSum_Push)(dealerSeedHash)(serverSeedHash)(dealerSeed)(serverSeed)(dSeedVerity)(sSeedVerity)(playerInfo)(roundResult)(playerHands)(bankerHands))
    };

    typedef eosio::multi_index<"tablesinfo"_n, wubba::table_stats, indexed_by<"dealer"_n, const_mem_fun<wubba::table_stats, uint64_t, &wubba::table_stats::get_dealer>>> singletable_t;
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
    using newtable_action = action_wrapper<"newtable"_n, &wubba::newtable>;
    using dealerseed_action = action_wrapper<"dealerseed"_n, &wubba::dealerseed>;
    using serverseed_action = action_wrapper<"serverseed"_n, &wubba::serverseed>;
    using playerbet_action = action_wrapper<"playerbet"_n, &wubba::playerbet>;
    using endbet_action = action_wrapper<"endbet"_n, &wubba::endbet>;
    using verdealeseed_action = action_wrapper<"verdealeseed"_n, &wubba::verdealeseed>;
    using verserveseed_action = action_wrapper<"verserveseed"_n, &wubba::verserveseed>;
    using trusteeship_action = action_wrapper<"trusteeship"_n, &wubba::trusteeship>;
    using exitruteship_action = action_wrapper<"exitruteship"_n, &wubba::exitruteship>;
    using disconnecthi_action = action_wrapper<"disconnecthi"_n, &wubba::disconnecthi>;
    using erasingdata_action = action_wrapper<"erasingdata"_n, &wubba::erasingdata>;
    using pausetable_action = action_wrapper<"pausetable"_n, &wubba::pausetable>;
    using pausetablehi_action = action_wrapper<"pausetablehi"_n, &wubba::pausetablehi>;
    using continuetable_action = action_wrapper<"continuetable"_n, &wubba::continuetable>;
    using closetable_action = action_wrapper<"closetable"_n, &wubba::closetable>;
    using depositable_action = action_wrapper<"depositable"_n, &wubba::depositable>;
    using dealerwitdaw_action = action_wrapper<"dealerwitdaw"_n, &wubba::dealerwitdaw>;
    using changeprivat_action = action_wrapper<"changeprivat"_n, &wubba::changeprivat>;

    name serveraccount = "useraaaaaaah"_n;
    name platfrmacnt = "useraaaaaaah"_n; // platform commission account.

    const uint16_t CardsMinLimit = 100;
    const uint32_t betPeriod = 30;
    const uint16_t initDecks = 8;
    const uint32_t minTableRounds = 10;

    const asset oneRoundMaxTotalBet_BP_default = asset(1000 * 10000, symbol(symbol_code("SYS"), 4)); //1000
    const asset minPerBet_BP_default = asset(100 * 10000, symbol(symbol_code("SYS"), 4));            //100
    const asset oneRoundMaxTotalBet_Tie_default = asset(100 * 10000, symbol(symbol_code("SYS"), 4)); //100
    const asset minPerBet_Tie_default = asset(1 * 10000, symbol(symbol_code("SYS"), 4));             //1
    const asset oneRoundMaxTotalBet_Push_default = asset(50 * 10000, symbol(symbol_code("SYS"), 4)); //50
    const asset minPerBet_Push_default = asset(1 * 10000, symbol(symbol_code("SYS"), 4));            //1
    const asset init_asset_empty = asset(0, symbol(symbol_code("SYS"), 4));

    const char *notableerr = "TableId isn't existing!";

    singletable_t tableround;
    WBRNG wbrng;
};
