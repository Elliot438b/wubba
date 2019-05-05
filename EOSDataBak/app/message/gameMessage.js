/**
 * Created by ujInfo on 19/4/26.
 */

var Utils = require('../../libs/util/utils.js');
var Log = require('../../libs/log/log.js');
var Server = require('../../libs/config/server.js');
var UserSession = require('../../libs/session/userSession.js');
var UserSessionService = require('../../libs/session/userSessionService.js');
var Proto = require('../proto/gameProto.js');
var Handle = require('./gameMessageHandle.js');
var wsProto = require('../proto/wsProto.js');

var GameMessage = module.exports;

GameMessage.receive = function(session, data) {
    var receiveBuff = data.msgBody;
    var userSessionId = data.userSessionId;
    var receiveMsg = wsProto.decode(receiveBuff);
    var handle = Handle.handles[receiveMsg.MsgID];
    Log.debug('GameMessage收到消息ID：' + receiveMsg.MsgID);

    var userSession = null;
    if(receiveMsg.MsgID == wsProto.ID_ws_C2S_Login || receiveMsg.MsgID == wsProto.ID_ws_C2S_GetTableID){
        userSession = new UserSession(userSessionId, session);
    } else {
        userSession = UserSessionService.getSession(userSessionId);
    }

    if(!userSession){
        Log.error('GameMessage收到非法的消息');
        return;
    }

    if(handle){
        handle(userSession, receiveMsg);
    } else {
        Log.error('GameMessage收到未处理的消息ID: ' + receiveMsg.MsgID);
    }
}