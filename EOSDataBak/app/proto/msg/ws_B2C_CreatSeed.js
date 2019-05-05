/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function ws_B2C_CreatSeed(){
	this.MsgID = 30012;
	this.TableID = 0;
	this.Dealer = '';

}

ws_B2C_CreatSeed.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'int32', this.TableID);
	Msg.encode(buff, 'string', this.Dealer);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_B2C_CreatSeed.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.TableID = Msg.decode(buff, 'int32');
	this.Dealer = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = ws_B2C_CreatSeed;