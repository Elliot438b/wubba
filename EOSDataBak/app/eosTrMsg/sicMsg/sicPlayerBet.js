const baseAc = require('../baseAction.js');
const baseTr = require('../../../libs/EOS/baseTr');
const baseAuthor = require('../baseAuthor.js');
var Global= require('../../../libs/global/global.js');

const playerBetDS={
    tableId:'', //table主键
    player:'', //玩家账户
    bet:'',     /*最后的下注信息会根据下注类型拼成一个json串格式。例如：{"small": "2.6000 SYS","total6": "3.5000 SYS","tri2": "2.0000 SYS"}
                    以下罗列出所有的下注类型：                             
                        big：大
                        small：小
                        odd：奇数
                        even：偶数
                        anytri：任意三个相同的数字
                        tri1/tri2/tri3/tri4/tri5/tri6：指定的三个相同的数字，tri1为三个一，以此类推
                        total4/total5/total6/total7/total8/total9/total10/total11/total12/total13/total14/total15/total16/total17：三个骰子的数字总和
                        c12/c13/c14/c15/c16/c23/c24/c25/c26/c34/c35/c36/c45/c46/c56：两个骰子的数字		组合
                        s1/s2/s3/s4/s5/s6：压注的单一数字
                */ 
    agentalias:'', //账户别名
    nickname:'', //绰号

};

// baseAc.account=Global.sigGameName;    //合约名
// baseAc.name='playerbet';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.authorization.push(baseAuthor);
// baseAc.data=playerBetDS;

// baseTr.actions.push(baseAc);

const sicPlayerBet=new baseTr();

module.exports = {sicPlayerBet,playerBetDS}