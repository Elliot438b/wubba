/**
 * Created by ujInfo on 2019/4/27.
 */
var Table = module.exports;

var UserSessionService = require('../../libs/session/userSessionService.js');
var Rpc = require('../message/rpc.js');
var Global = require('../../libs/global/global.js');
var wsProto = require('../proto/wsProto.js');
var modTable = require('./modTable.js');
var modRoom = require('./modRoom.js');

Table.GetTableID = function(userSession,dealerAccount){
    modRoom.dbGetRoomByDealer(dealerAccount,function(err, dbRoom){
        if (err){
            Log.error("获取房间信息失败");
            Log.error(err);
        } else {
            if (dbRoom){
                Log.error("该用户没有房间！");
            } else {
                modTable.getTableID(function(err,tableID){
                    let newTableID=tableID+1;
                    let sqlStr='INSERT INTO `T_TABLE_BAC` (`id`,`room_id`,`dealer`,`ifPrivate`,`createtime`) values (?,?,?,?,NOW())';
                    let args=[newTableID,dbRoom.id,dealerAccount,1];
                    Global.userDb.query(sqlStr,args,function(err, res){
                        if (err){
                            Log.error("获取桌号失败！");
                        } else {
                            var sendMsg = new wsProto.ws_S2C_GetTableID();
                            sendMsg.TableID = newTableID;   //此处要查询TABLE表，并获取最大的桌ID
                            Rpc.notifyClient(userSession, sendMsg);
                            // userSession.session.send(sendMsg.encode());
                        }
                    });
                })
            }
        }
    })
}


Table.NewTable = function(userSession,data){
    Global.eosTr.PushSerializedTrByServerSig(data.Sign,data.Tr)
    .then(function(trRst){
        if (trRst.processed.receipt.status == Global.executed){   
            var sendMsg = new wsProto.ws_S2C_NewTable();
            modTable.DBEditTable(data.Table,function(err, res){     //数据库创建桌
                if (err){
                    Log.error("本地数据库创建桌失败！");
                    sendMsg.Status='fail';
                } else {
                    Log.error("本地数据库创建桌成功！");
                    sendMsg.Status='success';
                }
                Rpc.notifyClient(userSession, sendMsg);
            })
        } 
    })
    .catch(function(error){
        console.log(error);
    })
}


Table.EditTable = function(userSession,data){
    Global.eosTr.PushSerializedTrByServerSig(data.Sign,data.Tr)
    .then(function(trRst){
        if (trRst.processed.receipt.status == Global.executed){   
            var sendMsg = new wsProto.ws_S2C_UpdateTable();
            modTable.DBEditTable(data.Table,function(err, res){     //数据库编辑桌
                if (err){
                    Log.error("本地数据库编辑桌失败！");
                    sendMsg.Status='fail';
                } else {
                    Log.error("本地数据库编辑桌成功！");
                    sendMsg.Status='success';
                }
                Rpc.notifyClient(userSession, sendMsg);
            })
        } 
    })
    .catch(function(error){
        console.log(error);
    })
}


Table.GetDealerTables = function (userSession,data){
    modTable.dbGetDealerTables(data.string,function(err, res){     //数据库获取DEALER所有桌信息
        var sendMsg = new wsProto.ws_S2C_GetTables();
        if (err){
            Log.error("本地数据库桌信息失败！");
            
        } else {
            Log.error("本地数据库桌信息成功！");
           //判断返回值是否为NULL，不为NULL，则编辑桌对象集合，

        }
        Rpc.notifyClient(userSession, sendMsg);
    })
}

Table.SetTableDispose = function(userSession,data){
    Global.eosTr.PushSerializedTrByServerSig(data.Sign,date.Tr)
    .then(function(trRst){
        if (trRst.processed.receipt.status == Global.executed){   
            var sendMsg = new wsProto.ws_S2C_Table_Dispose();    //tableID,trusteeShip,cb
            sendMsg.TableID=data.TableID;
            modTable.DBSetTableTrusteeship(data.TableID,data.Action,function(err, res){     //数据库编辑桌
                if (err){
                    Log.error("本地数据库编辑桌失败！");
                    sendMsg.Status='fail';
                } else {
                    Log.error("本地数据库编辑桌成功！");
                    sendMsg.Status='success';
                }
                Rpc.notifyClient(userSession, sendMsg);
            })
        } 
    })
    .catch(function(error){
        console.log(error);
    })
}

