/**
 * Created by ujInfo on 19/4/25.
 */

var Log = require('../../libs/log/log.js');
var MyDate = require('../../libs/date/date.js');
var Server = require('../../libs/config/server.js');
var Global = require('../../libs/global/global.js');
var RpcProto = require('../proto/rpcProto.js');
var GameProto = require('../proto/gameProto.js');
var Message = require('./message.js');
var GameMessage = require('./gameMessage.js');
var Session = require('../../libs/session/session.js');
var Program = require('../../libs/program/program.js');
var LoginMessage = require('./loginMessage.js');
var ClientMsg = require('../proto/clientMsg/ClientMsg.js');
var Rpc = require('./rpc.js');

var FrontMessage = module.exports;

FrontMessage.receive = function(session, receiveBuff) {
   

    //根据msgId发送消息到不同的服务器
    var msgId = receiveBuff.readUInt16BE(0);
    Log.debug('FrontMessage收到消息ID：' + msgId);

    //Ping消息特殊处理
    if(msgId == GameProto.ID_client_ping_c2s){
        session.setPingTime(MyDate.unix());
        return;
    }

    //封装发送到后台服务器的消息
    var sendMsg = new RpcProto.rpc_gateDispatch_c2s();
    sendMsg.userSessionId = session.id;
    sendMsg.msgBody = receiveBuff;

    //消息分发
    if(Message.isLoginMsg(msgId)){
        //登录服务器消息,验证用户信息并做对应的用户数据处理
        // var serverSession = getServerSession('login');
        LoginMessage.receive(session, receiveBuff);
    }
    else if(Message.isGameMsg(msgId)){
        //游戏服务器消息
        // if(msgId == GameProto.ID_user_joinScene_c2s){
        //     //绑定游戏服务器
        //     var msg = GameProto.decode(receiveBuff);
        //     var gameServer = Server.allotGameServer(msg.sceneId);
        //     if(session.gameServer == gameServer){
        //         Log.error('重复登录？？？？');
        //         return;
        //     }
        //     session.bindGameServer(gameServer);
        // }

        //游戏服务器消息
        if (session.gameServer==null){
            session.gameServer=Server.getByServer('game')[Program.gameId.toString()];
        }
        Rpc.notify(session.gameServer, sendMsg);
    }
    else {
        Log.error('FrontMessage收到未处理的消息ID: ' + msgId);
    }
}

FrontMessage.send = function(session, sendBuff) {
    if(!session){
        Log.error('FrontMessage session is not exists');
        return;
    }

    session.send(sendBuff);
}

var getServerSession = function(server){
    if(!server){
        return null;
    }

    var session = null;
    if(server instanceof Session){
        session = server;
    } else {
        session = Global[server];
        if(!session){
            session = Global[Server.getByServer(server).id];
        }
    }

    return session;
}