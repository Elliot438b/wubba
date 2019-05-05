// const baseAc = require('../baseAction.js');
const baseTr = require('../../../libs/EOS/baseTr');
// const baseAuthor = require('../baseAuthor.js');

const closeTableDS={
    tableId:''  //table主键
};


// baseAc.name='closetable';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=closeTableDS;

// baseTr.actions.push(baseAc);

const commCloseTable=new baseTr();

module.exports = {commCloseTable,closeTableDS}