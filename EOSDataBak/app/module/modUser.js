/**
 * Created by ujInfo on 2019/4/19.
 */
var modUser = module.exports;

var  Global = require('../../libs/global/global.js');
var Utils = require('../../libs/util/utils.js');
var DBUser = require('../model/dbUser.js');

modUser.dbCreateUser=function (dbUser, cb){
    var sql='INSERT INTO `T_USER` (eosaccount,nickname,logo,pubkey,eos_balance,gcc_balance,user_type,createtime,online,lasttime,lastip,code)'+ 
                        ' values(?,?,?,?,?,?,?,NOW(),?,NOW(),?,?)';
    var args =[dbUser.eosaccount, dbUser.nickname, dbUser.logo, dbUser.pubkey, dbUser.eos_balance, dbUser.gcc_balance, dbUser.user_type, //dbUser.createtime, 
        dbUser.online, dbUser.lastip, dbUser.code];
        
    Global.userDb.query(sql, args, function(err, res){
            if (err) {
                Utils.invokeCallback(cb, err, null);
            } else {
                Utils.invokeCallback(cb, null, dbUser);
            }
    });       
}

modUser.dbUpdateUser=function (dbUser, cb){
    var sql='UPDATE `T_USER` SET nickname=?,logo=?,pubkey=?,eos_balance=?,gcc_balance=?,user_type=?,online=?,lasttime=?,lastip=?,code=? where eosaccount=?';
    var args =[ dbUser.nickname, dbUser.logo, dbUser.pubkey, dbUser.eos_balance, dbUser.gcc_balance, dbUser.user_type,  
        dbUser.online, dbUser.lasttime, dbUser.lastip, dbUser.code, dbUser.eosaccount];
        
    Global.userDb.query(sql, args, function(err, res){
            if (err) {
                Utils.invokeCallback(cb, err, null);
            } else {
                Utils.invokeCallback(cb, null, dbUser);
            }
    });       
}

modUser.dbDeleteUser=function (eosaccount, cb){
    var sql='DELETE FROM `T_USER` WHERE eosaccount=?';
    var args =[eosaccount];
        
    Global.userDb.query(sql, args, function(err, res){
            if (err) {
                Utils.invokeCallback(cb, err, null);
            } else {
                Utils.invokeCallback(cb, null, "Delete Success!");
            }
    });       
}

modUser.dbGetUserByAccount=function (eosaccount, cb){
    // var sql='SELECT * FROM T_USER  left join T_ROOM on t_user.eosaccount=t_room.dealer WHERE t_user.eosaccount=?';
    var sql='SELECT T_USER.*,T_ROOM.id AS roomid, T_ROOM.room_name AS room_name,T_ROOM.code AS room_code,T_ROOM.createtime AS roomcreatetime '+
    'FROM T_USER  LEFT JOIN T_ROOM ON t_user.eosaccount=t_room.dealer WHERE t_user.eosaccount=?';
    var args =[eosaccount];

    Global.userDb.query(sql, args, function(err, res){
        if (err) {
           
            Utils.invokeCallback(cb, err, null);
        } else {
            if (res && res.length == 1) {
                var rs = res[0];
                var dbUser = new DBUser();
                dbUser.eosaccount = rs.eosaccount;           //varchar(15) not null,
                dbUser.nickname  = rs.nickname;              //varchar(20),
                dbUser.logo = rs.logo;                       //varchar(255),
                dbUser.pubkey = rs.pubkey;                   //varchar(64),
                dbUser.eos_balance  = rs.eos_balance;        //varchar(64),
                dbUser.gcc_balance = rs.gcc_balance;         //varchar(64),
                dbUser.user_type = rs.user_type;             //int //comment '0：普通    1：Agent',
                dbUser.createtime = rs.createtime;           //varchar(32),
                dbUser.online = rs.online;                   //int,
                dbUser.lasttime  = rs.lasttime;              //varchar(20),
                dbUser.lastip  = rs.lastip;                  //varchar(32),
                dbUser.code   = rs.code;                     //varchar(20),
                dbUser.roomname   = rs.room_name;                     //varchar(20),
                dbUser.roomcode   = rs.room_code;                     //varchar(20),
                dbUser.roomid = rs.roomid;
                dbUser.roomcreatetime = rs.roomcreatetime;
                Utils.invokeCallback(cb, null, dbUser);
            } else {
                Utils.invokeCallback(cb, null, null);
            }
        }
    });
}