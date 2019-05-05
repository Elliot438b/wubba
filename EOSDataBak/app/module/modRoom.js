/**
 * Created by ujInfo on 2019/4/19.
 */

var modRoom = module.exports;
var  Global = require('../../libs/global/global.js');
var Utils = require('../../libs/util/utils.js');
var DBRoom = require('../model/dbRoom.js');

modRoom.dbCreateRoom=function (dbRoom, cb){
    var sql='INSERT INTO `T_ROOM` (dealer,room_name,createtime,code) values(?,?,NOW(),?)';
    var args =[dbRoom.dealer, dbRoom.room_name, dbRoom.code];
        
    Global.userDb.query(sql, args, function(err, res){
            if (err) {
                Utils.invokeCallback(cb, err, null);
            } else {
                Utils.invokeCallback(cb, null, dbRoom);
            }
    });       
}

modRoom.dbUpdateRoom=function (dbRoom, cb){
    var sql='UPDATE `T_ROOM` SET dealer=?,room_name=?,code=? where id=?';
    var args =[ dbRoom.dealer, dbRoom.room_name, dbRoom.code,dbRoom.id];
        
    Global.userDb.query(sql, args, function(err, res){
            if (err) {
                Utils.invokeCallback(cb, err, null);
            } else {
                Utils.invokeCallback(cb, null, dbUser);
            }
    });       
}

modRoom.dbDeleteRoom=function (roomID, cb){
    var sql='DELETE FROM `T_ROOM` WHERE id=?';
    var args =[roomID];
        
    Global.localDb.query(sql, args, function(err, res){
            if (err) {
                Utils.invokeCallback(cb, err, null);
            } else {
                Utils.invokeCallback(cb, null, dbUser);
            }
    });       
}

modRoom.dbGetRoomByID=function (roomID, cb){
    var sql='SELECT * FROM `T_ROOM` WHERE id=?';
    var args =[roomID];

    Global.userDb.query(sql, args, function(err, res){
        if (err) {
            Utils.invokeCallback(cb, err, null);
        } else {
            if (res && res.length == 1) {
                var rs = res[0];
                var dbRoom = new DBRoom();
                dbRoom.id = rs.id;                    //int not null,
                dbRoom.dealer = rs.dealer;               //varchar(15),
                dbRoom.room_name = rs.room_name;            //varchar(20),
                dbRoom.createtime = rs.createtime;           //varchar(20),
                dbRoom.code = rs.code;                 //varchar(20),
                Utils.invokeCallback(cb, null, dbUser);
            } else {
                Utils.invokeCallback(cb, null, null);
            }
        }
    });
}

modRoom.dbGetRoomByDealer=function (eosaccount, cb){
    var sql='SELECT * FROM `T_ROOM` WHERE dealer=?';
    var args =[eosaccount];

    Global.userDb.query(sql, args, function(err, res){
        if (err) {
            Utils.invokeCallback(cb, err, null);
        } else {
            if (res && res.length == 1) {
                var rs = res[0];
                var dbRoom = new DBRoom();
                dbRoom.id = rs.id;                    //int not null,
                dbRoom.dealer = rs.dealer;               //varchar(15),
                dbRoom.room_name = rs.room_name;            //varchar(20),
                dbRoom.createtime = rs.createtime;           //varchar(20),
                dbRoom.code = rs.code;                 //varchar(20),
                Utils.invokeCallback(cb, null, dbRoom);
            } else {
                Utils.invokeCallback(cb, null, null);
            }
        }
    });
}