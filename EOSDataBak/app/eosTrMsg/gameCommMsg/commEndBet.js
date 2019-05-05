
const baseTr = require('../../../libs/EOS/baseTr');


const endBetDS={
    tableId:''  //table主键
};


// baseAc.name='endbet';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=endBetDS;

// baseTr.actions.push(baseAc);

const commEndBet=new baseTr();

module.exports = {commEndBet,endBetDS}