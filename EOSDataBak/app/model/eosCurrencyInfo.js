function EOSCurrencyInfo(){

    this.id= 0;                     // INT(11) NOT NULL AUTO_INCREMENT,
	this.roundNum= '';              // varchar(128) DEFAULT NULL COMMENT '第几轮，取值为{1,2,3}',
    this.roundResult= '';           // varchar(8) DEFAULT NULL COMMENT '这一轮的结果信息。值的结构为"00000"，对应的顺序为：Banker, Player, Tie, BankerPush, PlayerPush',
    this.playerHands= '';           // varchar(128) DEFAULT NULL COMMENT '轮次结果对应的玩家手牌，最多3张，最少2张，根据博牌规则最终确定',
	this.bankerHands= '';           // varchar(128) DEFAULT NULL COMMENT '轮次结果对应的庄家手牌，最多3张，最少2张，根据博牌规则最终确定',
    this.create_time= '';           // datetime DEFAULT NULL COMMENT '创建时间',
       
}

module.exports = EOSCurrencyInfo;