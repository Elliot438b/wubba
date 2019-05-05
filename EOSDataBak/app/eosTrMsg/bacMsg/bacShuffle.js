
const baseTr = require('../../../libs/EOS/baseTr');

var Global= require('../../../libs/global/global.js');

const shuffleDS={
    tableId:''  //table主键
};

// baseAc.account=Global.bacGameName;     //合约名
// baseAc.name='shuffle';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=shuffleDS;

// baseTr.actions.push(baseAc);

const bacShuffle=new baseTr();;

module.exports = {bacShuffle,shuffleDS}