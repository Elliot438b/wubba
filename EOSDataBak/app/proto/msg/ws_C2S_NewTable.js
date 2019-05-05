/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');

var TableInfo = require('./TableInfo.js');


function ws_C2S_NewTable(){
	this.MsgID = 10004;
	this.Dealer = '';
	this.Table = new TableInfo();
	this.Sign = '';
	this.Tr = '';

}

ws_C2S_NewTable.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'string', this.Dealer);
	Msg.encode(buff, 'TableInfo', this.Table);
	Msg.encode(buff, 'string', this.Sign);
	Msg.encode(buff, 'string', this.Tr);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_C2S_NewTable.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.Dealer = Msg.decode(buff, 'string');
	this.Table.decode(Msg.decode(buff, 'TableInfo'));
	this.Sign = Msg.decode(buff, 'string');
	this.Tr = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = ws_C2S_NewTable;