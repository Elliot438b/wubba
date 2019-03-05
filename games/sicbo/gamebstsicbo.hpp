#pragma once

#include <eosiolib/transaction.hpp>
#include <eosiolib/permission.hpp>
#include <eosiolib/crypto.hpp>
#include "../../chain/eosio.token.hpp"
#include <cstdlib>

using namespace eosio;
using namespace std;
using std::string;

CONTRACT gamebstsicbo : public contract
{
  public:
    using contract::contract;

    gamebstsicbo(name receiver, name code, datastream<const char *> ds)
        : contract(receiver, code, ds), tableround(receiver, receiver.value) {}

    ACTION newtable(name dealer, asset deposit, bool isPrivate);
    ACTION dealerseed(uint64_t tableId, checksum256 encodeSeed);
    ACTION serverseed(uint64_t tableId, checksum256 encodeSeed);
    ACTION endbet(uint64_t tableId);
    ACTION playerbet(uint64_t tableId, name player, string bet);
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

    bool checkName(string bet);

    struct player_bet_info
    {
        name player;
        string bet;
        asset pBonus;
        asset dBonus;

        EOSLIB_SERIALIZE(player_bet_info, (player)(bet)(pBonus)(dBonus))
    };

    TABLE table_stats
    {
        // ------------------------------ table field ------------------------------
        uint64_t tableId;                   // table fix.
        name dealer;                        // table owner.
        bool trusteeship;                   // table flag.
        bool isPrivate;                     // table flag.
        asset dealerBalance;                // table filed.
            // ------------------------------ round field ------------------------------
        uint64_t betStartTime; // for keeping bet stage/round.
        uint64_t tableStatus;  // round stage.

        checksum256 dealerSeedHash;
        checksum256 serverSeedHash;
        string dealerSeed;
        string serverSeed;
        bool dSeedVerity;
        bool sSeedVerity;

        std::vector<player_bet_info> playerInfo;

        string roundResult;
        string diceResult;

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
        EOSLIB_SERIALIZE(table_stats, (tableId)(dealer)(trusteeship)(isPrivate)(dealerBalance)(betStartTime)(tableStatus)(dealerSeedHash)(serverSeedHash)(dealerSeed)(serverSeed)(dSeedVerity)(sSeedVerity)(playerInfo)(roundResult)(diceResult))
    };

    typedef eosio::multi_index<"tablesinfo"_n, gamebstsicbo::table_stats, indexed_by<"dealer"_n, const_mem_fun<gamebstsicbo::table_stats, uint64_t, &gamebstsicbo::table_stats::get_dealer>>> singletable_t;
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

    using newtable_action = action_wrapper<"newtable"_n, &gamebstsicbo::newtable>;
    using dealerseed_action = action_wrapper<"dealerseed"_n, &gamebstsicbo::dealerseed>;
    using serverseed_action = action_wrapper<"serverseed"_n, &gamebstsicbo::serverseed>;
    using playerbet_action = action_wrapper<"playerbet"_n, &gamebstsicbo::playerbet>;
    using endbet_action = action_wrapper<"endbet"_n, &gamebstsicbo::endbet>;
    using verdealeseed_action = action_wrapper<"verdealeseed"_n, &gamebstsicbo::verdealeseed>;
    using verserveseed_action = action_wrapper<"verserveseed"_n, &gamebstsicbo::verserveseed>;
    using trusteeship_action = action_wrapper<"trusteeship"_n, &gamebstsicbo::trusteeship>;
    using exitruteship_action = action_wrapper<"exitruteship"_n, &gamebstsicbo::exitruteship>;
    using disconnecthi_action = action_wrapper<"disconnecthi"_n, &gamebstsicbo::disconnecthi>;
    using erasingdata_action = action_wrapper<"erasingdata"_n, &gamebstsicbo::erasingdata>;
    using pausetabledea_action = action_wrapper<"pausetabledea"_n, &gamebstsicbo::pausetabledea>;
    using pausetableser_action = action_wrapper<"pausetablesee"_n, &gamebstsicbo::pausetablesee>;
    using continuetable_action = action_wrapper<"continuetable"_n, &gamebstsicbo::continuetable>;
    using closetable_action = action_wrapper<"closetable"_n, &gamebstsicbo::closetable>;
    using depositable_action = action_wrapper<"depositable"_n, &gamebstsicbo::depositable>;
    using dealerwitdaw_action = action_wrapper<"dealerwitdaw"_n, &gamebstsicbo::dealerwitdaw>;
    using changeprivat_action = action_wrapper<"changeprivat"_n, &gamebstsicbo::changeprivat>;

    name serveraccount = "useraaaaaaah"_n;
    name platfrmacnt = "useraaaaaaah"_n; // platform commission account.

    const uint32_t betPeriod = 30;
    const asset init_asset_empty = asset(0, symbol(symbol_code("SYS"), 4));

    static std::vector<string> createInitName()
    {
        std::vector<string> tempName;

        tempName.emplace_back("big");
        tempName.emplace_back("small");
        tempName.emplace_back("odd");
        tempName.emplace_back("even");
        tempName.emplace_back("anytri");
        auto count = 1;
        while(count <= 6)
        {
            string tri_name = "tri";
            string pair_name = "pair";
            string signal_name = "s";
            char itc[3];
            sprintf(itc,"%d",count);
            tri_name += itc;
            pair_name += itc;
            signal_name += itc;
            //eosio::print("tri_name:", tri_name, " pair_name:", pair_name, " signal_name:", signal_name, " !");
            tempName.emplace_back(tri_name);
            tempName.emplace_back(pair_name);
            tempName.emplace_back(signal_name);
            count ++;
        }

        count = 4;
        while(count <= 17)
        {
            string total_name = "total";
            char itc[3];
            sprintf(itc,"%d",count);
            total_name += itc;
            tempName.emplace_back(total_name);
            count ++;
        }

        count = 1;
        for(; count <= 5; count ++)
        {
            auto j = count + 1;
            while(j <= 6)
            {
                string com_name = "c";
                char itc[3];
                sprintf(itc,"%d%d",count,j);
                com_name += itc;
                tempName.emplace_back(com_name);
                j++;
            }
        }

        return tempName;
    };
    static const std::vector<string> initName;

    const char *notableerr = "TableId isn't existing!";

    singletable_t tableround;
    WBRNG wbrng;
};
const std::vector<string> gamebstsicbo::initName = gamebstsicbo::createInitName();