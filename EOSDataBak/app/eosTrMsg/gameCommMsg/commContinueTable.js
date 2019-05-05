
const baseTr = require('../../../libs/EOS/baseTr');


const continueTableDS={
    tableId:''  //table主键
};


// baseAc.name='continuetable';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=continueTableDS;

// baseTr.actions.push(baseAc);

const commContinueTable=new baseTr();

module.exports = {commContinueTable,continueTableDS}