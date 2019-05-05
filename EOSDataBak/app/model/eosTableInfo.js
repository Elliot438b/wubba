/**
 * Created by ujInfo on 2019/4/17.
 */

 function EOSTableInfo(){
        this.id= 0;                         // INT(11) NOT NULL AUTO_INCREMENT,
        this.tableId= 0;                    // INT(11) NOT NULL COMMENT '桌ID',
        this.cardBoot= 0;                   // INT(11) NOT NULL COMMENT '靴牌次数',
        this.dealer = '';                   // varchar(16) DEFAULT NULL COMMENT '桌的拥有者，即庄',
        this.trusteeship= 0;                // INT(1) NOT NULL COMMENT '是否托管',
        this.isclose= 0;                    // INT(1) NOT NULL COMMENT '是否关闭',
        this.ispause= 0;                    // INT(1) NOT NULL COMMENT '是否暂停',
        this.deposit ='';                   //押金
        this.isPrivate= 0;                  // INT(1) NOT NULL COMMENT '是否隐私',
        this.dealerBalance = '';            // varchar(32) DEFAULT NULL COMMENT '庄余额',
        this.oneRoundMaxTotalBet_BP = '';   // varchar(32) DEFAULT NULL COMMENT '庄闲下注位置的一轮最高的总下注额',
        this.minPerBet_BP = '';             // varchar(32) DEFAULT NULL COMMENT '和下注位置的一轮最高的总下注额',
        this.oneRoundMaxTotalBet_Tie = '';  // varchar(32) DEFAULT NULL COMMENT '庄闲对子下注位置的一轮最高的总下注额',
        this.minPerBet_Tie = '';            // varchar(32) DEFAULT NULL COMMENT '和下注位置的一轮中每次最小下注额',
        this.oneRoundMaxTotalBet_Push = ''; // varchar(32) DEFAULT NULL COMMENT '庄闲对子下注位置的一轮最高的总下注额',
        this.minPerBet_Push = '';           // varchar(32) DEFAULT NULL COMMENT '庄闲对子下注位置的一轮中每次最小下注额',
        this.oneRoundDealerMaxPay = '';     // varchar(32) DEFAULT NULL COMMENT '根据庄设置的桌下注限制计算出的每轮庄最大的赔付额',
        this.minTableDeposit = '';          // varchar(32) DEFAULT NULL COMMENT '根据庄设置的桌下注限制计算的开桌最小抵押额',
        this.amountSymbol = '';             // varchar(32) DEFAULT NULL COMMENT '币种',
        this.commission_rate_agent = '';    // varchar(32) DEFAULT NULL COMMENT '代理人的反佣比例',
        this.commission_rate_player = '';   // varchar(32) DEFAULT NULL COMMENT '玩家的反佣比例',
        this.betStartTime= 0;               // INT(11) DEFAULT NULL COMMENT '下注开始时间，用于计算下注阶段的计时',
        this.tableStatus= 0;                // INT(2) DEFAULT NULL COMMENT '桌状态，共有6种。0：轮次结束；1：轮次开始；2：下注阶段；3：桌暂停；4：开奖阶段；5：桌已关闭',
        this.currRoundBetSum_BP = '';       // varchar(32) DEFAULT NULL COMMENT '当前轮次累计的庄闲下注总额',
        this.currRoundBetSum_Tie = '';      // varchar(32) DEFAULT NULL COMMENT '当前轮次累计的和下注总额',
        this.currRoundBetSum_Push = '';     // varchar(32) DEFAULT NULL COMMENT '当前轮次累计的庄闲对下注总额',
        this.dealerSeedHash = '';           // varchar(128) DEFAULT NULL COMMENT '庄哈希种子',
        this.serverSeedHash = '';           // varchar(128) DEFAULT NULL COMMENT 'server哈希种子',
        this.dealerSeed = '';               // varchar(128) DEFAULT NULL COMMENT '庄明文种子',
        this.serverSeed = '';               // varchar(128) DEFAULT NULL COMMENT 'server明文种子',
        this.dSeedVerity= 0;                // INT(1) DEFAULT NULL COMMENT '庄种子校验是否通过',
        this.sSeedVerity= 0;                // INT(1) DEFAULT NULL COMMENT 'server种子校验是否通过',
        this.playerInfo = '';               // varchar(5000) DEFAULT NULL COMMENT '玩家下注信息的集合',
        this.roundResult = '';              // varchar(128) DEFAULT NULL COMMENT '当轮开奖结果。值的结构为"00000"，对应的顺序为：Banker, Player, Tie, BankerPush, PlayerPush',
        this.playerHands = '';              // varchar(128) DEFAULT NULL COMMENT '轮次结果对应的玩家手牌，最多3张，最少2张，根据博牌规则最终确定',
        this.bankerHands = '';              // varchar(128) DEFAULT NULL COMMENT '轮次结果对应的庄家手牌，最多3张，最少2张，根据博牌规则最终确定',
        this.validCardVec = '';             // varchar(5000) DEFAULT NULL COMMENT '有效牌数组，即除去每轮消耗的牌剩余的牌堆',
        this.create_time = '';              // datetime DEFAULT NULL COMMENT '创建时间',
 }

 module.exports = EOSTableInfo;