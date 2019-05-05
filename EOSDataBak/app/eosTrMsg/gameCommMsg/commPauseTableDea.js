
const baseTr = require('../../../libs/EOS/baseTr');


const pauseTableDeaDS={
    tableId:''  //table主键
};


// baseAc.name='pausetabledea';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=pauseTableDeaDS;

// baseTr.actions.push(baseAc);

const commPauseTableDea=new baseTr();

module.exports = {commPauseTableDea,pauseTableDeaDS}