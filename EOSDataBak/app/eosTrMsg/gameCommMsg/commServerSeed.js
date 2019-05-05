
const baseTr = require('../../../libs/EOS/baseTr');


const serverSeedDS={
    tableId:'', //table主键
    encodeSeed:'',//明文种子的SHA256结果
};


// baseAc.name='serverseed';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=serverSeedDS;

// baseTr.actions.push(baseAc);

const commServerSeed=new baseTr();;

module.exports = {commServerSeed,serverSeedDS}