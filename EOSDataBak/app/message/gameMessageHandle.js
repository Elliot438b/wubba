/**
 * Created by ujInfo on 19/4/26.
 */

var GameMessageHandle = module.exports;

var Proto = require('../proto/gameProto.js');
var Utils = require('../../libs/util/utils.js');
var wsProto = require('../proto/wsProto.js');
var Auth = require('../module/auth.js');
// var User = require('../module/user.js');
// var Chat = require('../module/chat.js');
// var Scene = require('../module/scene.js');

GameMessageHandle.handles = {};
GameMessageHandle.handles[wsProto.ID_ws_C2S_Login] = function(userSession, data){
    // Auth.login(userSession, data.account);
    console.log('收到用户登录userSession is '+userSession);
    console.log('收到用户登录请求 is '+data);
    console.log(data);
}


GameMessageHandle.handles[wsProto.ID_ws_C2S_GetTableID] = function(userSession, data){
    Auth.GetTableID(userSession);
            // wsMessage.send(session, sendMsg.encode());
}


GameMessageHandle.handles[Proto.ID_user_login_c2s] = function(userSession, data){
    // Auth.login(userSession, data.account);
}
GameMessageHandle.handles[Proto.ID_user_joinScene_c2s] = function(userSession, data){
    // User.joinScene(userSession, data.sceneId);
}
GameMessageHandle.handles[Proto.ID_player_walk_c2s] = function(userSession, data){
    // Scene.walk(userSession, data.data.time, data.data.x, data.data.y, data.data.speed, data.data.radian);
}


GameMessageHandle.handles[Proto.ID_user_chat_c2s] = function(userSession, data){
    // Chat.talk(userSession, data.chatMsg, data.channel);
}