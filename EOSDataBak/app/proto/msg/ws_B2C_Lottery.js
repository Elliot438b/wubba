/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function ws_B2C_Lottery(){
	this.MsgID = 30017;
	this.TableID = 0;
	this.Action = '';
	this.tableStatus = 0;
	this.EndcarbBoot = '';

}

ws_B2C_Lottery.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'int32', this.TableID);
	Msg.encode(buff, 'string', this.Action);
	Msg.encode(buff, 'int32', this.tableStatus);
	Msg.encode(buff, 'string', this.EndcarbBoot);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_B2C_Lottery.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.TableID = Msg.decode(buff, 'int32');
	this.Action = Msg.decode(buff, 'string');
	this.tableStatus = Msg.decode(buff, 'int32');
	this.EndcarbBoot = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = ws_B2C_Lottery;