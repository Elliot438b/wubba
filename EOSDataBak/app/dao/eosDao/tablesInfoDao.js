/**
 * Created by ujInfo on 2019/4/17.
 */
var TablesInfoDao = module.exports;

var Utils = require('../../../libs/util/utils.js');

TablesInfoDao.getNewTableByAccount=function (account, cb) {
    var sql='SELECT * FROM `t_table_info_eos` WHERE dealer=? ORDER BY tableid DESC LIMIT 1';

}

TablesInfoDao.insertTableInfo=function(eosTableInfos,cb){

    if (eosTableInfos.length>0){
        var sqls=[];
        for (let i=0;i<eosTableInfos.length;i++){
            let tmpSql='INSERT INTO `t_table_info_eos`(tableId,cardBoot,dealer,trusteeship,isPrivate,dealerBalance,oneRoundMaxTotalBet_BP,minPerBet_BP,'+
            'oneRoundMaxTotalBet_Tie,minPerBet_Tie,oneRoundMaxTotalBet_Push,minPerBet_Push,oneRoundDealerMaxPay,minTableDeposit,amountSymbol,'+
            'commission_rate_agent,commission_rate_player,betStartTime,tableStatus,currRoundBetSum_BP,currRoundBetSum_Tie,currRoundBetSum_Push,'+
            'dealerSeedHash,serverSeedHash,dealerSeed,serverSeed,dSeedVerity,sSeedVerity,playerInfo,roundResult,playerHands,bankerHands,validCardVec,create_time) values ('+
            eosTableInfos[i].tableId +','+ eosTableInfos[i].cardBoot+',\''+eosTableInfos[i].dealer+'\','+eosTableInfos[i].trusteeship+','+
            eosTableInfos[i].isPrivate +',\''+ eosTableInfos[i].dealerBalance +'\',\''+ eosTableInfos[i].oneRoundMaxTotalBet_BP +'\',\''+ eosTableInfos[i].minPerBet_BP +'\',\''+ 
            eosTableInfos[i].oneRoundMaxTotalBet_Tie +'\',\''+ eosTableInfos[i].minPerBet_Tie +'\',\''+ eosTableInfos[i].oneRoundMaxTotalBet_Push +'\',\''+ 
            eosTableInfos[i].minPerBet_Push +'\',\''+ eosTableInfos[i].oneRoundDealerMaxPay +'\',\''+ eosTableInfos[i].minTableDeposit +'\',\''+ eosTableInfos[i].amountSymbol +'\',\''+ 
            eosTableInfos[i].commission_rate_agent +'\',\''+ eosTableInfos[i].commission_rate_player +'\','+ eosTableInfos[i].betStartTime +','+ eosTableInfos[i].tableStatus +',\''+ 
            eosTableInfos[i].currRoundBetSum_BP +',\''+ eosTableInfos[i].currRoundBetSum_Tie +'\',\''+ eosTableInfos[i].currRoundBetSum_Push +'\',\''+ eosTableInfos[i].dealerSeedHash +'\',\''+ 
            eosTableInfos[i].serverSeedHash +'\',\''+ eosTableInfos[i].dealerSeed +'\',\''+ eosTableInfos[i].serverSeed +'\','+ eosTableInfos[i].dSeedVerity +','+ 
            eosTableInfos[i].sSeedVerity +',\''+ eosTableInfos[i].playerInfo +'\',\''+ eosTableInfos[i].roundResult +'\',\''+ eosTableInfos[i].playerHands +'\',\''+ 
            eosTableInfos[i].bankerHands +'\',\''+ eosTableInfos[i].validCardVec + '\',NOW())'
        }
    }
    
}

TablesInfoDao.getUserByName = function (account, cb) {
    var sql = 'SELECT * FROM `user` WHERE `name` = ?';
    var args = [account];

    Global.userDb.query(sql, args, function(err, res){
        if (err) {
            Utils.invokeCallback(cb, err, null);
        } else {
            if (res && res.length == 1) {
                var rs = res[0];
                var dbUser = new DbUser();
                dbUser.id = rs.id;
                dbUser.name = rs.name;
                dbUser.money = rs.money;
                dbUser.create_time = rs.create_time;
                dbUser.last_login_time = rs.last_login_time;
                dbUser.last_scene_id = rs.last_scene_id;
                Utils.invokeCallback(cb, null, dbUser);
            } else {
                Utils.invokeCallback(cb, null, null);
            }
        }
    });
};
