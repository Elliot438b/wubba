/**
 * Created by ujInfo on 2019/4/28.
 */
var PokerGame = module.exports;

var Rpc = require('../message/rpc.js');
var Global = require('../../libs/global/global.js');
var wsProto = require('../proto/wsProto.js');
const {SeedSvr} = require('../../libs/Seed/gcc-seed-server.js');
var seedsvr=new SeedSvr('../../libs/Seed/gcc-seed.yaml');
var SeedSessionService = require('../../libs/session/seedSessionService.js');
var SeedSession = require('../../libs/session/seedSession.js');

PokerGame.CreatTxtSeed = function(userSession,tableID,dealer){

    var sendMsg = new wsProto.ws_B2C_CreatTxtSeed();
    sendMsg.TableID=tableID;
    TableID.Dealer=dealer;
    Rpc.notifyClient(userSession, sendMsg);
}



PokerGame.SendSvrSeed = function(userSession,tableID){   //当不需要DEALER种子时，userSession==NULL
    let seedMsg=seedsvr.getSeed();
  
    var sendMsg = new wsProto.S2C_SendTxtSeed();
    sendMsg.TableID=data.TableID;
    sendMsg.eosaccount=data.eosaccount;
    Global.eosTr.PushTr(eosTrStruct.getSvrSeedStruct(tableID,seedMsg.seedHash,Global.GSAccount))
           .then(function(trRst){
                if (trRst.processed.receipt.status == Global.executed){ //待信息确认后，再回写数据库 
                    sendMsg.Status='success';
                    let seedSession=new SeedSession(tableID,seedMsg);
                    SeedSessionService.addSession(seedSession);  //将GS种子暂存到，以便下次发送明文时使用
                    if (!userSession){
                        Rpc.notifyClient(userSession, sendMsg);
                    }
                }   
           })
           .catch(function(error){
                sendMsg.Status='fail';
                console.log(error)
                if (!userSession){
                    Rpc.notifyClient(userSession, sendMsg);
                }
           });
}


PokerGame.SendDoubleSeed = function(userSession,data){
    Global.eosTr.PushSerializedTrByServerSig(data.Sign,data.Tr)
    .then(function(trRst){
        if (trRst.processed.receipt.status == Global.executed){
            //当DEAL种子发送成功后，生成GS的种子，并且将信息发送上链，待信息确认后，再回写数据库
            SendSvrSeed(userSession,data.TableID);
        } 
    })
    .catch(function(error){
        console.log(error);
    })

}

PokerGame.SendSvrTxtSeed = function(userSession,tableID){
    let seedMsg=SeedSessionService.getSession(tableID);
    var sendMsg = new wsProto.S2C_SendTxtSeed();
    sendMsg.TableID=data.TableID;
    sendMsg.eosaccount=data.eosaccount;
    Global.eosTr.PushTr(eosTrStruct.getVerSvrSeedStruct(tableID,seedMsg.seed,Global.GSAccount))  //(TableID,TxtSeed,GSAccount)
           .then(function(trRst){
                if (trRst.processed.receipt.status == Global.executed){ //待信息确认后，再回写数据库 
                    sendMsg.Status='success';
                    SeedSessionService.removeSession(tableID);
                    if (!userSession){
                        Rpc.notifyClient(userSession, sendMsg);
                    }
                }   
           })
           .catch(function(error){
                sendMsg.Status='fail';
                if (!userSession){
                    Rpc.notifyClient(userSession, sendMsg);
                }
                console.log(error);
           });
            
}

PokerGame.SendDoubleTxtSeed = function(userSession,data){
    Global.eosTr.PushSerializedTrByServerSig(data.Sign,data.Tr)
    .then(function(trRst){
        if (trRst.processed.receipt.status == Global.executed){
            //当DEAL种子发送成功后，生成GS的种子，并且将信息发送上链，待信息确认后，再回写数据库
            SendSvrTxtSeed(userSession,data.TableID);
        } 
    })
    .catch(function(error){
        console.log(error);
    })
}

PokerGame.Shuffle = function(tableID)
{
    Global.eosTr.PushTr(eosTrStruct.shuffle(tableID,Global.GSAccount))  
           .then(function(trRst){
                if (trRst.processed.receipt.status == Global.executed){
                    //GetTableRows获取牌信息；
                }   
           })
           .catch(function(error){
               
                console.log(error);
           });
}

PokerGame.Shuffle = function(tableID)
{
    Global.eosTr.PushTr(eosTrStruct.shuffle(tableID,Global.GSAccount))  
           .then(function(trRst){
                if (trRst.processed.receipt.status == Global.executed){
                    //GetTableRows获取牌信息；
                }   
           })
           .catch(function(error){
               
                console.log(error);
           });
}

PokerGame.PlayBet = function (userSession,data)
{
    //时间判断
    //限红判断
    // var sendMsg = new wsProto.S2C_PlayBet();
    // sendMsg.TableID:int,
    // sendMsg.eosaccount:string,
    // sendMsg.Status:string

}

PokerGame.PlayerBet = function (userSession,data)
{
    //时间判断
    //限红判断
    // var sendMsg = new wsProto.S2C_PlayBet();
    // sendMsg.TableID:int,
    // sendMsg.eosaccount:string,
    // sendMsg.Status:string

}



