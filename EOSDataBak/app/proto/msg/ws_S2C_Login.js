/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');

var UserInfo = require('./UserInfo.js');
var RoomInfo = require('./RoomInfo.js');


function ws_S2C_Login(){
	this.MsgID = 20001;
	this.User = new UserInfo();
	this.Room = new RoomInfo();
	this.gsa = '';

}

ws_S2C_Login.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'UserInfo', this.User);
	Msg.encode(buff, 'RoomInfo', this.Room);
	Msg.encode(buff, 'string', this.gsa);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_S2C_Login.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.User.decode(Msg.decode(buff, 'UserInfo'));
	this.Room.decode(Msg.decode(buff, 'RoomInfo'));
	this.gsa = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = ws_S2C_Login;