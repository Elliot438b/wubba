/**
 * Created by yangsong on 16/1/24.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function rpc_sendToGate_c2s(){
	this.MsgID = 205;
	this.userSessionId = 0;
	this.msgBody = null;

}

rpc_sendToGate_c2s.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'int64', this.userSessionId);
	Msg.encode(buff, 'buffer', this.msgBody);

    var result = buff.pack();
    buff = null;
    return result;
}

rpc_sendToGate_c2s.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.userSessionId = Msg.decode(buff, 'int64');
	this.msgBody = Msg.decode(buff, 'buffer');

    buff = null;
}


module.exports = rpc_sendToGate_c2s;