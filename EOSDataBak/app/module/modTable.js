/**
 * Created by ujInfo on 2019/4/19.
 */
var modTable = module.exports;

const gameTrStruct = require('../model/gameTrStruct.js');
var  Global = require('../../libs/global/global.js');
var Utils = require('../../libs/util/utils.js');

/**
 * EOS 操作区域
 */

modTable.newBacTable=function (){
    
}

modTable.editBacTable=function (){

}

modTable.bacShuffle=function(tableID,gmAccount){
    return new Promise(function(resolve,reject){
      
        Global.eosTr.PushTr(gameTrStruct.getGameShuffleStruct(tableID,gmAccount))
        .then(function(trRst){
            resolve(trRst) ;
        })
        .catch(function(error){
            console.log(error)
            reject(error);
        }
    );
    })
}


modTable.bacPlayerBet =function (){

}

modTable.closeTable =function (){

}

modTable.continueTable =function (){

}

modTable.dealerSeed =function (){

}

modTable.serverSeed =function (tableID,seedCode,gmAccount){
    return new Promise(function(resolve,reject){
      
        Global.eosTr.PushTr(gameTrStruct.getServerSeedStruct(tableID,seedCode,gmAccount))
        .then(function(trRst){
           
            resolve(trRst) ;
        })
        .catch(function(error){
            console.log(error)
            reject(error);
        }
    );
    })

}

modTable.dealerWitdaw =function (){

}

modTable.deposiTable =function (){

}

modTable.endBet =function (tableID,gmAccount){
    return new Promise(function(resolve,reject){
      
        Global.eosTr.PushTr(gameTrStruct.getEndBetStruct(tableID,gmAccount))
        .then(function(trRst){
           
            resolve(trRst) ;
        })
        .catch(function(error){
            console.log(error)
            reject(error);
        }
    );
    })
}

modTable.exitTruteShip =function (){

}

modTable.trusteeShip =function (){

}

modTable.pauseTableDea =function (){

}


modTable.verDealerSeed =function (){

}

modTable.verServerSeed =function (tableID,seed,gmAccount){
    return new Promise(function(resolve,reject){
      
        Global.eosTr.PushTr(gameTrStruct.getVerServerSeedStruct(tableID,seed,gmAccount))
        .then(function(trRst){
           
            resolve(trRst) ;
        })
        .catch(function(error){
            console.log(error)
            reject(error);
        }
    );
    })

}


modTable.newSicTable=function (){

}

modTable.editSicTable=function (){

}

modTable.sicPlayerBet =function (){

}

/**
 * DB 操作区域
 */

modTable.getTableID = function(cb){
    var sql = 'SELECT max(id) as tableID FROM `T_TABLE_BAC`';
    
    Global.userDb.query(sql, [], function(err, res){
        if (err) {
            Utils.invokeCallback(cb, err, null);
        } else {
            if (res && res.length == 1) {
                var tableID = res[0].tableID;
                if (!!tableID){
                    tableID=tableID+1;
                }else{
                    tableID=1;
                }
                Utils.invokeCallback(cb, null, tableID);
            } else {
                Utils.invokeCallback(cb, null, null);
            }
        }
    });
}

modTable.dbGetDealerTables = function (dealer,cb){
    var sql = 'SELECT * FROM `T_TABLE_BAC` where `dealer` = ?';
    var args = [dealer];
    Global.userDb.query(sql, args, function(err, res){
        if (err) {
            Utils.invokeCallback(cb, err, null);
        } else {
            if (res && res.length >= 1) {
                Utils.invokeCallback(cb, null, res);
            } else {
                Utils.invokeCallback(cb, null, null);
            }
        }
    });
}

modTable.dbGetTableStatus = function(tableID,cb){
    var sql = 'SELECT trusteeship as iTtrusteeShip,isclose,ispause FROM `T_TABLE_BAC` where `id` = ?';
    var args = [tableID];

    Global.userDb.query(sql, args, function(err, res){
        if (err) {
            Utils.invokeCallback(cb, err, null);
        } else {
            if (res && res.length == 1) {
                var rst = res[0];
                Utils.invokeCallback(cb, null, rst);
            } else {
                Utils.invokeCallback(cb, null, null);
            }
        }
    });
}

