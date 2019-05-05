/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function ws_S2C_Table_Pause(){
	this.MsgID = 20008;
	this.TableID = 0;
	this.Status = '';
	this.tableStatus = 0;

}

ws_S2C_Table_Pause.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'int32', this.TableID);
	Msg.encode(buff, 'string', this.Status);
	Msg.encode(buff, 'int32', this.tableStatus);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_S2C_Table_Pause.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.TableID = Msg.decode(buff, 'int32');
	this.Status = Msg.decode(buff, 'string');
	this.tableStatus = Msg.decode(buff, 'int32');

    buff = null;
}


module.exports = ws_S2C_Table_Pause;