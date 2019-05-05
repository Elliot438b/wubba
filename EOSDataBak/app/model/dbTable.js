/**
 * Created by ujInfo on 2019/4/19.
 */

function DBTable(){ 

    this.id = 0;                         // int not null,
    this.room_id = 0;                    // int,
    this.dealer = '';                    // varchar(15),
    this.game_type = 0;                  // int,
    this.trusteeship = 0;                // int default 0 comment '0：否 1：是',
    this.isclose = 0;                    // int default 0 comment '0：否 1：是',
    this.ispause = 0;                    // int default 0 comment '0：否 1：是',
    this.amountSymbol = '';              // varchar(10),
    this.deposit  = '';                  // varchar(64),
    this.dealerBalance = '';             // varchar(64),
    this.validCardVec = 0;               // int,
    this.carbBoot = 0;                   // int,
    this.ifPrivate = 0;                  // int,
    this.limit_red_min = '';             // varchar(64),
    this.limit_red_max = '';             // varchar(64),
    this.oneRoundMaxTotalBet_BP = '';    // varchar(64),
    this.minPerBet_BP = '';              // varchar(64),
    this.oneRoundMaxTotalBet_Push = '';  // varchar(64),
    this.minPerBet_Push = '';            // varchar(64),
    this.oneRoundMaxTotalBet_Tie = '';   // varchar(64),
    this.minPerBet_Tie = '';             // varchar(64),
    this.oneRoundDealerMaxPay = '';      // varchar(64) comment '根据庄设置的桌下注限制计算出的每轮庄最大的赔付额',
    this.commission_rate_agent = '';     // varchar(64),
    this.commission_rate_player = '';    // varchar(64),
    this.code = '';                      // varchar(20),
    this.player_num = 0;                 // int default 0 ,
    this.createtime = '';                // varchar(32),
    this.updatetime = '';                // varchar(32),
    }

module.exports = DBTable;