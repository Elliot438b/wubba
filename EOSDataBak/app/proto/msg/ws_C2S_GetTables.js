/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function ws_C2S_GetTables(){
	this.MsgID = 10006;
	this.Dealer = '';

}

ws_C2S_GetTables.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'string', this.Dealer);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_C2S_GetTables.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.Dealer = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = ws_C2S_GetTables;