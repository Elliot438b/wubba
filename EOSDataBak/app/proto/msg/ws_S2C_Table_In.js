/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');

var TableInfo = require('./TableInfo.js');


function ws_S2C_Table_In(){
	this.MsgID = 20010;
	this.eosaccount = '';
	this.TableInfo = new TableInfo();
	this.Status = '';
	this.Waybill = '';

}

ws_S2C_Table_In.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'string', this.eosaccount);
	Msg.encode(buff, 'TableInfo', this.TableInfo);
	Msg.encode(buff, 'string', this.Status);
	Msg.encode(buff, 'string', this.Waybill);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_S2C_Table_In.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.eosaccount = Msg.decode(buff, 'string');
	this.TableInfo.decode(Msg.decode(buff, 'TableInfo'));
	this.Status = Msg.decode(buff, 'string');
	this.Waybill = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = ws_S2C_Table_In;