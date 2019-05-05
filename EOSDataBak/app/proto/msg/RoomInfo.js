/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function RoomInfo(){
	this.id = 0;
	this.dealer = '';
	this.room_name = '';
	this.createtime = '';
	this.code = '';

}

RoomInfo.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'int32', this.id);
	Msg.encode(buff, 'string', this.dealer);
	Msg.encode(buff, 'string', this.room_name);
	Msg.encode(buff, 'string', this.createtime);
	Msg.encode(buff, 'string', this.code);

    var result = buff.pack();
    buff = null;
    return result;
}

RoomInfo.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.id = Msg.decode(buff, 'int32');
	this.dealer = Msg.decode(buff, 'string');
	this.room_name = Msg.decode(buff, 'string');
	this.createtime = Msg.decode(buff, 'string');
	this.code = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = RoomInfo;