/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');

var TableInfo = require('./TableInfo.js');


function ws_S2C_GetTables(){
	this.MsgID = 20006;
	this.Tables = new TableInfo();

}

ws_S2C_GetTables.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'TableInfo', this.Tables);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_S2C_GetTables.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.Tables.decode(Msg.decode(buff, 'TableInfo'));

    buff = null;
}


module.exports = ws_S2C_GetTables;