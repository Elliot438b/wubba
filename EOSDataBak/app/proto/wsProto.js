/**
 * Created by ujInfo on 2019/4/21.
 */
var Log = require('../../libs/log/log.js');

var Proto = module.exports;

Proto.ws_C2S_Login = require('./msg/ws_C2S_Login.js');
Proto.ws_S2C_Login = require('./msg/ws_S2C_Login.js');
Proto.ws_C2S_UpdateUser = require('./msg/ws_C2S_UpdateUser.js');
Proto.ws_S2C_UpdateUser = require('./msg/ws_S2C_UpdateUser.js');
Proto.ws_C2S_GetTableID = require('./msg/ws_C2S_GetTableID.js');
Proto.ws_S2C_GetTableID = require('./msg/ws_S2C_GetTableID.js');
Proto.ws_C2S_NewTable = require('./msg/ws_C2S_NewTable.js');
Proto.ws_S2C_NewTable = require('./msg/ws_S2C_NewTable.js');
Proto.ws_C2S_UpdateTable = require('./msg/ws_C2S_UpdateTable.js');
Proto.ws_S2C_UpdateTable = require('./msg/ws_S2C_UpdateTable.js');
Proto.ws_C2S_GetTables = require('./msg/ws_C2S_GetTables.js');
Proto.ws_S2C_GetTables = require('./msg/ws_S2C_GetTables.js');
Proto.ws_C2S_Table_Dispose = require('./msg/ws_C2S_Table_Dispose.js');
Proto.ws_S2C_Table_Dispose = require('./msg/ws_S2C_Table_Dispose.js');
Proto.ws_C2S_Table_Pause = require('./msg/ws_C2S_Table_Pause.js');
Proto.ws_S2C_Table_Pause = require('./msg/ws_S2C_Table_Pause.js');
Proto.ws_C2S_Table_Close = require('./msg/ws_C2S_Table_Close.js');
Proto.ws_S2C_Table_Close = require('./msg/ws_S2C_Table_Close.js');
Proto.ws_C2S_Table_In = require('./msg/ws_C2S_Table_In.js');
Proto.ws_S2C_Table_In = require('./msg/ws_S2C_Table_In.js');
Proto.ws_C2S_Table_Out = require('./msg/ws_C2S_Table_Out.js');
Proto.ws_S2C_Table_Out = require('./msg/ws_S2C_Table_Out.js');
Proto.ws_C2S_SendSeed = require('./msg/ws_C2S_SendSeed.js');
Proto.ws_S2C_SendSeed = require('./msg/ws_S2C_SendSeed.js');
Proto.ws_B2C_CreatSeed = require('./msg/ws_B2C_CreatSeed.js');
Proto.ws_C2S_SendTxtSeed = require('./msg/ws_C2S_SendTxtSeed.js');
Proto.ws_S2C_SendTxtSeed = require('./msg/ws_S2C_SendTxtSeed.js');
Proto.ws_B2C_CreatTxtSeed = require('./msg/ws_B2C_CreatTxtSeed.js');
Proto.ws_C2S_PlayBet = require('./msg/ws_C2S_PlayBet.js');
Proto.ws_S2C_PlayBet = require('./msg/ws_S2C_PlayBet.js');
Proto.ws_B2C_PlayBet = require('./msg/ws_B2C_PlayBet.js');
Proto.ws_C2S_PlayerBet = require('./msg/ws_C2S_PlayerBet.js');
Proto.ws_S2C_PlayerBet = require('./msg/ws_S2C_PlayerBet.js');
Proto.ws_B2C_StopBet = require('./msg/ws_B2C_StopBet.js');
Proto.ws_B2C_EndBet = require('./msg/ws_B2C_EndBet.js');
Proto.ws_B2C_Lottery = require('./msg/ws_B2C_Lottery.js');
Proto.ws_B2C_BeginCarbBoot = require('./msg/ws_B2C_BeginCarbBoot.js');
Proto.ws_B2C_BeginRound = require('./msg/ws_B2C_BeginRound.js');
Proto.ws_B2C_BeginBet = require('./msg/ws_B2C_BeginBet.js');
Proto.ws_C2S_PlayerProfit = require('./msg/ws_C2S_PlayerProfit.js');
Proto.ws_S2C_PlayerProfit = require('./msg/ws_S2C_PlayerProfit.js');
Proto.ws_C2S_DealerProfit = require('./msg/ws_C2S_DealerProfit.js');
Proto.ws_S2C_DealerProfit = require('./msg/ws_S2C_DealerProfit.js');
Proto.ws_C2S_AgentProfit = require('./msg/ws_C2S_AgentProfit.js');
Proto.ws_S2C_AgentProfit = require('./msg/ws_S2C_AgentProfit.js');
Proto.ws_C2S_GetUserPlayRoom = require('./msg/ws_C2S_GetUserPlayRoom.js');
Proto.ws_S2C_GetUserPlayRoom = require('./msg/ws_S2C_GetUserPlayRoom.js');
Proto.ws_C2S_GetCollectionTables = require('./msg/ws_C2S_GetCollectionTables.js');
Proto.ws_S2C_GetCollectionTables = require('./msg/ws_S2C_GetCollectionTables.js');
Proto.UserInfo = require('./msg/UserInfo.js');
Proto.RoomInfo = require('./msg/RoomInfo.js');
Proto.TableInfo = require('./msg/TableInfo.js');
Proto.CardInfo = require('./msg/CardInfo.js');


