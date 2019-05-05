/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function ws_C2S_PlayBet(){
	this.MsgID = 10014;
	this.TableID = 0;
	this.eosaccount = '';
	this.betDealer = '';
	this.betPlayer = '';
	this.betTie = '';
	this.betDealerPush = '';
	this.betPlayerPush = '';
	this.agentalias = '';
	this.nickname = '';

}

ws_C2S_PlayBet.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'int32', this.TableID);
	Msg.encode(buff, 'string', this.eosaccount);
	Msg.encode(buff, 'string', this.betDealer);
	Msg.encode(buff, 'string', this.betPlayer);
	Msg.encode(buff, 'string', this.betTie);
	Msg.encode(buff, 'string', this.betDealerPush);
	Msg.encode(buff, 'string', this.betPlayerPush);
	Msg.encode(buff, 'string', this.agentalias);
	Msg.encode(buff, 'string', this.nickname);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_C2S_PlayBet.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.TableID = Msg.decode(buff, 'int32');
	this.eosaccount = Msg.decode(buff, 'string');
	this.betDealer = Msg.decode(buff, 'string');
	this.betPlayer = Msg.decode(buff, 'string');
	this.betTie = Msg.decode(buff, 'string');
	this.betDealerPush = Msg.decode(buff, 'string');
	this.betPlayerPush = Msg.decode(buff, 'string');
	this.agentalias = Msg.decode(buff, 'string');
	this.nickname = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = ws_C2S_PlayBet;