/**
 * Created by ujInfo on 2019/4/21.
 */

var ByteBuffer = require('../../../libs/proto/ByteBuffer.js');
var Msg = require('../../../libs/proto/Msg.js');



function TableInfo(){
	this.id = 0;
	this.room_id = 0;
	this.dealer = '';
	this.game_type = 0;
	this.trusteeship = 0;
	this.isclose = 0;
	this.ispause = 0;
	this.amountSymbol = '';
	this.deposit = '';
	this.dealerBalance = '';
	this.validCardVec = 0;
	this.carbBoot = 0;
	this.ifPrivate = 0;
	this.limit_red_min = '';
	this.limit_red_max = '';
	this.oneRoundMaxTotalBet_BP = '';
	this.minPerBet_BP = '';
	this.oneRoundMaxTotalBet_Push = '';
	this.minPerBet_Push = '';
	this.oneRoundMaxTotalBet_Tie = '';
	this.minPerBet_Tie = '';
	this.oneRoundDealerMaxPay = '';
	this.commission_rate_agent = '';
	this.commission_rate_player = '';
	this.code = '';
	this.player_num = 0;
	this.createtime = '';
	this.updatetime = '';

}

TableInfo.prototype.encode = function(){
    var buff = new ByteBuffer();
	Msg.encode(buff, 'int32', this.id);
	Msg.encode(buff, 'int32', this.room_id);
	Msg.encode(buff, 'string', this.dealer);
	Msg.encode(buff, 'int32', this.game_type);
	Msg.encode(buff, 'int32', this.trusteeship);
	Msg.encode(buff, 'int32', this.isclose);
	Msg.encode(buff, 'int32', this.ispause);
	Msg.encode(buff, 'string', this.amountSymbol);
	Msg.encode(buff, 'string', this.deposit);
	Msg.encode(buff, 'string', this.dealerBalance);
	Msg.encode(buff, 'int32', this.validCardVec);
	Msg.encode(buff, 'int32', this.carbBoot);
	Msg.encode(buff, 'int32', this.ifPrivate);
	Msg.encode(buff, 'string', this.limit_red_min);
	Msg.encode(buff, 'string', this.limit_red_max);
	Msg.encode(buff, 'string', this.oneRoundMaxTotalBet_BP);
	Msg.encode(buff, 'string', this.minPerBet_BP);
	Msg.encode(buff, 'string', this.oneRoundMaxTotalBet_Push);
	Msg.encode(buff, 'string', this.minPerBet_Push);
	Msg.encode(buff, 'string', this.oneRoundMaxTotalBet_Tie);
	Msg.encode(buff, 'string', this.minPerBet_Tie);
	Msg.encode(buff, 'string', this.oneRoundDealerMaxPay);
	Msg.encode(buff, 'string', this.commission_rate_agent);
	Msg.encode(buff, 'string', this.commission_rate_player);
	Msg.encode(buff, 'string', this.code);
	Msg.encode(buff, 'int32', this.player_num);
	Msg.encode(buff, 'string', this.createtime);
	Msg.encode(buff, 'string', this.updatetime);

    var result = buff.pack();
    buff = null;
    return result;
}

TableInfo.prototype.decode = function(ba){
    var buff = new ByteBuffer(ba);
	this.id = Msg.decode(buff, 'int32');
	this.room_id = Msg.decode(buff, 'int32');
	this.dealer = Msg.decode(buff, 'string');
	this.game_type = Msg.decode(buff, 'int32');
	this.trusteeship = Msg.decode(buff, 'int32');
	this.isclose = Msg.decode(buff, 'int32');
	this.ispause = Msg.decode(buff, 'int32');
	this.amountSymbol = Msg.decode(buff, 'string');
	this.deposit = Msg.decode(buff, 'string');
	this.dealerBalance = Msg.decode(buff, 'string');
	this.validCardVec = Msg.decode(buff, 'int32');
	this.carbBoot = Msg.decode(buff, 'int32');
	this.ifPrivate = Msg.decode(buff, 'int32');
	this.limit_red_min = Msg.decode(buff, 'string');
	this.limit_red_max = Msg.decode(buff, 'string');
	this.oneRoundMaxTotalBet_BP = Msg.decode(buff, 'string');
	this.minPerBet_BP = Msg.decode(buff, 'string');
	this.oneRoundMaxTotalBet_Push = Msg.decode(buff, 'string');
	this.minPerBet_Push = Msg.decode(buff, 'string');
	this.oneRoundMaxTotalBet_Tie = Msg.decode(buff, 'string');
	this.minPerBet_Tie = Msg.decode(buff, 'string');
	this.oneRoundDealerMaxPay = Msg.decode(buff, 'string');
	this.commission_rate_agent = Msg.decode(buff, 'string');
	this.commission_rate_player = Msg.decode(buff, 'string');
	this.code = Msg.decode(buff, 'string');
	this.player_num = Msg.decode(buff, 'int32');
	this.createtime = Msg.decode(buff, 'string');
	this.updatetime = Msg.decode(buff, 'string');

    buff = null;
}


module.exports = TableInfo;