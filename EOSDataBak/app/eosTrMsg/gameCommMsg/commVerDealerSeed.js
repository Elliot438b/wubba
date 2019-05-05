
const baseTr = require('../../../libs/EOS/baseTr');


const verDealeSeedDS={
    tableId:'', //table主键
    seed:'',//明文种子
};


// baseAc.name='verdealeseed';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=verDealeSeedDS;

// baseTr.actions.push(baseAc);

const commVerDealeSeed =new baseTr();

module.exports = {commVerDealeSeed,verDealeSeedDS}