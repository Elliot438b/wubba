#include <iostream>
#include <fstream>
#include <cstdlib>
#include <stdint.h>
#include <cmath>
#include <vector>
#include <string>
#include <openssl/sha.h>
using namespace std;


struct card_info
{
    uint8_t deck;
    uint8_t cardNum;
    uint8_t cardColor;
};

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

string to_hex_w(const char *d, uint32_t s)
{
    std::string r;
    const char *to_hex = "0123456789abcdef";
    uint8_t *c = (uint8_t *)d;
    for (uint32_t i = 0; i < s; ++i)
        (r += to_hex[(c[i] >> 4)]) += to_hex[(c[i] & 0x0f)];
    return r;
}

string sha256(const string str)
{
	char buf[2];
    unsigned char hash[SHA256_DIGEST_LENGTH];
    SHA256_CTX sha256;
    int ret = SHA256_Init(&sha256);
    SHA256_Update(&sha256, str.c_str(), str.size());
    SHA256_Final(hash, &sha256);
    std::string NewString = "";
    for(int i = 0; i < SHA256_DIGEST_LENGTH; i++)
    {
        sprintf(buf,"%02x",hash[i]);
        NewString = NewString + buf;
    }
	return NewString;
}

void reveal(string root_seed, std::vector<uint16_t> &validCardVec, std::vector<card_info> &playerHands, std::vector<card_info> &bankerHands, string &roundResult, int32_t &sum_b_R)
{
   // checksum256 hash = sha256(root_seed.c_str(), root_seed.size());
    //auto hash_data = hash.extract_as_byte_array(); 
    //string root_seed_64 = to_hex_w(reinterpret_cast<const char *>(hash_data.data()), 32);
    string root_seed_64 = sha256(root_seed.c_str());
    // Split 6 seeds, parse card info.
    auto sum_p = 0;
    auto sum_b = 0;
    for (auto i = 1;; i++)
    {
        WBRNG wbrng;
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

void shuffleFun(std::vector<uint16_t> &cardVec_temp)
{
    cardVec_temp.clear();
    for (auto i = 0; i < 8 * 52; i++)
    {
        cardVec_temp.emplace_back(i);
    }
}

void readseed(string filename, std::vector<string> & seedVec)
{
    ifstream in(filename.c_str());
	string line;
 
	if(in) // 有该文件
	{
		while (getline(in, line)) // line中不包括每行的换行符
		{ 
            int len = line.size();
            string data = line.substr(0,len-1);
			seedVec.push_back(data);
            //seedVec.push_back(line);
		}
	}
	else // 没有该文件
	{
		cout <<"no such file" << endl;
	}
 
	return;
}

int main()
{
    cout << "start.........";
    string roundResult;
    const uint16_t CardsMinLimit = 100;
    const uint16_t initDecks = 8; //todo default 8 ,2 is test use
    const string salt = "w3H5OthR6PVYQnKL";
    std::vector<uint16_t> validCardVec;
    //roundResult结果统计。
    uint16_t bankerWin = 0;
    uint16_t playerWin = 0;
    uint16_t tieWin = 0;
    uint16_t Bpair = 0; 
    uint16_t Ppair = 0;

    shuffleFun(validCardVec); //初始洗牌

    std::vector<string> dealerseed;
    std::vector<string> serverseed; 
    readseed("dealerseed.txt", dealerseed); //读入一个dealer种子
    readseed("serverseed.txt", serverseed); //读入对应的一个server种子

    cout << "serverseed size is = "<< serverseed.size();    
    for (int i = 0;i < serverseed.size(); i++)         //遍历dealer种子文件，按行数匹配dealer和server种子。
    {
        string root_seed = serverseed[i] + salt + dealerseed[i];
        int32_t sum_b_R = 0;
        std::vector<card_info> bankerHands;
        std::vector<card_info> playerHands;
        reveal(root_seed, validCardVec, playerHands, bankerHands, roundResult, sum_b_R);
        //roundResult结果统计。
        if(0 == roundResult.compare("10000"))
        {
            bankerWin++;
        }
        else if(0 == roundResult.compare("10001"))
        {
            bankerWin++;
            Ppair++;
        }
        else if(0 == roundResult.compare("10010"))
        {
            bankerWin++;
            Bpair++;
        }
        else if(0 == roundResult.compare("10011"))
        {
            bankerWin++;
            Ppair++;
            Bpair++;
        }
        else if(0 == roundResult.compare("01000"))
        {
            playerWin++;
        }
        else if(0 == roundResult.compare("01010"))
        {
            playerWin++;
            Bpair++;
        }
        else if(0 == roundResult.compare("01001"))
        {
            playerWin++;
            Ppair++;
        }
        else if(0 == roundResult.compare("01011"))
        {
            playerWin++;
            Bpair++;
            Ppair++;
        }
        else if(0 == roundResult.compare("00100"))
        {
            tieWin++;
        }
        else if(0 == roundResult.compare("00110"))
        {
            tieWin++;
            Bpair++;
        }
        else if(0 == roundResult.compare("00101"))
        {
            tieWin++;
            Ppair++;
        }
        else if(0 == roundResult.compare("00111"))
        {
            tieWin++;
            Bpair++;
            Ppair++;
        }
        else
        {
            cout << "error result:" << i;
        }

        //bankerWin++
        //playerWin++
        //tieWin++
        //Bpair++
        //Ppair++
        if (validCardVec.size() <= CardsMinLimit)
        {
            shuffleFun(validCardVec);
        }
    }

    cout << "result is:\n";
    cout << "bankerWin=" << bankerWin << "\n";
    cout << "playerWin=" << playerWin << "\n" ;
    cout << "tieWin=" << tieWin << "\n";
    cout << "Bpair=" << Bpair << "\n";
    cout << "Ppair=" << Ppair << "\n";

    system("pause");
    return 0;
}