Table.SetTablePause = function(userSession,data){
    Global.eosTr.PushSerializedTrByServerSig(data.Sign,data.Tr)
    .then(function(trRst){
        if (trRst.processed.receipt.status == Global.executed){   
            var sendMsg = new wsProto.ws_S2C_Table_Pause();    //tableID,trusteeShip,cb
            sendMsg.TableID=data.TableID;
            modTable.DBSetTableIsPause(data.TableID,data.Action,function(err, res){     //数据库编辑桌
                if (err){
                    Log.error("本地数据库暂停桌失败！");
                    sendMsg.Status='fail';
                } else {
                    Log.error("本地数据库暂停桌成功！");
                    sendMsg.Status='success';
                    sendMsg.tableStatus=3;
                }
                Rpc.notifyClient(userSession, sendMsg);
            })
        } 
    })
    .catch(function(error){
        console.log(error);
    })
}

Table.SetTableClose = function(userSession,data){
    Global.eosTr.PushSerializedTrByServerSig(data.Sign,data.Tr)
    .then(function(trRst){
        if (trRst.processed.receipt.status == Global.executed){   
            var sendMsg = new wsProto.ws_S2C_Table_Close();    //tableID,trusteeShip,cb
            sendMsg.TableID=data.TableID;
            modTable.DBSetTableIsClose(data.TableID,data.Action,function(err, res){     //数据库编辑桌
                if (err){
                    Log.error("本地数据库关闭桌失败！");
                    sendMsg.Status='fail';
                } else {
                    Log.error("本地数据库关闭桌成功！");
                    sendMsg.Status='success';
                    sendMsg.tableStatus=5;
                }
                Rpc.notifyClient(userSession, sendMsg);
            })
        } 
    })
    .catch(function(error){
        console.log(error);
    })
}

Table.EnterTable= function(userSession,data){
    //更新桌台信息表；更新桌内在线用户表
    let sqls=[];
    sqls.push('UPDATE `T_TABLE_BAC` SET player_num=player_num+1  where `id` = '+ data.TableID);
    sqls.push('INSERT INTO `T_TABLE_ONLINE_PLAYER` (table_id,player_account,entertime) VALUES('+ data.TableID +',\'' + data.eosaccount +'\',NOW())');
    var sendMsg = new wsProto.ws_S2C_Table_In();
    sendMsg.eosaccount=data.eosaccount;   //缺失路单信息；
    Global.userDb.transExecute(sqls,function(err,res){
        if (err) {
            Log.error('用户进桌失败：');
            Log.error(err);
            sendMsg.Status='fail';
            userSession.session.send(sendMsg.encode());
        } else {
           //暂不更新GameDataService和UserSessionService
           sendMsg.Status='success';
           userSession.session.send(sendMsg.encode());
        }
    });
}

Table.OutTable= function(userSession,data){
    let sqls=[];
    sqls.push('UPDATE `T_TABLE_BAC` SET player_num=player_num-1  where `id` = '+ data.TableID);
    sqls.push('INSERT INTO `T_TABLE_PLAYER_HIS` SELECT table_id,player_account, entertime from T_TABLE_ONLINE_PLAYER WHERE `table_id` = '+ data.TableID +' AND `player_account`= \''+ data.eosaccount +'\'');
    sqls.push('DELETE FROM T_TABLE_ONLINE_PLAYER WHERE `table_id` = '+ data.TableID +' AND `player_account`= \''+ data.eosaccount +'\'');

    var sendMsg = new wsProto.ws_S2C_Table_Out();
    sendMsg.eosaccount=data.eosaccount;  
    sendMsg.TableID = data.TableID;
    Global.userDb.transExecute(sqls,function(err,res){
        if (err) {
            Log.error('用户出桌失败：');
            Log.error(err);
            sendMsg.Status='fail';
            userSession.session.send(sendMsg.encode());
        } else {
           sendMsg.Status='success';
           userSession.session.send(sendMsg.encode());
        }
    });
}


Table.GetEOSTableRow = function (userSession,tableID){
    // (scope,code,upper_bound,lower_bound){
    Global.eosTr.GetTableInfoAppointRows(Global.bacGameName,Global.bacGameName,tableID,tableID)
    .then()
    .catch()
}

//返回桌状态
Table.GetTableStatus = function (){

}