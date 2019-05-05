
const baseTr = require('../../../libs/EOS/baseTr');


const trusteeShipDS={
    tableId:''  //table主键
};


// baseAc.name='trusteeship';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=trusteeShipDS;

// baseTr.actions.push(baseAc);

const commTrusteeShip=new baseTr();

module.exports = {commTrusteeShip,trusteeShipDS}