/**
 * Created by ujInfo on 2019/5/3.
 */
var RoomObj = module.exports;
var  Global = require('../../libs/global/global.js');
var Utils = require('../../libs/util/utils.js');
var RoomSession = require('../../libs/session/roomSession.js');
var TableSession = require('../../libs/session/tableSession.js');
var RoomSessionService =require('../../libs/session/roomSessionService.js');
var modTable = require('./modTable.js');
var Log = require('../../libs/log/log.js');

RoomObj.GenerateRoomObjs =function(){

    var sql='SELECT a.id AS roomid,a.dealer as dealer, a.room_name AS room_name,a.code AS room_code,a.createtime AS room_createtime FROM T_ROOM a';
    
    Global.userDb.query(sql, null, function(err, res){
        if (err) {
            Utils.invokeCallback(cb, err, null);
        } else {
            if (res && res.length >0) {
                  for (let i=0;i<res.length;i++){  //($dealer, $roomName,$roomCode,$createTime)
                    roomSession = new RoomSession(res[i].roomid,res[i].dealer, res[i].room_name,res[i].room_code,res[i].room_createtime);// 形成房间SESSION
                    //  取得本房间内所有桌SESSION
                    modTable.dbGetDealerTables(res[i].dealer,function(err, res){     //数据库获取DEALER所有桌信息
                        if (err){
                            Log.error("RoomObj.GenerateRoomObjs 获取本地数据库桌信息失败！");
                            
                        } else {
                            Log.info("RoomObj.GenerateRoomObjs 获取本地数据库桌信息成功！");
                           //判断返回值是否为NULL，不为NULL，则编辑桌对象集合，
                            if (res && res.length >0) {
                                for (let j=0;j<res.length;j++){ //$tableId, $tableMsg,$seedMsg
                                   tableSession= new TableSession(res[j].id, res[j],null);
                                   roomSession.addTable(tableSession);
                                }
                            }
                        }
                    });
                    RoomSessionService.addSession(roomSession);
                    console.log(RoomSessionService.getSessionCount());
                  }
               
            } else {
                // Utils.invokeCallback(cb, null, null);
            }
        }
    });
}