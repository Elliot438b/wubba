/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');

var CardInfo = require('./CardInfo.js');



function ws_B2C_BeginCarbBoot(){
	this.MsgID = 30018;
	this.TableID = 0;
	this.FirstCard = new CardInfo();
	this.ThreeResults = [];

}

ws_B2C_BeginCarbBoot.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'int32', this.TableID);
	Msg.encode(buff, 'CardInfo', this.FirstCard);
	Msg.encode(buff, 'array', this.ThreeResults, 'undefined');

    var result = buff.pack();
    buff = null;
    return result;
}

ws_B2C_BeginCarbBoot.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.TableID = Msg.decode(buff, 'int32');
	this.FirstCard.decode(Msg.decode(buff, 'CardInfo'));
	this.ThreeResults = Msg.decode(buff, 'array', undefined);

    buff = null;
}


module.exports = ws_B2C_BeginCarbBoot;