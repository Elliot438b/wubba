/**
 * Created by ujInfo on 19/4/26.
 */

var Log = require('../../libs/log/log.js');
var UserSession = require('../../libs/session/userSession.js');
var UserSessionService = require('../../libs/session/userSessionService.js');
var Handle = require('./loginMessageHandle.js');
var wsProto = require('../proto/wsProto.js');
var ClientMsg = require('../proto/clientMsg/ClientMsg.js');
var Utils = require('../../libs/util/utils.js');
var LoginMessage = module.exports;

LoginMessage.receive = function(session, data) {
    var userSessionId = session.id;

//     var msgId = data.slice(0,2).readUInt16BE(0);   //取msgid
//     var len = data.slice(2,4).readUInt16BE(0);      //取body长度 buff.slice(2,4).readUInt16BE(0)
//     var targetBuffer = data.slice(4,4+len);         //取body
    let targetBuffer=Utils.clientMsgEncode(data);
    var receiveMsg = ClientMsg.Proto.ws_C2S_Login.decode(targetBuffer); //decode

    // var receiveMsg = wsProto.decode(data);
    var handle = Handle.handles[receiveMsg.MsgID];
    Log.debug('LoginMessage收到消息ID：' + receiveMsg.MsgID);

    var userSession = null;
    if(receiveMsg.MsgID == wsProto.ID_ws_C2S_Login){
        userSession = new UserSession(userSessionId, session);
    } else {
        userSession = UserSessionService.getSession(userSessionId);
    }

    if(!userSession){
        Log.error('LoginMessage收到非法的消息');
    return;
    }

    if(handle){
        handle(userSession, receiveMsg);
    } else {
        Log.error('LoginMessage收到未处理的消息ID: ' + receiveMsg.MsgID);
    }
}