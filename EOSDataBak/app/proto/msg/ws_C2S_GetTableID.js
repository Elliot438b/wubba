/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function ws_C2S_GetTableID(){
	this.MsgID = 10003;

}

ws_C2S_GetTableID.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_C2S_GetTableID.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');

    buff = null;
}


module.exports = ws_C2S_GetTableID;