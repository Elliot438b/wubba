/**
 * Created by ujInfo on 2019/4/21.
 */
var Log = require('../../libs/log/log.js');
// var MyDate = require('../../libs/date/date.js');
// var Server = require('../../libs/config/server.js');
// var Global = require('../../libs/global/global.js');
// var RpcProto = require('../proto/rpcProto.js');
var WSProto = require('../proto/wsProto.js');
var Handle = require('./wsMessageHandle.js');
// var Rpc = require('./rpc.js');

var wsMessage = module.exports;


wsMessage.receive = function(session, receiveBuff) {
    
    var receiveMsg = WSProto.decode(receiveBuff);
    console.log('8、wsMessage.js wsMessage.receive:------begin----');// + receiveMsg) ;
    // console.log(receiveMsg) ;
    console.log(receiveMsg.MsgID) ;
    console.log('8、wsMessage.js wsMessage.receive:------end----');//
    Log.debug('receiveMsg:' + receiveMsg);
    var handle = Handle.handles[receiveMsg.MsgID];

    Log.debug('wsMessage收到消息ID：' + receiveMsg.MsgID);
    // console.log('8、wsMessage.js wsMessage.receive:' + handle) ;
    if(handle){
        handle(receiveMsg, session);
    } else {
        Log.error('wsMessage收到未处理的消息ID: ' + receiveMsg.msgId);
    }
}

wsMessage.send = function(session, sendBuff) {
    if(!session){
        Log.error('wsMessage session is not exists');
        return;
    }

    session.send(sendBuff);
}