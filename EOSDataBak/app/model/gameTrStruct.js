/**
 * Created by ujInfo on 2019/4/18.
 */
var gameTrStruct = module.exports;

var  baseAuthor = require('../../libs/EOS/baseAuthor');
var baseAc = require('../../libs/EOS/baseAction.js');
var {bacShuffle,shuffleDS} =require('../eosTrMsg/bacMsg/bacShuffle.js');
var {commVerServeSeed,verServeSeedDS} =require('../eosTrMsg/gameCommMsg/commVerServerSeed.js');
var {commServerSeed,serverSeedDS} =require('../eosTrMsg/gameCommMsg/CommServerSeed.js');
var {commEndBet,endBetDS} =require('../eosTrMsg/gameCommMsg/CommEndBet.js');

gameTrStruct.getGameShuffleStruct =function (tableID,gmAccount)
{
    shuffleDS.tableId=tableID;

    let author=new baseAuthor();
    let ac=new baseAc();
    
    author.actor=gmAccount;
    ac.account=Global.bacGameName;    //合约名
    ac.name='shuffle';    //方法名
    
    ac.authorization.push(author);
    ac.data=shuffleDS;

    bacShuffle.actions.push(ac);

    return bacShuffle;
}

gameTrStruct.getServerSeedStruct =function (tableID,seedCode,gmAccount)
{
      serverSeedDS.tableId=tableID;
      serverSeedDS.encodeSeed=seedCode;

      let author=new baseAuthor();
      let ac=new baseAc();

      author.actor=gmAccount;
      ac.account=Global.bacGameName;    //合约名
      ac.name='serverseed';    //方法名
      
      ac.authorization.push(author);
      ac.data=serverSeedDS;

      commServerSeed.actions.push(ac);

     
      return commServerSeed;
}

gameTrStruct.getVerServerSeedStruct =function (tableID,seed,gmAccount)
{
    verServeSeedDS.tableId=tableID;
    verServeSeedDS.seed=seed;
    let author=new baseAuthor();
    author.actor=gmAccount;
    let ac=new baseAc();
    ac.account=Global.bacGameName;    //合约名
    ac.name='verserveseed';    //方法名
    
    ac.authorization.push(author);
    ac.data=verServeSeedDS;

    commVerServeSeed.actions.push(ac);
 
    return commVerServeSeed;
}

gameTrStruct.getEndBetStruct =function (tableID,gmAccount)
{
    endBetDS.tableId=tableID;
    let author=new baseAuthor();
    author.actor=gmAccount;
    let ac=new baseAc();
    ac.account=Global.bacGameName;    //合约名
    ac.name='endbet';    //方法名
    
    ac.authorization.push(author);
    ac.data=endBetDS;

    commEndBet.actions.push(ac);
  
    return commEndBet;
}

