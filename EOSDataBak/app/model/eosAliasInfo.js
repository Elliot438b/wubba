     
function EOSAliasInfo(){
    this.id= 0;             //INT(11) NOT NULL AUTO_INCREMENT,
	this.aliasId= '';      //varchar(16) NOT NULL COMMENT '别名对应ID',
    this.account= '';       //varchar(16) NOT NULL COMMENT '别名对应EOS账户',
    this.create_time= '';     //datetime DEFAULT NULL COMMENT '创建时间',
}

module.exports = EOSAliasInfo;