/**
 * Created by ujInfo on 2019/4/24.
 */
var Auth = module.exports;


var UserSessionService = require('../../libs/session/userSessionService.js');
var RoomSessionService = require('../../libs/session/roomSessionService.js');

var GameUser = require('../model/gameUser.js');
var GameDataService = require('../data/gameDataService.js');

var RpcProto = require('../proto/rpcProto.js');
var GameProto = require('../proto/gameProto.js');
var Log = require('../../libs/log/log.js');
var MyDate = require('../../libs/date/date.js');
// var UserCache = require('../cache/userCache.js');
var Rpc = require('../message/rpc.js');

var wsProto = require('../proto/wsProto.js');
var DBUser = require('../model/dbUser.js');
var DBRoom = require('../model/dbRoom.js');
var modUser = require('./modUser.js');
var modRoom = require('./modRoom.js');
var Global = require('../../libs/global/global.js');
var modEOS = require('./modEOS.js');

var Utils = require('../../libs/util/utils.js');
var eosTrStruct = require('../model/eosTrStruct.js');

var ClientMsg = require('../proto/clientMsg/ClientMsg.js');



Auth.login = function(userSession, data,loginIP) {
    var existsUser = GameDataService.getUserByName(data.eosaccount);
    if(existsUser){
        Auth.loginRepeat(userSession);
        // Log.debug('重复登录~');
        console.log('Auth.login 重复登录~');
        return ;
    }
    modUser.dbGetUserByAccount(data.eosaccount, function(err, dbUser){
        if (err){
            Log.error(err);
            Auth.loginFail(userSession);
        } else {
            if (dbUser) {
                Auth.loginSuccess(userSession, dbUser);
            } else{
                Auth.create(userSession, data,loginIP);
            }
        }
    })
  
}

