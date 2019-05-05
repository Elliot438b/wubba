/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function ws_C2S_Table_Out(){
	this.MsgID = 10011;
	this.eosaccount = '';
	this.TableID = 0;

}

ws_C2S_Table_Out.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'string', this.eosaccount);
	Msg.encode(buff, 'int32', this.TableID);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_C2S_Table_Out.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.eosaccount = Msg.decode(buff, 'string');
	this.TableID = Msg.decode(buff, 'int32');

    buff = null;
}


module.exports = ws_C2S_Table_Out;