Proto.ID_ws_C2S_Login = 10001;
Proto.ID_ws_S2C_Login = 20001;
Proto.ID_ws_C2S_UpdateUser = 10002;
Proto.ID_ws_S2C_UpdateUser = 20002;
Proto.ID_ws_C2S_GetTableID = 10003;
Proto.ID_ws_S2C_GetTableID = 20003;
Proto.ID_ws_C2S_NewTable = 10004;
Proto.ID_ws_S2C_NewTable = 20004;
Proto.ID_ws_C2S_UpdateTable = 10005;
Proto.ID_ws_S2C_UpdateTable = 20005;
Proto.ID_ws_C2S_GetTables = 10006;
Proto.ID_ws_S2C_GetTables = 20006;
Proto.ID_ws_C2S_Table_Dispose = 10007;
Proto.ID_ws_S2C_Table_Dispose = 20007;
Proto.ID_ws_C2S_Table_Pause = 10008;
Proto.ID_ws_S2C_Table_Pause = 20008;
Proto.ID_ws_C2S_Table_Close = 10009;
Proto.ID_ws_S2C_Table_Close = 20009;
Proto.ID_ws_C2S_Table_In = 10010;
Proto.ID_ws_S2C_Table_In = 20010;
Proto.ID_ws_C2S_Table_Out = 10011;
Proto.ID_ws_S2C_Table_Out = 20011;
Proto.ID_ws_C2S_SendSeed = 10012;
Proto.ID_ws_S2C_SendSeed = 20012;
Proto.ID_ws_B2C_CreatSeed = 30012;
Proto.ID_ws_C2S_SendTxtSeed = 10013;
Proto.ID_ws_S2C_SendTxtSeed = 20013;
Proto.ID_ws_B2C_CreatTxtSeed = 30013;
Proto.ID_ws_C2S_PlayBet = 10014;
Proto.ID_ws_S2C_PlayBet = 20014;
Proto.ID_ws_B2C_PlayBet = 30014;
Proto.ID_ws_C2S_PlayerBet = 10015;
Proto.ID_ws_S2C_PlayerBet = 20015;
Proto.ID_ws_B2C_StopBet = 30015;
Proto.ID_ws_B2C_EndBet = 30016;
Proto.ID_ws_B2C_Lottery = 30017;
Proto.ID_ws_B2C_BeginCarbBoot = 30018;
Proto.ID_ws_B2C_BeginRound = 30019;
Proto.ID_ws_B2C_BeginBet = 30020;
Proto.ID_ws_C2S_PlayerProfit = 10021;
Proto.ID_ws_S2C_PlayerProfit = 20021;
Proto.ID_ws_C2S_DealerProfit = 10022;
Proto.ID_ws_S2C_DealerProfit = 20022;
Proto.ID_ws_C2S_AgentProfit = 10023;
Proto.ID_ws_S2C_AgentProfit = 20023;
Proto.ID_ws_C2S_GetUserPlayRoom = 10024;
Proto.ID_ws_S2C_GetUserPlayRoom = 20024;
Proto.ID_ws_C2S_GetCollectionTables = 10025;
Proto.ID_ws_S2C_GetCollectionTables = 20025;


var dic = {
	"10001":"ws_C2S_Login",
	"20001":"ws_S2C_Login",
	"10002":"ws_C2S_UpdateUser",
	"20002":"ws_S2C_UpdateUser",
	"10003":"ws_C2S_GetTableID",
	"20003":"ws_S2C_GetTableID",
	"10004":"ws_C2S_NewTable",
	"20004":"ws_S2C_NewTable",
	"10005":"ws_C2S_UpdateTable",
	"20005":"ws_S2C_UpdateTable",
	"10006":"ws_C2S_GetTables",
	"20006":"ws_S2C_GetTables",
	"10007":"ws_C2S_Table_Dispose",
	"20007":"ws_S2C_Table_Dispose",
	"10008":"ws_C2S_Table_Pause",
	"20008":"ws_S2C_Table_Pause",
	"10009":"ws_C2S_Table_Close",
	"20009":"ws_S2C_Table_Close",
	"10010":"ws_C2S_Table_In",
	"20010":"ws_S2C_Table_In",
	"10011":"ws_C2S_Table_Out",
	"20011":"ws_S2C_Table_Out",
	"10012":"ws_C2S_SendSeed",
	"20012":"ws_S2C_SendSeed",
	"30012":"ws_B2C_CreatSeed",
	"10013":"ws_C2S_SendTxtSeed",
	"20013":"ws_S2C_SendTxtSeed",
	"30013":"ws_B2C_CreatTxtSeed",
	"10014":"ws_C2S_PlayBet",
	"20014":"ws_S2C_PlayBet",
	"30014":"ws_B2C_PlayBet",
	"10015":"ws_C2S_PlayerBet",
	"20015":"ws_S2C_PlayerBet",
	"30015":"ws_B2C_StopBet",
	"30016":"ws_B2C_EndBet",
	"30017":"ws_B2C_Lottery",
	"30018":"ws_B2C_BeginCarbBoot",
	"30019":"ws_B2C_BeginRound",
	"30020":"ws_B2C_BeginBet",
	"10021":"ws_C2S_PlayerProfit",
	"20021":"ws_S2C_PlayerProfit",
	"10022":"ws_C2S_DealerProfit",
	"20022":"ws_S2C_DealerProfit",
	"10023":"ws_C2S_AgentProfit",
	"20023":"ws_S2C_AgentProfit",
	"10024":"ws_C2S_GetUserPlayRoom",
	"20024":"ws_S2C_GetUserPlayRoom",
	"10025":"ws_C2S_GetCollectionTables",
	"20025":"ws_S2C_GetCollectionTables"
}

Proto.decode = function(buff){
	var msgId = buff.readUInt16BE(0)
	if(!dic[msgId]){
		Log.error('收到未知消息ID：' + msgId);
		return;
	}
	var data = new Proto[dic[msgId]]();
	data.decode(buff);
	return data;
}