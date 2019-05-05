/**
 * Created by ujInfo on 2019/4/18.
 */
var eosTrStruct = module.exports;


var  baseAuthor = require('../../libs/EOS/baseAuthor');
var baseAc = require('../../libs/EOS/baseAction.js');
var {eosAuthor,updateAuthDS} =require('../eosTrMsg/eosCommMsg/eosAuthor.js');
/**
 * 游戏赋权
 * playAccount 需要授权的账户 ,
 * pubKey  公钥,
 * perActor  游戏名称,
 * authorActor 需要授权的账户,
 * acAccount 合约名,
 * acName  合约方法名
 */
eosTrStruct.getGamePermissionStruct = function (playAccount,pubKey,perActor,authorActor,acAccount,acName)
{
      updateAuthDS.account=playAccount;
      updateAuthDS.auth.keys[0].key=pubKey;
      updateAuthDS.auth.accounts[0].permission.actor=perActor;

      let author=new baseAuthor();
      
      let ac=new baseAc();

      author.actor=authorActor;
      ac.account=acAccount;    //合约名
      ac.name=acName;    //方法名
      
      ac.authorization.push(author);
      ac.data=updateAuthDS;
     

      eosAuthor.actions.push(ac);
  
      // console.log(eosAuthor.actions[0].data.auth.accounts);
      // console.log(eosAuthor.actions[1].data.auth.accounts);
      console.log(eosAuthor);
      return eosAuthor;
}
/**
 * 游戏赋权DEMO
 * playAccount,pubKey,perActor,authorActor,acAccount,acName
 */
eosTrStruct.getSicGamePermissionStruct = function ()
{
      updateAuthDS.account='useraaaaaaap';
      updateAuthDS.auth.keys[0].key='EOS6BPyzLooPX2fA66smfjBiB68k4LcMLFaaHzL7Y7P8V8NCR3Ape';
      updateAuthDS.auth.accounts[0].permission.actor='game12lizard';

      let author=new baseAuthor();
      
      let ac=new baseAc();

      author.actor='useraaaaaaap';
      ac.account='eosio';    //合约名
      ac.name='updateauth';    //方法名
      
      ac.authorization.push(author);
      ac.data=updateAuthDS;
     

      eosAuthor.actions.push(ac);
  
      // console.log(eosAuthor.actions[0].data.auth.accounts);
      // console.log(eosAuthor.actions[1].data.auth.accounts);
      // console.log(eosAuthor);
      return eosAuthor;
}

eosTrStruct.gettrStruct = function ()
{
    const tt={
        from: 'gcctest12345',
          to: 'qiujinwen123',
          quantity: '0.0001 EOS',
          memo: '',
    }

      let author=new baseAuthor();
      
      let ac=new baseAc();

      author.actor='gcctest12345';
      ac.account='eosio.token';    //合约名
      ac.name='transfer';    //方法名
      
      ac.authorization.push(author);
      ac.data=tt;
     

      eosAuthor.actions.push(ac);
  
      // console.log(eosAuthor.actions[0].data.auth.accounts);
      // console.log(eosAuthor.actions[1].data.auth.accounts);
      // console.log(eosAuthor);
      return eosAuthor;
}



eosTrStruct.getSvrSeedStruct = function(TableID,Seed,GSAccount)
{
      serverSeedDS.tableId=TableID;
      serverSeedDS.encodeSeed=Seed;

      let author=new baseAuthor();
      let ac=new baseAc();

      author.actor=GSAccount;
      ac.account=Global.bacGameName;    //合约名
      ac.name='dealerseed';    //方法名
      
      ac.authorization.push(author);
      ac.data=serverSeedDS;

      commServerSeed.actions.push(ac);

      console.log(commServerSeed);
      console.log(commServerSeed.actions[0].authorization);
      console.log(commServerSeed.actions[0].data);
      return commServerSeed;
}

eosTrStruct.getVerSvrSeedStruct = function(TableID,TxtSeed,GSAccount)
{
      verServeSeedDS.tableId=TableID;
      verServeSeedDS.seed=TxtSeed;
      let author=new baseAuthor();
      author.actor= GSAccount;
      let ac=new baseAc();
      ac.account=Global.bacGameName;    //合约名
      ac.name='verserveseed';    //方法名
      
      ac.authorization.push(author);
      ac.data=verServeSeedDS;

      commVerServeSeed.actions.push(ac);

      console.log(commVerServeSeed);
      console.log(commVerServeSeed.actions[0].authorization);
      console.log(commVerServeSeed.actions[0].data);
      return commVerServeSeed;
}

eosTrStruct.shuffle = function (TableID,GSAccount)
{
      shuffleDS.tableId=TableID;

      let author=new baseAuthor();
      let ac=new baseAc();
      
      author.actor=GSAccount;
      ac.account=Global.bacGameName;    //合约名
      ac.name='shuffle';    //方法名
      
      ac.authorization.push(author);
      ac.data=shuffleDS;

      bacShuffle.actions.push(ac);

      return bacShuffle;
}