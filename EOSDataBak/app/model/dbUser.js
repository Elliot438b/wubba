/**
 * Created by ujInfo on 2019/4/19.
 */

function DBUser(){

    this.eosaccount = '';           //varchar(15) not null,
    this.nickname  = '';            //varchar(20),
    this.logo = '';                 //varchar(255),
    this.pubkey = '';               //varchar(64),
    this.eos_balance  = '';         //varchar(64),
    this.gcc_balance = '';          //varchar(64),
    this.user_type = 0;             //int //comment '0：普通    1：Agent',
    this.createtime = '';           //varchar(32),
    this.online = 0;                //int,
    this.lasttime  = '';            //varchar(20),
    this.lastip  = '';              //varchar(32),
    this.code   = '';               //varchar(20),
    
    this.colTables = [];            //收藏的桌

    this.curAgent='';               //玩家当前情况下，对应的agent

    this.roomid = '';   
    this.roomname = '';   
    this.roomcode = '';   
    this.roomcreatetime = '';   

}

module.exports = DBUser;