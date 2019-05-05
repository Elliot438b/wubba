/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');

var UserInfo = require('./UserInfo.js');


function ws_C2S_UpdateUser(){
	this.MsgID = 10002;
	this.User = new UserInfo();

}

ws_C2S_UpdateUser.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'UserInfo', this.User);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_C2S_UpdateUser.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.User.decode(Msg.decode(buff, 'UserInfo'));

    buff = null;
}


module.exports = ws_C2S_UpdateUser;