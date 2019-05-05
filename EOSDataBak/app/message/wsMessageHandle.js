/**
 *  Created by ujInfo on 2019/4/21.
 */
var wsMessageHandle = module.exports;

var wsProto = require('../proto/wsProto.js');

var modUser = require('../module/modUser.js');

var modTable = require('../module/modTable.js');

var wsMessage = require('./wsMessage.js');

var TableInfo = require('../proto/msg/TableInfo.js');

var ByteBuffer = require('../../libs/proto/ByteBuffer');
var p = require('../../app/proto/clientMsg/ClientMsg.js')



wsMessageHandle.handles = {};
wsMessageHandle.handles[wsProto.ID_ws_C2S_Login] = function(data, session){
   
    // console.log(data.MsgID);
    // console.log(data.eosaccount);
    modUser.dbGetUserByAccount(data.eosaccount,function(err,dbUser){
        if (err){
            console.log('Fails');
        } else {
            console.log('Success!');
            console.log(dbUser);
        }
    
    });
};

wsMessageHandle.handles[wsProto.ID_ws_C2S_GetTableID] = function(data, session){
   
    console.log('wsMessageHandle.js wsMessageHandle.handles[wsProto.ID_ws_C2S_GetTableID] is '+data.MsgID);
    // console.log(data.eosaccount);
    // modTable.getTableID(function(err,tableID){
    //     if (err){
    //         console.log('Fails');
    //     } else {
            
            // var sendMsg = new wsProto.ws_S2C_GetTableID();
            // sendMsg.TableID = tableID;
            // wsMessage.send(session, sendMsg.encode());

            var table = new p.Proto.ws_S2C_GetTableID();
            table.TableID = 1;
            var buffObj = p.Proto.ws_S2C_GetTableID.encode(table).finish(); //body
            var buff_MsgID = new Buffer(2); //消息id
            buff_MsgID.writeUInt16BE(table.MsgID);
            var buff_BodyLen = new Buffer(2); //body长度
            buff_BodyLen.writeUInt16BE(buffObj.length);
            var buff = Buffer.concat([buff_MsgID,buff_BodyLen,buffObj]); //拼接
            wsMessage.send(session,buff);
            console.log('Success!');
            console.log('tableID is '+tableID);
        // }
    // });
};

wsMessageHandle.handles[wsProto.ID_ws_C2S_Login] = function(data, session){
   
    console.log('wsMessageHandle.js wsMessageHandle.handles[wsProto.ID_ws_C2S_Login] is '+data.MsgID);
    console.log(data.eosaccount);
    // modTable.getTableID(function(err,tableID){
    //     if (err){
    //         console.log('Fails');
    //     } else {
    //         console.log('Success!');
    //         console.log('tableID is '+tableID);
    //         var sendMsg = new wsProto.ws_S2C_Login();
    //         sendMsg.TableID = tableID;
    //         wsMessage.send(session, sendMsg.encode());
    //     }
    // });
};

wsMessageHandle.handles[wsProto.ID_ws_C2S_Table_In] = function(data, session){

        console.log('wsMessageHandle.js wsMessageHandle.handles[wsProto.ws_C2S_Table_In] is '+data.MsgID);
        console.log('ws_C2S_Table_In '+   data.eosaccount);
        console.log('ws_C2S_Table_In '+  data.TableID);
        console.log('ws_C2S_Table_In '+  data.code);
        var sendMsg = new wsProto.ws_S2C_Table_In();
        sendMsg.eosaccount = data.eosaccount;
        var tmpTable=new TableInfo();
        tmpTable.id = 0;
        tmpTable.room_id = 0;
        tmpTable.dealer = data.eosaccount;
        tmpTable.game_type = 0;
        tmpTable.trusteeship = 0;
        tmpTable.isclose = 0;
        tmpTable.ispause = 0;
        tmpTable.amountSymbol = 'EOS';
        tmpTable.deposit = '500.0000 EOS';
        tmpTable.dealerBalance = '500.0000 EOS';
        tmpTable.validCardVec = 0;
        tmpTable.carbBoot = 0;
        tmpTable.ifPrivate = 0;
        tmpTable.limit_red_min = 'limit_red_min 5.0000 EOS';
        tmpTable.limit_red_max = 'limit_red_max 5.0000 EOS';
        tmpTable.oneRoundMaxTotalBet_BP ='oneRoundMaxTotalBet_BP 5.0000 EOS';
        tmpTable.minPerBet_BP = 'minPerBet_BP 5.0000 EOS';
        tmpTable.oneRoundMaxTotalBet_Push = 'oneRoundMaxTotalBet_Push 5.0000 EOS';
        tmpTable.minPerBet_Push = 'minPerBet_Push 5.0000 EOS';
        tmpTable.oneRoundMaxTotalBet_Tie = 'oneRoundMaxTotalBet_Tie 5.0000 EOS';
        tmpTable.minPerBet_Tie = 'minPerBet_Tie 5.0000 EOS';
        tmpTable.oneRoundDealerMaxPay = 'oneRoundDealerMaxPay 5.0000 EOS';
        tmpTable.commission_rate_agent = 'commission_rate_agent 5.0000 EOS';
        tmpTable.commission_rate_player = 'commission_rate_player 5.0000 EOS';
        tmpTable.code = 'code 5.0000 EOS';
        tmpTable.player_num = 0;
        tmpTable.createtime = 'createtime 5.0000 EOS';
        tmpTable.updatetime = 'updatetime 5.0000 EOS';
        sendMsg.TableInfo = tmpTable
        sendMsg.Status = 'pause';
        sendMsg.Waybill = '[00000,00010,01000]';

        wsMessage.send(session, sendMsg.encode());
	
};

wsMessageHandle.handles[wsProto.ID_ws_C2S_Table_Out] = function(data, session){
   
        console.log('wsMessageHandle.js wsMessageHandle.handles[wsProto.ws_C2S_Table_Out] is '+data.MsgID);
        console.log(data.eosaccount);
        console.log(data.TableID);

        var sendMsg = new wsProto.ws_S2C_Table_Out();

        sendMsg.eosaccount = data.eosaccount;
        sendMsg.TableID = data.TableID;
        sendMsg.Status = 'Success!';

        wsMessage.send(session, sendMsg.encode());
};


