/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function ws_C2S_SendSeed(){
	this.MsgID = 10012;
	this.TableID = 0;
	this.eosaccount = '';
	this.Sign = '';
	this.Tr = '';

}

ws_C2S_SendSeed.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'int32', this.TableID);
	Msg.encode(buff, 'string', this.eosaccount);
	Msg.encode(buff, 'string', this.Sign);
	Msg.encode(buff, 'string', this.Tr);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_C2S_SendSeed.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.TableID = Msg.decode(buff, 'int32');
	this.eosaccount = Msg.decode(buff, 'string');
	this.Sign = Msg.decode(buff, 'string');
	this.Tr = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = ws_C2S_SendSeed;