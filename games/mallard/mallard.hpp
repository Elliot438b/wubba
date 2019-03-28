#pragma once

#include <eosiolib/transaction.hpp>
#include <eosiolib/permission.hpp>
#include <eosiolib/crypto.hpp>
#include "../../chain/eosio.token.hpp"
#include <cstdlib>
#include <cmath>

using namespace eosio;
using namespace std;
using std::string;

CONTRACT mallard : public contract
{
  public:
    using contract::contract;

    mallard(name receiver, name code, datastream<const char *> ds)
        : contract(receiver, code, ds), tableround(receiver, receiver.value), shuffleinfo(receiver, receiver.value), tablealias(receiver, receiver.value) {}

    ACTION newtable(name dealer, asset deposit, bool isPrivate, name code, string sym, string commission_rate_agent, string commission_rate_player, asset oneRoundMaxTotalBet_BP, asset minPerBet_BP, asset oneRoundMaxTotalBet_Tie, asset minPerBet_Tie, asset oneRoundMaxTotalBet_Push, asset minPerBet_Push);
    ACTION dealerseed(uint64_t tableId, checksum256 encodeSeed);
    ACTION serverseed(uint64_t tableId, checksum256 encodeSeed);
    ACTION playerbet(uint64_t tableId, name player, asset betDealer, asset betPlayer, asset betTie, asset betDealerPush, asset betPlayerPush, string agentalias, string nickname);
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
    ACTION shuffle(uint64_t tableId);
    ACTION edittable(uint64_t tableId, bool isPrivate, name code, string sym, string commission_rate_agent, string commission_rate_player, asset oneRoundMaxTotalBet_bp, asset minPerBet_bp, asset oneRoundMaxTotalBet_tie, asset minPerBet_tie, asset oneRoundMaxTotalBet_push, asset minPerBet_push);
    ACTION pushaliasnam(string alias, name account);

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
        string agent;
        string nickname;

        EOSLIB_SERIALIZE(player_bet_info, (player)(betDealer)(betPlayer)(betTie)(betDealerPush)(betPlayerPush)(pBonus)(dBonus)(agent)(nickname))
    };

    TABLE table_stats
    {
        // ------------------------------ table field ------------------------------
        std::vector<uint16_t> validCardVec; // newtable init & new round check.
        uint64_t tableId;                   // table fix.
        uint64_t cardBoot;
        name dealer;         // table owner.
        bool trusteeship;    // table flag.
        bool isPrivate;      // table flag.
        asset dealerBalance; // table field.
        asset oneRoundMaxTotalBet_BP;
        asset minPerBet_BP;
        asset oneRoundMaxTotalBet_Tie;
        asset minPerBet_Tie;
        asset oneRoundMaxTotalBet_Push;
        asset minPerBet_Push;

        asset oneRoundDealerMaxPay;
        asset minTableDeposit;
        extended_symbol amountSymbol;
        float commission_rate_agent;
        float commission_rate_player;

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
            ROUND_SHUFFLE = 6,
            PAUSED = 3, // must be changed under ROUND_END status.
            CLOSED = 5
        };
        EOSLIB_SERIALIZE(table_stats, (validCardVec)(tableId)(cardBoot)(dealer)(trusteeship)(isPrivate)(dealerBalance)(oneRoundMaxTotalBet_BP)(minPerBet_BP)(oneRoundMaxTotalBet_Tie)(minPerBet_Tie)(oneRoundMaxTotalBet_Push)(minPerBet_Push)(oneRoundDealerMaxPay)(minTableDeposit)(amountSymbol)(commission_rate_agent)(commission_rate_player)(betStartTime)(tableStatus)(currRoundBetSum_BP)(currRoundBetSum_Tie)(currRoundBetSum_Push)(dealerSeedHash)(serverSeedHash)(dealerSeed)(serverSeed)(dSeedVerity)(sSeedVerity)(playerInfo)(roundResult)(playerHands)(bankerHands))
    };

    struct shuffle_round_result
    {
        uint64_t roundNum;
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

    TABLE alias_info
    {
        uint32_t aliasId;
        name account;

        uint64_t primary_key() const { return aliasId; }

        EOSLIB_SERIALIZE(alias_info, (aliasId)(account))
    };

    typedef eosio::multi_index<"tablesinfo"_n, mallard::table_stats, indexed_by<"dealer"_n, const_mem_fun<mallard::table_stats, uint64_t, &mallard::table_stats::get_dealer>>> singletable_t;
    typedef eosio::multi_index<"shuffleinfo"_n, mallard::shuffle_info> shuffleinfo_t;
    typedef eosio::multi_index<"aliasinfo"_n, mallard::alias_info> aliasinfos;

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
    using shuffle_action = action_wrapper<"shuffle"_n, &mallard::shuffle>;
    using edittable_action = action_wrapper<"edittable"_n, &mallard::edittable>;
    using pushaliasnam_action = action_wrapper<"pushaliasnam"_n, &mallard::pushaliasnam>;

    shuffleinfo_t shuffleinfo;

    struct sym_info
    {
        uint16_t id;
        name code;
        symbol symName;
        asset minPerBet_default;

        EOSLIB_SERIALIZE(sym_info, (id)(code)(symName)(minPerBet_default))
    };

    static std::vector<sym_info> createSymOptions()
    {
        std::vector<sym_info> tempSym;

        sym_info sym_temp;
        sym_temp.id = 0;
        sym_temp.code = "eosio.token"_n;
        sym_temp.symName = symbol(symbol_code("SYS"), 4);
        sym_temp.minPerBet_default = asset(1000, sym_temp.symName);
        tempSym.emplace_back(sym_temp);

        sym_temp.id = 1;
        sym_temp.code = "useraaaaaaaj"_n;
        sym_temp.symName = symbol(symbol_code("TES"), 4);
        sym_temp.minPerBet_default = asset(1000, sym_temp.symName);
        tempSym.emplace_back(sym_temp);

        return tempSym;
    }

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

    void reveal(string root_seed, std::vector<uint16_t> validCardVec, std::vector<card_info> & playerHands, std::vector<card_info> & bankerHands, string & roundResult, std::vector<uint16_t> & validCardTemp)
    {
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
            uint64_t pos = wbrng.rand() % validCardVec.size();
            uint16_t cardPos = validCardVec[pos]; // value of validCardVec is cardPos(card index).
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
        //std::vector<card_info> playerHands;
        playerHands.emplace_back(cardInfo[0]);
        playerHands.emplace_back(cardInfo[2]);
        auto sum_p = (cardInfo[0].cardNum + cardInfo[2].cardNum) % 10;

        //    std::vector<card_info> bankerHands;
        bankerHands.emplace_back(cardInfo[1]);
        bankerHands.emplace_back(cardInfo[3]);
        auto sum_b = (cardInfo[1].cardNum + cardInfo[3].cardNum) % 10;
        // 5th/6th card obtain rules.
        bool fifthCard_flag = false;
        bool sixthCard_flag = false;
        // all non-obtain rules
        if (sum_p == 8 || sum_p == 9 || sum_b == 8 || sum_b == 9)
        {
            eosio::print("4 cards end, don't need extra card obtain!");
        }
        else if ((sum_p == 6 || sum_p == 7) && (sum_b == 6 || sum_b == 7))
        {
            eosio::print("4 cards end, don't need extra card obtain!");
        }
        // all obtain rules.
        else
        {
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
            if (!sixthCard_flag &&
                (sum_b < 3 || (sum_b == 3 && !(sum_p == 8 && fifthCard_flag)) || (sum_b == 4 && !((sum_p == 1 || sum_p == 8 || sum_p == 9 || sum_p == 0) && fifthCard_flag)) || (sum_b == 5 && !((sum_p == 1 || sum_p == 2 || sum_p == 3 || sum_p == 8 || sum_p == 9 || sum_p == 0) && fifthCard_flag))))
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
        }
        //round result
        roundResult = "00000"; //Banker,Player,Tie,BankerPush,PlayerPush
        if (sum_p < sum_b)     //Banker
            roundResult[0] = '1';
        else if (sum_p > sum_b) //Player
            roundResult[1] = '1';
        else if (sum_p == sum_b) //Tie
            roundResult[2] = '1';
        if (bankerHands[0].cardNum == bankerHands[1].cardNum) //BankerPush
            roundResult[3] = '1';
        if (playerHands[0].cardNum == playerHands[1].cardNum) //PlayerPush
            roundResult[4] = '1';
        eosio::print(" round_result: ", roundResult, " ");

        // delete cards used.
        if (!fifthCard_flag && !sixthCard_flag)
        {
            sixPosVec.erase(sixPosVec.begin() + 4);
            sixPosVec.erase(sixPosVec.begin() + 4);
        }
        else if (!sixthCard_flag)
        {
            sixPosVec.erase(sixPosVec.begin() + 5);
        }

        validCardTemp = validCardVec;
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
    }

    void shuffleFun(uint64_t tableId, std::vector<uint16_t> & cardVec_temp)
    {
        cardVec_temp.clear();
        for (auto i = 0; i < initDecks * 52; i++)
        {
            cardVec_temp.emplace_back(i);
        }

        string toDelPosSeed = to_string(now());
        checksum256 hash = sha256(toDelPosSeed.c_str(), toDelPosSeed.size());
        auto hash_data = hash.extract_as_byte_array();
        string root_seed_64 = to_hex_w(reinterpret_cast<const char *>(hash_data.data()), 32);
        eosio::print(" toDelPosSeed : ", root_seed_64, " ");

        std::vector<uint16_t> toDelCardPosVec;
        // string firstCardSeed = root_seed_64.substr(2, 9);
        wbrng.srand(SDBMHash((char *)root_seed_64.c_str()));
        uint64_t pos = wbrng.rand() % cardVec_temp.size();
        uint16_t cardPos = cardVec_temp[pos];
        eosio::print(" firstPos : ", cardPos, " pos:", pos, " ");
        toDelCardPosVec.emplace_back(cardPos);
        uint16_t cardnumber = (cardPos + 1) % 13;
        if (cardnumber == 0)
            cardnumber = 13;

        card_info firstCard_temp;
        firstCard_temp.deck = (cardPos) / 52 + 1;
        firstCard_temp.cardColor = (cardPos + 1) / 13 % 4;
        firstCard_temp.cardNum = cardnumber;
        eosio::print("firstCard.deck:", firstCard_temp.deck, " firstCard.cardNum : ", firstCard_temp.cardNum, " firstCard.cardColor:", firstCard_temp.cardColor, " ");

        auto delNum = firstCard_temp.cardNum;
        if (delNum == 11 || delNum == 12 || delNum == 13)
            delNum = 10;
        auto count = 0;
        while (count < delNum)
        {
            string sub_seed = root_seed_64.substr(count * 6, 6);
            wbrng.srand(SDBMHash((char *)sub_seed.c_str()));
            uint64_t pos = wbrng.rand() % cardVec_temp.size();
            uint16_t cardPos = cardVec_temp[pos];
            auto ii = 0;
            while(std::find(toDelCardPosVec.begin(), toDelCardPosVec.end(), cardPos){
                wbrng.srand(SDBMHash((char *)sub_seed.c_str()) + ii);
                uint64_t pos = wbrng.rand() % cardVec_temp.size();
                cardPos = cardVec_temp[pos];
                ii++;
            }
            toDelCardPosVec.emplace_back(cardPos);
            eosio::print(" [New cardPos to be deleted:", cardPos, "] ");
            count++;
        }

        for (auto i : toDelCardPosVec)
        {
            for (auto itr = cardVec_temp.begin(); itr != cardVec_temp.end(); itr++)
            {
                if (*itr == i)
                {
                    itr = cardVec_temp.erase(itr);
                    eosio::print(" 【erase ", i);
                }
                if (itr == cardVec_temp.end())
                {
                    break;
                }
            }
            eosio::print(" tem.size ", cardVec_temp.size(), "】");
        }

        bool tableid_exist_falg = false;
        auto itr_shuffle = shuffleinfo.find(tableId);
        if (itr_shuffle != shuffleinfo.end())
        {
            tableid_exist_falg = true;
        }

        count = 1;
        std::vector<shuffle_round_result> threeResults_temp;
        while (count <= 3)
        {
            string roundResult;
            std::vector<card_info> bankerHands;
            std::vector<card_info> playerHands;
            std::vector<uint16_t> validCardTemp;

            reveal(to_string(now()), cardVec_temp, playerHands, bankerHands, roundResult, validCardTemp);
            cardVec_temp = validCardTemp;

            shuffle_round_result temp;
            temp.roundNum = count;
            temp.roundResult = roundResult;
            temp.playerHands = playerHands;
            temp.bankerHands = bankerHands;
            threeResults_temp.emplace_back(temp);

            count++;
        }

        if (!tableid_exist_falg)
        {
            eosio::print(" [ add shuffle info (tableid=", tableId, ")] ");
            shuffleinfo.emplace(_self, [&](auto &s) {
                s.tableId = tableId;
                s.firstCard = firstCard_temp;
                s.threeResults = threeResults_temp;
            });
        }
        else
        {
            eosio::print(" [ modify shuffle info (tableid=", tableId, ")] ");
            shuffleinfo.modify(itr_shuffle, _self, [&](auto &s) {
                s.firstCard = firstCard_temp;
                s.threeResults = threeResults_temp;
            });
        }
    }

    double Round(double dSrc, int iBit)
    {
        double retVal = 0.0;
        int intTmp = 0;

        // 若保留小数位数不正确
        if (0 > iBit)
        {
            return 0;
        }

        //  若 为负数
        if (0 > dSrc)
        {
            // 首先转为正数
            dSrc *= -1;

            intTmp = (int)((dSrc + 0.5 / pow(10.0, iBit)) * pow(10.0, iBit));
            retVal = (double)intTmp / pow(10.0, iBit);

            // 再转为 负数
            retVal *= -1;
        }
        // 若为非负数
        else
        {
            intTmp = (int)((dSrc + 0.5 / pow(10.0, iBit)) * pow(10.0, iBit));
            retVal = (double)intTmp / pow(10.0, iBit);
        }

        return retVal;
    }

    static const std::vector<sym_info> symOptions;
    singletable_t tableround;
    aliasinfos tablealias;
    //shuffleinfo_t shuffleinfo;
    WBRNG wbrng;

    name serveraccount = "useraaaaaaah"_n;
    name platfrmacnt = "useraaaaaaah"_n; // platform commission account.
    name platformaccount = "useraaaaaaae"_n;

    const uint16_t CardsMinLimit = 100;
    const uint32_t betPeriod = 30;
    const uint16_t initDecks = 2; //todo default 8 ,2 is test use
    const uint32_t minTableRounds = 10;
    const char *notableerr = "TableId isn't existing!";
    extended_symbol defaultSym = extended_symbol(symbol(symbol_code("SYS"), 4), "eosio.token"_n);

    float comission_rate_platform_default = 0.005;
};
const std::vector<mallard::sym_info> mallard::symOptions = mallard::createSymOptions();