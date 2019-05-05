/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function ws_S2C_UpdateTable(){
	this.MsgID = 20005;
	this.Status = '';

}

ws_S2C_UpdateTable.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'string', this.Status);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_S2C_UpdateTable.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.Status = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = ws_S2C_UpdateTable;