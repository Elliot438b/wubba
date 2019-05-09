DROP TABLE IF EXISTS T_TABLE_BAC_BAK;

CREATE TABLE T_TABLE_BAC_BAK
(
   id                   	INT(11) NOT NULL AUTO_INCREMENT,
   validCardVec  			VARCHAR(512) COMMENT '有效牌数组，即除去每轮消耗的牌剩余的牌堆',
   tableId 				INT(11)  COMMENT '桌主键',
   cardBoot 				VARCHAR(64) COMMENT '靴牌次数',
   dealer 					VARCHAR(64) COMMENT '桌的拥有者，即庄',
   trusteeship				VARCHAR(2) COMMENT '是否托管',
   isPrivate 				VARCHAR(2) COMMENT '是否隐私',
   dealerBalance 			VARCHAR(32) COMMENT '庄余额',
   oneRoundMaxTotalBet_BP 	VARCHAR(64) COMMENT '庄闲下注位置的一轮最高的总下注额',
   oneRoundMaxTotalBet_Tie VARCHAR(64) COMMENT '和下注位置的一轮最高的总下注额',
   oneRoundMaxTotalBet_Push VARCHAR(64) COMMENT '庄闲对子下注位置的一轮最高的总下注额',
   minPerBet_BP 			VARCHAR(64) COMMENT '庄闲下注位置的一轮中每次最小下注额',
   minPerBet_Tie 			VARCHAR(64) COMMENT '和下注位置的一轮中每次最小下注额',
   minPerBet_Push 			VARCHAR(64) COMMENT '庄闲对子下注位置的一轮中每次最小下注额',
   oneRoundDealerMaxPay 	VARCHAR(64) COMMENT '根据庄设置的桌下注限制计算出的每轮庄最大的赔付额',
   minTableDeposit 			VARCHAR(64) COMMENT '根据庄设置的桌下注限制计算的开桌最小抵押额',
   amountSymbol 			VARCHAR(64) COMMENT '币种',
   commission_rate_agent 	VARCHAR(32) COMMENT '代理人的反佣比例',
   commission_rate_player 	VARCHAR(32) COMMENT '玩家的反佣比例',
   tableStatus 				VARCHAR(8) COMMENT '桌状态，共有6种。0：轮次结束；1：轮次开始；2：下注阶段；3：桌暂停；4：开奖阶段；5：桌已关闭',
   createtime           	VARCHAR(32),
   upgradingFlag           	INT  COMMENT '缺省为0(从EOS上获取到本地),1(从本地备份回EOS)',
   PRIMARY KEY (id)
);