const baseAc = require('../baseAction.js');
const baseTr = require('../../../libs/EOS/baseTr');
const baseAuthor = require('../baseAuthor.js');
var Global= require('../../../libs/global/global.js');

const newTableDS={
    dealer:'', //桌创建者，庄
    deposit:'', //庄创建桌时，抵押的资产，用于桌运转的消耗。
    isPrivate:false, //标志位，当该字段为true时，前端table list中不显示该桌。
    Code:'', // 币的发布者 
    sys:'', // 币种
    commission_rate_agent:'', // agent的反佣比例 
    commission_rate_player:'', // player的反佣比例
    oneRoundMaxTotalBet_bsoe:'', //big,small,odd,even下注位置的一轮最高的总下注额。
    oneRoundMaxTotalBet_anytri:'', //任意三个相同的数字下注位置的一轮最高的总下注额。
    oneRoundMaxTotalBet_trinum:'', //指定的三个相同的数字tri1/tri2/tri3/tri4/tri5/tri6下注位置的一轮最高的总下注额。例如:'', //tri1表示三个一，其他的以此类推
    oneRoundMaxTotalBet_pairnum:'', //两个相同的数字pair1/pair2/pair3/pair4/pair5/pair6下注位置的一轮最高的总下注额。例如:'', //pair1表示两个一，其他的以此类推
    oneRoundMaxTotalBet_txx:'', //三个骰子的数字总和下注位置的一轮最高的总下注额。
    oneRoundMaxTotalBet_twocom:'', //两个骰子的数字组合c12/c13/c14/c15/c16/c23/c24/c25/c26/c34/c35/c36/c45/c46/c56下注位置的一轮最高的总下注额
    oneRoundMaxTotalBet_single:'', //一个骰子显示押注的单一数字s1/s2/s3/s4/s5/s6下注位置的一轮最高的总下注额
    minPerBet_bsoe:'', //big,small,odd,even下注位置的一轮中每次最小下注额。
    minPerBet_anytri:'', //anytri下注位置的一轮中每次最小下注额。
    minPerBet_trinum:'', //tri1/tri2/tri3/tri4/tri5/tri6下注位置的一轮中每次最小下注额。
    minPerBet_pairnum:'', //pair1/pair2/pair3/pair4/pair5/pair6下注位置的一轮中每次最小下注额
    minPerBet_txx:'', //totalxx下注位置的一轮中每次最小下注额
    minPerBet_twocom:'', //c12/c13/c14/c15/c16/c23/c24/c25/c26/c34/c35/c36/c45/c46/c56下注位置的一轮中每次最小下注额
    minPerBet_single:'', //s1/s2/s3/s4/s5/s6下注位置的一轮中每次最小下注额

};

// baseAc.account=Global.sigGameName;    //合约名
// baseAc.name='newtable';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=newTableDS;

// baseTr.actions.push(baseAc);

const sicNewTable=new baseTr();

module.exports = {sicNewTable,newTableDS}