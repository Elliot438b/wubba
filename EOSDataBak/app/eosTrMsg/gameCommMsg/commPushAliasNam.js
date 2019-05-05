const baseAc = require('../baseAction.js');
const baseTr = require('../../../libs/EOS/baseTr');
const baseAuthor = require('../baseAuthor.js');

const pushAliasNamDS={
    alias:'',//别名
    account:'',//别名对应的EOS账户
};


// baseAc.name='pushaliasnam';    //方法名

// baseAc.authorization.push(baseAuthor);
// baseAc.data=pushAliasNamDS;

// baseTr.actions.push(baseAc);

const commPushAliasNam=new baseTr();

module.exports = {commPushAliasNam,pushAliasNamDS}