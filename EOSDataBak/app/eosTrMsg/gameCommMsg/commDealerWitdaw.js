
const baseTr = require('../../../libs/EOS/baseTr');


const dealerWitdawDS={
    
    tableId:'',  //table主键
    withdraw:''    //提取额
};


// baseAc.name='dealerwitdaw';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=dealerWitdawDS;

// baseTr.actions.push(baseAc);

const commDealerWitdaw=new baseTr();

module.exports = {commDealerWitdaw,dealerWitdawDS}