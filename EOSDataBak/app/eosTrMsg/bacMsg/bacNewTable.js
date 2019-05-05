
const baseTr = require('../../../libs/EOS/baseTr');

var Global= require('../../../libs/global/global.js');

const newTableDS={
    dealer:'', //桌创建者，庄
    deposit:'',//庄创建桌时，抵押的资产，用于桌运转的消耗
    isPrivate:false,  //标志位，当该字段为true时，前端table list中不显示该桌
    code:'', //币的发布者
    sym:'',  //币种
    commission_rate_agent:'',  //agent的反佣比例
    commission_rate_player:'', //player的反佣比例
    oneRoundMaxTotalBet_BP:'', //庄闲下注位置的一轮最高的总下注额
    minPerBet_BP:'',  //庄闲下注位置的一轮中每次最小下注额
    oneRoundMaxTotalBet_Tie:'',  //和下注位置的一轮最高的总下注额
    minPerBet_Tie:'',   //和下注位置的一轮中每次最小下注额
    oneRoundMaxTotalBet_Push:'',  //庄闲对子下注位置的一轮最高的总下注额
    minPerBet_Push:''  //庄闲对子下注位置的一轮中每次最小下注额
};

// baseAc.account=Global.bacGameName;    //合约名
// baseAc.name='newtable';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=newTableDS;

// baseTr.actions.push(baseAc);

const bacNewTable=new baseTr();

module.exports = {bacNewTable,newTableDS}