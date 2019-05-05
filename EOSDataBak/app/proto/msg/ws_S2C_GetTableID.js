/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');


function ws_S2C_GetTableID(){
	this.MsgID = 20003;
	this.TableID = 0;

}

ws_S2C_GetTableID.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'int32', this.TableID);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_S2C_GetTableID.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.TableID = Msg.decode(buff, 'int32');

    buff = null;
}


module.exports = ws_S2C_GetTableID;