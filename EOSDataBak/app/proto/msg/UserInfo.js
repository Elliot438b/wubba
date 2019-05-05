/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function UserInfo(){
	this.eosaccount = '';
	this.nickname = '';
	this.logo = '';
	this.pubkey = '';
	this.eos_balance = '';
	this.gcc_balance = '';
	this.user_type = 0;
	this.createtime = '';
	this.online = 0;
	this.lasttime = '';
	this.lastip = '';
	this.code = '';

}

UserInfo.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'string', this.eosaccount);
	Msg.encode(buff, 'string', this.nickname);
	Msg.encode(buff, 'string', this.logo);
	Msg.encode(buff, 'string', this.pubkey);
	Msg.encode(buff, 'string', this.eos_balance);
	Msg.encode(buff, 'string', this.gcc_balance);
	Msg.encode(buff, 'int32', this.user_type);
	Msg.encode(buff, 'string', this.createtime);
	Msg.encode(buff, 'int32', this.online);
	Msg.encode(buff, 'string', this.lasttime);
	Msg.encode(buff, 'string', this.lastip);
	Msg.encode(buff, 'string', this.code);

    var result = buff.pack();
    buff = null;
    return result;
}

UserInfo.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.eosaccount = Msg.decode(buff, 'string');
	this.nickname = Msg.decode(buff, 'string');
	this.logo = Msg.decode(buff, 'string');
	this.pubkey = Msg.decode(buff, 'string');
	this.eos_balance = Msg.decode(buff, 'string');
	this.gcc_balance = Msg.decode(buff, 'string');
	this.user_type = Msg.decode(buff, 'int32');
	this.createtime = Msg.decode(buff, 'string');
	this.online = Msg.decode(buff, 'int32');
	this.lasttime = Msg.decode(buff, 'string');
	this.lastip = Msg.decode(buff, 'string');
	this.code = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = UserInfo;