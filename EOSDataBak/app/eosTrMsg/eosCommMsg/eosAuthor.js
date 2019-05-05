
const baseTr = require('../../../libs/EOS/baseTr');


const updateAuthDS={
    account: "",    //GCC用户
    permission: "active",
    parent: "owner",
    auth:{
        threshold:1,
        keys:[
          {
            key:"",   //GCC用户公钥
            weight:1
          }
        ],
        accounts:[
          {
            permission:
            {
              actor:"",  //gamemallards 或者是 game12lizard
              permission:"eosio.code"//权限 ，固定
            },
            weight:1
          }
        ],
        waits: []
   }
};

// baseAc.account='eosio';      // updateauth所属的系统账户，固定
// baseAc.name='updateauth';    //方法名，固定

// baseAc.authorization.push(baseAuthor);
// baseAc.data=updateAuthDS;

// baseTr.actions.push(baseAc);

const eosAuthor =new baseTr();;

module.exports = {eosAuthor,updateAuthDS}