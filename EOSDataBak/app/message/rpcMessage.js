/**
 * Created by egret on 16/1/22.
 */

var Log = require('../../libs/log/log.js');
var RpcProto = require('../proto/rpcProto.js');
var Handle = require('./rpcMessageHandle.js');

var RpcMessage = module.exports;

RpcMessage.receive = function(session, receiveBuff, callBack) {
    var receiveMsg = RpcProto.decode(receiveBuff);  //第一次解包

    var handle = Handle.handles[receiveMsg.MsgID];
    Log.debug('RpcMessage收到消息ID：' + receiveMsg.MsgID);

    if(handle){
        handle(session, receiveMsg, callBack);
    } else {
        Log.error('RpcMessage收到未处理的消息ID: ' + receiveMsg.MsgID);
    }
}