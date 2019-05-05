
const baseTr = require('../../../libs/EOS/baseTr');


const exitruteShipDS={
    tableId:''  //table主键
};


// baseAc.name='exitruteship';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=exitruteShipDS;

// baseTr.actions.push(baseAc);

const commExitruteShip=new baseTr();

module.exports = {commExitruteShip,exitruteShipDS}