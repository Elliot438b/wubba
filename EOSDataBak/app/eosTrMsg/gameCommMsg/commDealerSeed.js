
const baseTr = require('../../../libs/EOS/baseTr');


const dealerSeedDS={
    tableId:'', //table主键
    encodeSeed:'',//明文种子的SHA256结果
};


// baseAc.name='dealerseed';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=dealerSeedDS;

// baseTr.actions.push(baseAc);

const commDealerSeed=new baseTr();

module.exports = {commDealerSeed,dealerSeedDS}