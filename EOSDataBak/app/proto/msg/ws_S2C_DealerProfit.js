/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function ws_S2C_DealerProfit(){
	this.MsgID = 20022;
	this.eosaccount = '';

}

ws_S2C_DealerProfit.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'ushort', this.MsgID);
	Msg.encode(buff, 'string', this.eosaccount);

    var result = buff.pack();
    buff = null;
    return result;
}

ws_S2C_DealerProfit.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.MsgID = Msg.decode(buff, 'ushort');
	this.eosaccount = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = ws_S2C_DealerProfit;