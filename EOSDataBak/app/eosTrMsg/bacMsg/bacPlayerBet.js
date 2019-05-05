
const baseTr = require('../../../libs/EOS/baseTr');

var Global= require('../../../libs/global/global.js');

const playerBetDS={
    tableId:'', //table主键
    player:'', //玩家账户
    betDealer:'', //庄下注额
    betPlayer:'', //：闲下注额
    betTie:'', //和下注额
    betDealerPush:'', //：庄对下注额
    betPlayerPush:'', //：闲对下注额
    agentalias:'', //账户别名
    nickname:''  //绰号
};

// baseAc.account=Global.bacGameName;     //合约名
// baseAc.name='playerbet';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.authorization.push(baseAuthor);
// baseAc.data=playerBetDS;

// baseTr.actions.push(baseAc);

const bacPlayerBet=new baseTr();

module.exports = {bacPlayerBet,playerBetDS}