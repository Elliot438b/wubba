/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');

function ws_S2C_GetUserPlayRoom(){
	this.MsgID = 20024;
	this.eosaccount = '';
	this.Rooms = [];

}

ws_S2C_GetUserPlayRoom.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'string', this.eosaccount);
	Msg.encode(buff, 'array', this.Rooms, 'undefined');

    var result = buff.pack();
    buff = null;
    return result;
}

ws_S2C_GetUserPlayRoom.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.eosaccount = Msg.decode(buff, 'string');
	this.Rooms = Msg.decode(buff, 'array', undefined);

    buff = null;
}


module.exports = ws_S2C_GetUserPlayRoom;