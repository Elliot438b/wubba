function EOSShuffleInfo(){

    this.id= 0;                     // INT(11) NOT NULL AUTO_INCREMENT,
	this.tableIdid= 0;              // INT(11) NOT NULL COMMENT '桌信息',
    this.firstcardid= '';           // varchar(8) DEFAULT NULL COMMENT '洗牌接口种，获取的第一张牌对应信息',
    this.threeResultsid= '';        // varchar(128) DEFAULT NULL COMMENT '空轮的三次牌信息',
    this.create_time= '';           // datetime DEFAULT NULL COMMENT '创建时间',
       
}

module.exports = EOSShuffleInfo;