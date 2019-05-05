
const baseTr = require('../../../libs/EOS/baseTr');


const deposiTableDS={
    dealer:'',   //庄用户
    tableId:'',  //table主键
    deposit:''    //补充的抵押额
};


// baseAc.name='depositable';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=deposiTableDS;

// baseTr.actions.push(baseAc);

const commDeposiTable=new baseTr();

module.exports = {commDeposiTable,deposiTableDS}