modTable.DBSetTableTrusteeship = function(tableID,trusteeShip,cb){
    var sql = 'UPDATE `T_TABLE_BAC` SET trusteeship=? ,updatetime=NOW() where `id` = ?';
    var args = [trusteeShip,tableID];

    Global.userDb.query(sql, args, function(err, res){
        if (err) {
            // Log.error('UserDao.update：' + err);
            Utils.invokeCallback(cb, err, null);
        }
        Utils.invokeCallback(cb);
    });
}

modTable.DBSetTableIsClose = function(tableID,isClose,cb){
    var sql = 'UPDATE `T_TABLE_BAC` SET isclose=? , updatetime=NOW() where `id` = ?';
    var args = [isClose,tableID];

    Global.userDb.query(sql, args, function(err, res){
        if (err) {
            // Log.error('UserDao.update：' + err);
            Utils.invokeCallback(cb, err, null);
        }
        Utils.invokeCallback(cb, null, res);
    });
}

modTable.DBSetTableIsPause = function(tableID,isPause,cb){
    var sql = 'UPDATE `T_TABLE_BAC` SET ispause=?, updatetime=NOW() where `id` = ?';
    var args = [isPause,tableID];

    Global.userDb.query(sql, args, function(err, res){
        if (err) {
            // Log.error('UserDao.update：' + err);
            Utils.invokeCallback(cb, err, null);
        }
        Utils.invokeCallback(cb, null, res);
    });
}

modTable.DBAddTableOnLineUsers = function(tableID,cb){
    var sql = 'UPDATE `T_TABLE_BAC` SET player_num=player_num+1  where `id` = ?';
    var args = [tableID];

    Global.userDb.query(sql, args, function(err, res){
        if (err) {
            // Log.error('UserDao.update：' + err);
            Utils.invokeCallback(cb, err, null);
        }
        Utils.invokeCallback(cb, null, res);
    });
}

modTable.DBReduceTableOnLineUsers = function(tableID,cb){
    var sql = 'UPDATE `T_TABLE_BAC` SET player_num=player_num-1  where `id` = ?';
    var args = [tableID];

    Global.userDb.query(sql, args, function(err, res){
        if (err) {
            // Log.error('UserDao.update：' + err);
            Utils.invokeCallback(cb, err, null);
        }
        Utils.invokeCallback(cb, null, res);
    });
}


modTable.DBSetTableOnLineUsers = function(tableID,playerNum,cb){
    var sql = 'UPDATE `T_TABLE_BAC` SET player_num=?  where `id` = ?';
    var args = [playerNum,tableID];

    Global.userDb.query(sql, args, function(err, res){
        if (err) {
            // Log.error('UserDao.update：' + err);
            Utils.invokeCallback(cb, err, null);
        }
        Utils.invokeCallback(cb, null, res);
    });
}

modTable.DBEditTable = function (dbTable,cb){
    var sql= 'UPDATE `T_TABLE_BAC` SET trusteeship=?,isclose=?,ispause=?, amountSymbol=?, deposit=?, dealerBalance=?, validCardVec=?,'+
    'carbBoot=?, ifPrivate=?, limit_red_min=?, limit_red_max=?, oneRoundMaxTotalBet_BP=?, minPerBet_BP=?, oneRoundMaxTotalBet_Push=?,'+
    'minPerBet_Push=?, oneRoundMaxTotalBet_Tie=?, minPerBet_Tie=?,oneRoundDealerMaxPay=?, commission_rate_agent=?,'+
    'commission_rate_player=?, updatetime=NOW()  where `id` = ?';
    var args=[dbTable.trusteeship,dbTable.isclose,dbTable.ispause, dbTable.amountSymbol, dbTable.deposit, dbTable.dealerBalance, dbTable.validCardVec,
        dbTable.carbBoot, dbTable.ifPrivate, dbTable.limit_red_min, dbTable.limit_red_max, dbTable.oneRoundMaxTotalBet_BP, dbTable.minPerBet_BP, 
        dbTable.oneRoundMaxTotalBet_Push,dbTable.minPerBet_Push, dbTable.oneRoundMaxTotalBet_Tie, dbTable.minPerBet_Tie,dbTable.oneRoundDealerMaxPay, 
        dbTable.commission_rate_agent,dbTable.commission_rate_player,dbTable.id]
    Global.userDb.query(sql, args, function(err, res){
        if (err) {
            // Log.error('UserDao.update：' + err);
            Utils.invokeCallback(cb, err, null);
        }
        Utils.invokeCallback(cb, null, res);
    });
}