Auth.editUserMsg = function (userSession,dbUser){
    let sqls=[];
    sqls.push('UPDATE `T_USER` SET eosaccount=\''+ dbUser.eosaccount +'\','+
    'nickname=\''+dbUser.nickname +'\','+
    'logo=\''+dbUser.logo +'\','+
    'pubkey=\''+dbUser.pubkey +'\','+
    'eos_balance=\''+dbUser.eos_balance +'\','+
    'gcc_balance=\''+dbUser.gcc_balance +'\','+
    'user_type=\''+dbUser.user_type +'\','+
    'code=\''+dbUser.code +'\' WHERE eosaccount=\''+ dbUser.eosaccount +'\'');
    if (!dbUser.nickname && dbUser.nickname.length>0){
        sqls.push('UPDATE `T_ROOM` SET room_name=\''+ dbUser.nickname +'\' WHERE dealer=\''+dbUser.eosaccount +'\'');
    }
    
    var sendMsg = new wsProto.ws_S2C_UpdateUser();

    Global.userDb.transExecute(sqls,function(err,res){
        if (err) {
            Log.error('更新用户信息失败：');
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


Auth.create = function(userSession, data,loginIP) {  //1\插入用户表、插入房间表、游戏授权、获取账户余额
    var sqls=[];
    dbUser = new DBUser();
    dbUser.eosaccount = data.eosaccount;           //varchar(15) not null,
    dbUser.nickname  = 'GCC玩家';                   //data.eosaccount;            //varchar(20),
    dbUser.logo = data.eosaccount;                 //varchar(255),
    dbUser.pubkey = data.PublicKey;               //varchar(64),
    dbUser.eos_balance  =data.eosBalance;         //varchar(64),
    dbUser.gcc_balance = data.gccBalance;          //varchar(64),
    dbUser.user_type = 0;             //int //comment '0：普通    1：Agent',
    
    dbUser.online = 0;                //int,
    // dbUser.lasttime  = '2019-04-19 19:19:51';            //varchar(20),
    dbUser.lastip  = loginIP;              //varchar(32),
    dbUser.code   = 'hello';               //varchar(20),
    
    
    sqls.push('INSERT INTO `T_USER` (eosaccount,nickname,logo,pubkey,eos_balance,gcc_balance,user_type,createtime,online,lasttime,lastip,code) values(\''+
    dbUser.eosaccount +'\',\''+ dbUser.nickname +'\',\''+dbUser.logo+'\',\''+dbUser.pubkey+'\',\'' + dbUser.eos_balance +'\',\''+dbUser.gcc_balance
    +'\',0,NOW(),1,NOW(),\''+ dbUser.lastip +'\',\'\')');
    sqls.push('INSERT INTO `T_ROOM` (dealer,room_name,createtime,code) values(\''+ dbUser.eosaccount + '\',\''+ dbUser.eosaccount + '\',NOW(),\'\')');
    Global.userDb.transExecute(sqls,function(err,res){
        if (err) {
            Auth.loginFail(userSession);
        } else {
            modUser.dbGetUserByAccount(data.eosaccount, function(err, rstdbUser){
                if (err){
                    Log.error(err);
                   
                } else {
                    Auth.loginSuccess(userSession, rstdbUser);
                   
                }
            })
        }
    });
    // Auth.loginSuccess(userSession, dbUser);
}

Auth.loginRepeat = function (userSession){
    var sendMsg = new ClientMsg.Proto.ws_S2C_Login();               //qjw
    sendMsg.status=2;
    var buffObj = ClientMsg.Proto.ws_S2C_Login.encode(sendMsg).finish(); //body
    let sendMsgBuf=Utils.clientMsgPack(buffObj,sendMsg.MsgID);
    userSession.session.send(sendMsgBuf);
}

Auth.loginFail = function(userSession){

    // userSession.close();
    var sendMsg = new ClientMsg.Proto.ws_S2C_Login();               //qjw
    var buffObj = ClientMsg.Proto.ws_S2C_Login.encode(sendMsg).finish(); //body
    let sendMsgBuf=Utils.clientMsgPack(buffObj,sendMsg.MsgID);
    userSession.session.send(sendMsgBuf);
    
}

Auth.loginSuccess = function(userSession, dbUser){
    var existsUser = GameDataService.getUser(dbUser.eosaccount);
    if(existsUser){
        Log.debug('重复登录~');
        return;
    }

    //在Redis中缓存用户数据
    dbUser.last_login_time = MyDate.unix();
    // UserCache.setUser(dbUser);

    //设置用户在线
    // UserCache.setOnline(dbUser.eosaccount);
    // userSession.addCloseCallBack(function(){
    //     //设置用户下线
    //     UserCache.setOffline(dbUser.eosaccount);
    // });

    //在内存中缓存用户数据

    GameDataService.addUser(dbUser, userSession);
    UserSessionService.addSession(userSession);
    var roomSession=RoomSessionService.getSession(dbUser.eosaccount);
    if(roomSession){
        Log.debug('已经存在用户的房间SESSION!');
        roomSession.setOnLine(1);   //表示用户在线！
    } else {// 形成用户房间SESSION;

    }

    //返回通知客户端登录成功
    // var sendMsg = new wsProto.ws_S2C_Login();

    var sendMsg = new ClientMsg.Proto.ws_S2C_Login();               //qjw
    sendMsg.status=1;//登录成功；
    var objUser =new ClientMsg.Proto.UserInfo();
    objUser.eosaccount = dbUser.eosaccount;   
    objUser.nickname  = dbUser.nickname;              //varchar(20),
    objUser.logo = dbUser.logo;                       //varchar(255),
    objUser.pubkey = dbUser.pubkey;                   //varchar(64),
    objUser.eos_balance  = dbUser.eos_balance;        //varchar(64),
    objUser.gcc_balance = dbUser.gcc_balance;         //varchar(64),
    objUser.user_type = dbUser.user_type;             //int //comment '0：普通    1：Agent',
    objUser.createtime = dbUser.createtime;           //varchar(32),
    objUser.online = dbUser.online;                   //int,
    objUser.lasttime  = dbUser.lasttime;              //varchar(20),
    objUser.lastip  = dbUser.lastip;                  //varchar(32),
    objUser.code   = dbUser.code;                     //varchar(20),
    sendMsg.User = objUser;
   
    var objRoom =new ClientMsg.Proto.RoomInfo();
 
    objRoom.id = dbUser.roomid;
	objRoom.dealer = dbUser.eosaccount;
	objRoom.roomName = dbUser.roomname;
	objRoom.createtime = dbUser.roomcreatetime;
    objRoom.code = dbUser.roomcode;
    sendMsg.Room = objRoom;

    var buffObj = ClientMsg.Proto.ws_S2C_Login.encode(sendMsg).finish(); //body
    // var buff_MsgID = new Buffer(2);     //消息id
    // buff_MsgID.writeUInt16BE(sendMsg.MsgID);
    // var buff_BodyLen = new Buffer(2);   //body长度
    // buff_BodyLen.writeUInt16BE(buffObj.length);
    // var sendMsgBuf =  Buffer.concat([buff_MsgID,buff_BodyLen,buffObj]);   //拼接

    let sendMsgBuf=Utils.clientMsgPack(buffObj,sendMsg.MsgID);

    userSession.session.send(sendMsgBuf);
    // userSession.session.sendClient(buffObj,sendMsg.MsgID);
    
    // Rpc.notifyClient(userSession, sendMsg);
    // userSession.session.send(sendMsg.encode());

}


Auth.offline = function(data){
    var userSessionId = data.userSessionId;

    //在LoginServer下线
    var userSession = UserSessionService.getSession(userSessionId);
    userSession && userSession.close();

}

Auth.getEOSPublicKey= function(playAccount,cb){
    Global.eosTr.getEOSPublicKey(playAccount)
    .then(function(result){
            for (let key in result.permissions)
            {
              if (result.permissions[key].perm_name == 'owner')
              {
                let pubKey= result.permissions[key].required_auth.keys[0].key;
                Utils.invokeCallback(cb, null, pubKey);
              }
            }
        }
    )
    .catch(function(error){
        console.log(error);
        Utils.invokeCallback(cb, null, null);
        }
    );
}

Auth.getUserBalance =function (playAccount,symbol){
    Global.eosTr.GetCurBalance('eosio.token',playAccount,symbol)
    .then(function(result){
        Utils.invokeCallback(cb, null, result);
    })
    .catch(function(error){
        Utils.invokeCallback(cb, null, null);
    })

}

Auth.authEOS = function(playAccount,pubKey,perActor,authorActor,acAccount,acName)
{
 
    bacGame=modEOS.gamePermission(eosTrStruct.getGamePermissionStruct(playAccount,pubKey,perActor,authorActor,acAccount,acName))
    .then(function(trRst){
        var myDate = new Date();
        Log.info(myDate.toLocaleTimeString());
        Log.info('========================================');
        Log.info('trRst.transaction_id is '+trRst.transaction_id);
        Log.info('trRst.processed.block_num is '+trRst.processed.block_num);
        Log.info('trRst.processed.receipt.status is '+trRst.processed.receipt.status);       
        
    })
    .catch(function(error){
        console.log(error)
        
    });
}

Auth.getCollectionRoom = function (userSession,data)
{
    let sqls=[];
    sqls.push('select `T_ROOM`');
}


Auth.getOftenPlayRoom = function (userSession,data)
{
    let sqls=[];
    sqls.push('select `T_ROOM`');
}