#pragma once

#include <eosiolib/transaction.hpp>
#include <eosiolib/permission.hpp>
#include <eosiolib/crypto.hpp>
#include "../../library/eosio.token/eosio.token.hpp"
#include <cstdlib>
#include <cmath>

using namespace eosio;
using namespace std;
using std::string;

CONTRACT gamemallards : public contract
{
public:
    using contract::contract;

    gamemallards(name receiver, name code, datastream<const char *> ds)
        : contract(receiver, code, ds), tableround(receiver, receiver.value), tableshuffle(receiver, receiver.value), tablecurrency(receiver, receiver.value) {}

    ACTION initsymbol(name code, string sym, asset minperbet);
    ACTION newtable(uint64_t newtableId, name dealer, asset deposit, bool isPrivate, name code, string sym, string commission_rate_agent, string commission_rate_player, asset oneRoundMaxTotalBet_BP, asset minPerBet_BP, asset oneRoundMaxTotalBet_Tie, asset minPerBet_Tie, asset oneRoundMaxTotalBet_Pair, asset minPerBet_Pair);
    ACTION dealerseed(uint64_t tableId, checksum256 encodeSeed);
    ACTION serverseed(uint64_t tableId, checksum256 encodeSeed);
    ACTION playerbet(uint64_t tableId, name player, asset betDealer, asset betPlayer, asset betTie, asset betDealerPair, asset betPlayerPair, name agent, string nickname);
    ACTION endbet(uint64_t tableId);
    ACTION verdealeseed(uint64_t tableId, string seed);
    ACTION verserveseed(uint64_t tableId, string seed, bool free);
    ACTION trusteeship(uint64_t tableId);
    ACTION exitruteship(uint64_t tableId);
    ACTION disconnecthi(name informed, uint64_t tableId);
    ACTION clear12cache(int64_t key);
    ACTION pausetabledea(uint64_t tableId);
    ACTION pausetablesee(uint64_t tableId);
    ACTION continuetable(uint64_t tableId);
    ACTION closetable(uint64_t tableId);
    ACTION depositable(uint64_t tableId, asset deposit);
    ACTION dealerwitdaw(uint64_t tableId, asset withdraw);
    ACTION shuffle(uint64_t tableId);
    ACTION edittable(uint64_t tableId, bool isPrivate, name code, string sym, string commission_rate_agent, string commission_rate_player, asset oneRoundMaxTotalBet_bp, asset minPerBet_bp, asset oneRoundMaxTotalBet_tie, asset minPerBet_tie, asset oneRoundMaxTotalBet_pair, asset minPerBet_pair);
    ACTION upgrading(bool isupgrading);
    ACTION import12data(uint64_t tableId, uint64_t tableStatus, uint64_t cardBoot, name dealer, bool trusteeship,
                        bool isPrivate, asset dealerBalance, asset oneRoundMaxTotalBet_BP, asset minPerBet_BP, asset oneRoundMaxTotalBet_Tie, asset minPerBet_Tie,
                        asset oneRoundMaxTotalBet_Pair, asset minPerBet_Pair, asset oneRoundDealerMaxPay, asset minTableDeposit, double commission_rate_agent, double commission_rate_player, bool upgradingFlag, extended_symbol amountSymbol, std::vector<uint16_t> validCardVec);

    using initsymbol_action = action_wrapper<"initsymbol"_n, &gamemallards::initsymbol>;
    using newtable_action = action_wrapper<"newtable"_n, &gamemallards::newtable>;
    using dealerseed_action = action_wrapper<"dealerseed"_n, &gamemallards::dealerseed>;
    using serverseed_action = action_wrapper<"serverseed"_n, &gamemallards::serverseed>;
    using playerbet_action = action_wrapper<"playerbet"_n, &gamemallards::playerbet>;
    using endbet_action = action_wrapper<"endbet"_n, &gamemallards::endbet>;
    using verdealeseed_action = action_wrapper<"verdealeseed"_n, &gamemallards::verdealeseed>;
    using verserveseed_action = action_wrapper<"verserveseed"_n, &gamemallards::verserveseed>;
    using trusteeship_action = action_wrapper<"trusteeship"_n, &gamemallards::trusteeship>;
    using exitruteship_action = action_wrapper<"exitruteship"_n, &gamemallards::exitruteship>;
    using disconnecthi_action = action_wrapper<"disconnecthi"_n, &gamemallards::disconnecthi>;
    using clear12cache_action = action_wrapper<"clear12cache"_n, &gamemallards::clear12cache>;
    using pausetabledea_action = action_wrapper<"pausetabledea"_n, &gamemallards::pausetabledea>;
    using pausetablesee_action = action_wrapper<"pausetablesee"_n, &gamemallards::pausetablesee>;
    using continuetable_action = action_wrapper<"continuetable"_n, &gamemallards::continuetable>;
    using closetable_action = action_wrapper<"closetable"_n, &gamemallards::closetable>;
    using depositable_action = action_wrapper<"depositable"_n, &gamemallards::depositable>;
    using dealerwitdaw_action = action_wrapper<"dealerwitdaw"_n, &gamemallards::dealerwitdaw>;
    using shuffle_action = action_wrapper<"shuffle"_n, &gamemallards::shuffle>;
    using edittable_action = action_wrapper<"edittable"_n, &gamemallards::edittable>;
    using upgrading_action = action_wrapper<"upgrading"_n, &gamemallards::upgrading>;
    using import12data_action = action_wrapper<"import12data"_n, &gamemallards::import12data>;

private:
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
        asset betDealerPair;
        asset betPlayerPair;
        asset pBonus;
        asset dBonus;
        name agent;
        string nickname;
        asset playercommission;
        asset agentcommission;

        EOSLIB_SERIALIZE(player_bet_info, (player)(betDealer)(betPlayer)(betTie)(betDealerPair)(betPlayerPair)(pBonus)(dBonus)(agent)(nickname)(playercommission)(agentcommission))
    };

    TABLE table_stats
    {
        // ------------------------------ table fields ------------------------------
        std::vector<uint16_t> validCardVec; // newtable init & new round check.
        uint64_t tableId;                   // table fix.
        uint64_t tableStatus;               // round stage.
        uint64_t cardBoot;
        name dealer;         // table owner.
        bool trusteeship;    // table flag.
        bool isPrivate;      // table flag.
        asset dealerBalance; // table field.
        asset oneRoundMaxTotalBet_BP;
        asset minPerBet_BP;
        asset oneRoundMaxTotalBet_Tie;
        asset minPerBet_Tie;
        asset oneRoundMaxTotalBet_Pair;
        asset minPerBet_Pair;

        asset oneRoundDealerMaxPay;
        asset minTableDeposit;
        extended_symbol amountSymbol;
        double commission_rate_agent;
        double commission_rate_player;
        bool upgradingFlag;
        string redundancy;
        string redundancy1;
        // ------------------------------ round field ------------------------------
        uint64_t betStartTime; // for keeping bet stage/round.
        asset currRoundBetSum_BP;
        asset currRoundBetSum_Tie;
        asset currRoundBetSum_Pair;

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
            ROUND_BET = 2,
            ROUND_REVEAL = 4,
            ROUND_END = 0,
            ROUND_SHUFFLE = 6,
            PAUSED = 3, // must be changed under ROUND_END status.
            CLOSED = 5
        };
        EOSLIB_SERIALIZE(table_stats, (validCardVec)(tableId)(tableStatus)(cardBoot)(dealer)(trusteeship)(isPrivate)(dealerBalance)(oneRoundMaxTotalBet_BP)(minPerBet_BP)(oneRoundMaxTotalBet_Tie)(minPerBet_Tie)(oneRoundMaxTotalBet_Pair)(minPerBet_Pair)(oneRoundDealerMaxPay)(minTableDeposit)(amountSymbol)(commission_rate_agent)(commission_rate_player)(upgradingFlag)(redundancy)(redundancy1)(betStartTime)(currRoundBetSum_BP)(currRoundBetSum_Tie)(currRoundBetSum_Pair)(dealerSeedHash)(serverSeedHash)(dealerSeed)(serverSeed)(dSeedVerity)(sSeedVerity)(playerInfo)(roundResult)(playerHands)(bankerHands))
    };

    struct shuffle_round_result
    {
        uint64_t roundNum; // {1,2,3}
        string roundResult;
        std::vector<card_info> playerHands;
        std::vector<card_info> bankerHands;

        EOSLIB_SERIALIZE(shuffle_round_result, (roundNum)(roundResult)(playerHands)(bankerHands))
    };

    TABLE shuffle_info
    {
        uint64_t tableId;
        card_info firstCard;
        std::vector<shuffle_round_result> threeResults;

        uint64_t primary_key() const { return tableId; }

        EOSLIB_SERIALIZE(shuffle_info, (tableId)(firstCard)(threeResults));
    };

    TABLE currency_info
    {
        name code;
        symbol sym;
        asset minPerBet_default;

        uint64_t primary_key() const { return code.value; }

        EOSLIB_SERIALIZE(currency_info, (code)(sym)(minPerBet_default))
    };

    typedef eosio::multi_index<"tablesinfo"_n, gamemallards::table_stats, indexed_by<"dealer"_n, const_mem_fun<gamemallards::table_stats, uint64_t, &gamemallards::table_stats::get_dealer>>> singletable_t;
    typedef eosio::multi_index<"shuffleinfo"_n, gamemallards::shuffle_info> shuffleinfo_t;
    typedef eosio::multi_index<"currencyinfo"_n, gamemallards::currency_info> currencyinfo_t;

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

    asset from_string(string from, symbol sym) // json resolver.
    {
        string s = trim(from);
        auto space_pos = s.find(' ');
        eosio_assert(space_pos != string::npos, "Asset's amount and symbol should be separated with space");
        string symbol_str = trim(s.substr(space_pos + 1));
        eosio_assert(symbol_str == sym.code().to_string(), "Asset's symbol is not match!");
        auto amount_str = s.substr(0, space_pos);
        auto amount = Atof(amount_str.c_str());
        amount *= pow(10, int64_t(sym.precision()));
        return asset((int)amount, sym);
    }

    string trim(string s)
    {
        if (s.empty())
        {
            return s;
        }

        s.erase(0, s.find_first_not_of(" "));
        s.erase(s.find_last_not_of(" ") + 1);
        return s;
    }
    double Atof(const char *pstr)
    {
        double sign = 1.0;
        double num1 = 0.0;
        double num2 = 0.0;
        double point = 0.1;

        while (*pstr == ' ' || *pstr == '\t')
        {
            pstr++;
        }

        if (*pstr == '-')
        {
            sign = -1;
            pstr++;
        }

        while (*pstr)
        {
            if (*pstr == '.')
            {
                pstr++;
                while (*pstr >= '0' && *pstr <= '9')
                {
                    num1 += point * (*pstr - '0');
                    point *= 0.1;
                    pstr++;
                }
            }
            else if (*pstr >= '0' && *pstr <= '9')
            {
                num2 = num2 * 10 + *pstr - '0';
            }
            else
            {
                return (num1 + num2) * (sign);
            }
            pstr++;
        }
        return (num1 + num2) * (sign);
    }

    void reveal(string root_seed, std::vector<uint16_t> & validCardVec, std::vector<card_info> & playerHands, std::vector<card_info> & bankerHands, string & roundResult, int32_t & sum_b_R)
    {
        // unify 64: root_seed_64.
        checksum256 hash = sha256(root_seed.c_str(), root_seed.size());
        auto hash_data = hash.extract_as_byte_array();
        string root_seed_64 = to_hex_w(reinterpret_cast<const char *>(hash_data.data()), 32);
        // Split 6 seeds, parse card info.
        auto sum_p = 0;
        auto sum_b = 0;
        for (auto i = 1;; i++)
        {
            string sub_seed = root_seed_64.substr((i - 1) * 9, 9);
            wbrng.srand(SDBMHash((char *)sub_seed.c_str()));
            uint64_t pos = wbrng.rand() % validCardVec.size();
            uint16_t cardPos = validCardVec[pos]; // value of validCardVec is cardPos(card index).
            uint16_t deck = (cardPos) / 52 + 1;
            uint16_t suitcolor = (cardPos + 1) / 13 % 4;
            uint16_t cardnumber = (cardPos + 1) % 13;
            if (cardnumber == 0)
                cardnumber = 13;
            card_info card;
            card.deck = deck;
            card.cardNum = cardnumber;
            card.cardColor = suitcolor;
            uint64_t point = card.cardNum;
            if (point > 10)
            {
                point = 10;
            }
            eosio::print(" [card : ", deck, " 【", cardnumber, "】 ", suitcolor, "] ");
            // ------------------------------ 博牌 start ------------------------------
            if (i == 1 || i == 3) // 第一次和第三次取牌
            {
                playerHands.emplace_back(card);                 // 插入到闲家手牌集合中
                sum_p = (sum_p + point) % 10;                   // 计算闲家手牌总点数，超过以及等于10，只算个位数
                validCardVec.erase(validCardVec.begin() + pos); // 从牌靴中删除这张牌
            }
            else if (i == 2 || i == 4) // 第二次和第四次取牌
            {
                bankerHands.emplace_back(card);                 // 插入到庄家手牌集合中
                sum_b = (sum_b + point) % 10;                   // 计算庄家手牌总点数，超过以及等于10，只算个位数
                validCardVec.erase(validCardVec.begin() + pos); // 从牌靴中删除这张牌
            }
            else if (i == 5) // 第五次取牌
            {
                eosio::print(" [4-sum_p: ", sum_p, " 4-sum_b:", sum_b, "] ");
                if (sum_p == 8 || sum_p == 9 || sum_b == 8 || sum_b == 9)
                {
                    break; // 例牌，不博牌，共使用四张牌，跳出循环
                }
                else if ((sum_p == 6 && sum_b == 6) || (sum_p == 7 && sum_b == 7))
                {
                    break; // 和牌，不博牌，共使用四张牌，跳出循环
                }
                else if (sum_p < 6) // 当闲家手牌（两张）总点数小于6{0,1,2,3,4,5}时，闲拿第五张牌
                {
                    playerHands.emplace_back(card);                 // 第五张牌插入到闲家手牌集合中
                    sum_p = (sum_p + point) % 10;                   // 计算闲家手牌总点数，超过以及等于10，只算个位数
                    validCardVec.erase(validCardVec.begin() + pos); // 从牌靴中删除这张牌
                }
                else if (sum_b < 6) // 如果闲家未拿到第五张牌，这里讨论庄是否能拿第五张牌：
                {
                    /** 
                     * ①庄两张总点数{0,1,2}，庄拿第五张牌
                     * ②庄两张总点数3，庄拿第五张牌（庄不博牌的情况是基于闲拿第五张，闲未能拿第五张，庄一定可以拿）
                     * ③庄两张总点数4，庄拿第五张牌（庄不博牌的情况是基于闲拿第五张，闲未能拿第五张，庄一定可以拿）
                     * ④庄两张总点数5，庄拿第五张牌（庄不博牌的情况是基于闲拿第五张，闲未能拿第五张，庄一定可以拿）
                     **/
                    bankerHands.emplace_back(card);                 // 第五张牌插入到庄家手牌集合中
                    sum_b = (sum_b + point) % 10;                   // 计算庄家手牌总点数，超过以及等于10，只算个位数
                    validCardVec.erase(validCardVec.begin() + pos); // 从牌靴中删除这张牌
                    break;                                          // 庄拿到第五张牌，共使用五张牌，跳出循环，没有第六次取牌
                }
                else
                { // 其他情况{sum_p = 7, sum_b = 6 或 sum_p = 6, sum_b = 7}，均不博牌，共使用四张牌，跳出循环，没有第六次取牌。
                    break;
                }
            }
            else if (i == 6) // 第六次取牌，闲家拿到第五张牌，现在判断庄家是否要拿第六张牌：
            {
                /** 
                 * ①庄两张总点数{0,1,2}，庄拿第六张牌
                 * ②庄两张总点数3，闲拿第五张且闲三张总点数不为8，庄拿第六张牌
                 * ③庄两张总点数4，闲拿第五张且闲三张总点数不为0,1,8,9，庄拿第六张牌
                 * ④庄两张总点数5，闲拿第五张且闲三张总点数不为0,1,2,3,8,9，庄拿第六张牌
                 * ⑤庄两张总点数6，闲拿第五张且闲三张为6或7，庄拿第六张牌
                 **/
                if (sum_b < 3 || (sum_b == 3 && sum_p != 8) || (sum_b == 4 && sum_p != 0 && sum_p != 1 && sum_p != 8 && sum_p != 9) || (sum_b == 5 && sum_p != 0 && sum_p != 1 && sum_p != 2 && sum_p != 3 && sum_p != 8 && sum_p != 9) || (sum_b == 6 && (sum_p == 6 || sum_p == 7)))
                {
                    bankerHands.emplace_back(card);                 // 第六张牌插入到庄家手牌集合中
                    sum_b = (sum_b + point) % 10;                   // 计算庄家手牌总点数，超过以及等于10，只算个位数
                    validCardVec.erase(validCardVec.begin() + pos); // 从牌靴中删除这张牌
                    break;                                          // 跳出循环，六张牌全部取出，取牌结束
                }
                else
                { // sum_b = 7，庄不博牌，共使用五张牌，跳出循环
                    break;
                }
            }
            // ------------------------------ 博牌 end ------------------------------
        }
        sum_b_R = sum_b;
        eosio::print(" [final-sum_p: ", sum_p, " final-sum_b:", sum_b, "] ");
        //round result
        roundResult = "00000"; //Banker,Player,Tie,BankerPair,PlayerPair
        if (sum_p < sum_b)     //Banker
            roundResult[0] = '1';
        else if (sum_p > sum_b) //Player
            roundResult[1] = '1';
        else if (sum_p == sum_b) //Tie
            roundResult[2] = '1';
        if (bankerHands[0].cardNum == bankerHands[1].cardNum) //BankerPair
            roundResult[3] = '1';
        if (playerHands[0].cardNum == playerHands[1].cardNum) //PlayerPair
            roundResult[4] = '1';
    }

    void shuffleFun(uint64_t tableId, std::vector<uint16_t> & cardVec_temp)
    {
        cardVec_temp.clear();
        for (auto i = 0; i < initDecks * 52; i++)
        {
            cardVec_temp.emplace_back(i);
        }
        // use timestamp as seed
        string toDelPosSeed = to_string(now());
        eosio::print(" [toDelPosSeed: ", toDelPosSeed, "] ");

        checksum256 hash = sha256(toDelPosSeed.c_str(), toDelPosSeed.size());
        auto hash_data = hash.extract_as_byte_array();
        string root_seed_64 = to_hex_w(reinterpret_cast<const char *>(hash_data.data()), 32);
        std::vector<uint16_t> toDelCardPosVec;
        wbrng.srand(SDBMHash((char *)root_seed_64.c_str()));
        uint64_t pos = wbrng.rand() % cardVec_temp.size();
        uint16_t cardPos = cardVec_temp[pos]; // first time, pos == cardPos.
        toDelCardPosVec.emplace_back(cardPos);
        cardVec_temp.erase(cardVec_temp.begin() + pos);
        uint16_t cardnumber = (cardPos + 1) % 13;
        if (cardnumber == 0)
            cardnumber = 13;

        card_info firstCard_temp;
        firstCard_temp.deck = (cardPos) / 52 + 1;
        firstCard_temp.cardColor = (cardPos + 1) / 13 % 4;
        firstCard_temp.cardNum = cardnumber;
        eosio::print(" [firstCard.deck:", firstCard_temp.deck, "【", firstCard_temp.cardNum, "】", firstCard_temp.cardColor, "] ");

        auto delNum = firstCard_temp.cardNum;
        if (delNum == 11 || delNum == 12 || delNum == 13)
            delNum = 10;
        auto count = 0;
        while (count < delNum)
        {
            string sub_seed = root_seed_64.substr(count * 6, 6);
            wbrng.srand(SDBMHash((char *)sub_seed.c_str()));
            pos = wbrng.rand() % cardVec_temp.size();
            cardPos = cardVec_temp[pos];
            toDelCardPosVec.emplace_back(cardPos);
            eosio::print(" PosValueToBeDeleted:【", cardPos, "】 ");
            cardVec_temp.erase(cardVec_temp.begin() + pos);
            count++;
        }

        // 3 times init result. (can't bet)
        std::vector<shuffle_round_result> threeResults_temp;
        for (auto k = 0; k < 3; k++)
        {
            int32_t sum_b_R = 0;
            string roundResult;
            std::vector<card_info> bankerHands;
            std::vector<card_info> playerHands;
            reveal(to_string(now()), cardVec_temp, playerHands, bankerHands, roundResult, sum_b_R);
            shuffle_round_result temp;
            temp.roundNum = k + 1;
            temp.roundResult = roundResult;
            temp.playerHands = playerHands;
            temp.bankerHands = bankerHands;
            threeResults_temp.emplace_back(temp);
        }
        auto itr_shuffle = tableshuffle.find(tableId);
        if (itr_shuffle != tableshuffle.end())
        {
            eosio::print(" [ modify shuffle info (tableid=", tableId, ")] ");
            tableshuffle.modify(itr_shuffle, _self, [&](auto &s) {
                s.firstCard = firstCard_temp;
                s.threeResults = threeResults_temp;
            });
        }
        else
        {
            eosio::print(" [ add shuffle info (tableid=", tableId, ")] ");
            tableshuffle.emplace(_self, [&](auto &s) {
                s.tableId = tableId;
                s.firstCard = firstCard_temp;
                s.threeResults = threeResults_temp;
            });
        }
        eosio::print(" 【cards left : ", cardVec_temp.size(), "】 ");
    }

    singletable_t tableround;
    shuffleinfo_t tableshuffle;
    currencyinfo_t tablecurrency;
    WBRNG wbrng;

    name serveraccount = "useraaaaaaah"_n;
    name platformaccount = "useraaaaaaae"_n;

    const uint16_t CardsMinLimit = 100;
    const uint32_t betPeriod = 32; //todo default 30 ,60 is test use
    const uint16_t initDecks = 8;  //todo default 8 ,2 is test use
    const uint32_t minTableRounds = 10;
    const uint16_t maxinum_table_per_dealer = 100;
    const uint64_t delall_key = 103718369455;
    const string invaild_seed_flag = "623";
    const string salt = "w3H5OthR6PVYQnKL";
    const char *notableerr = "TableId isn't existing!";
    extended_symbol defaultSym = extended_symbol(symbol(symbol_code("SYS"), 4), "eosio.token"_n);

    double comission_rate_platform_default = 0.005;
};
