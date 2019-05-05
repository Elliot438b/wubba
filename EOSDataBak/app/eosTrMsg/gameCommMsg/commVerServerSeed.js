
const baseTr = require('../../../libs/EOS/baseTr');


const verServeSeedDS={
    tableId:'', //table主键
    seed:'',//明文种子
};


// baseAc.name='verserveseed';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=verServeSeedDS;

// baseTr.actions.push(baseAc);

const commVerServeSeed =new baseTr();

module.exports = {commVerServeSeed,verServeSeedDS}