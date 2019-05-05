/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function CardInfo(){
	this.cardNum = 0;
	this.cardColor = '';

}

CardInfo.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'int32', this.cardNum);
	Msg.encode(buff, 'string', this.cardColor);

    var result = buff.pack();
    buff = null;
    return result;
}

CardInfo.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.cardNum = Msg.decode(buff, 'int32');
	this.cardColor = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = CardInfo;