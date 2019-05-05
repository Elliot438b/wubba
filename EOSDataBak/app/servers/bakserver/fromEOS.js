/**
 * Created by ujInfo on 19/5/3.
 * 先取100条，如果还有则用带游标的方式
 * 否则就直接结束
 */

var FromEOS = module.exports;


var  Global = require('../../../libs/global/global.js');

FromEOS.BakData = async function(){
    //获取tableInfo数据
        let tableInfo= await Global.eosTr.GetTableInfoRows('gamemallards','gamemallards',Global.batchNum)
        console.log(tableInfo);
        console.log(tableInfo.rows[0].amountSymbol);
        
            FromEOS.InsertIntoLocalDB(tableInfo.rows);
            if (tableInfo.more){
                let beginBound=tableInfo.rows[tableInfo.rows.length-1].tableId+1;

                let isContinue = true;
                while (isContinue){
                    console.log(beginBound);
                    const tableRsts= await Global.eosTr.GetTableInfoAppointRows('gamemallards','gamemallards',Global.endBound,beginBound);   //scope,code,upper_bound,lower_bound
                    if (tableRsts.rows.length>0){
                        FromEOS.InsertIntoLocalDB(tableRsts.rows);
                        beginBound=tableRsts.rows[tableRsts.rows.length-1].tableId+1;
                        // endBound=beginBound+Global.batchNum;
                    } else{
                        isContinue=false;
                        console.log('合约数据备份完毕！');
                    }
                }
            }

};

FromEOS.InsertIntoLocalDB = function (tableMsg){
    if (tableMsg.length>0){
        let sqls=[];
        for (let i=0;i<tableMsg.length;i++){
            sqls.push('INSERT INTO T_TABLE_BAC_BAK(tableId,tableStatus,cardBoot,dealer,trusteeship,isPrivate,dealerBalance,'+
                'oneRoundMaxTotalBet_BP,minPerBet_BP,oneRoundMaxTotalBet_Tie,minPerBet_Tie,'+
                'oneRoundMaxTotalBet_Push,minPerBet_Push,oneRoundDealerMaxPay,minTableDeposit,'+
                'commission_rate_agent,commission_rate_player,upgradingFlag,amountSymbol,validCardVec,createtime) VALUES('+
                tableMsg[i].tableId +',\''+tableMsg[i].tableStatus+'\',\''+tableMsg[i].cardBoot+'\',\''+tableMsg[i].dealer+'\',\''+
                tableMsg[i].trusteeship+'\',\''+tableMsg[i].isPrivate+'\',\''+tableMsg[i].dealerBalance+'\',\''+tableMsg[i].oneRoundMaxTotalBet_BP+'\',\''+
                tableMsg[i].minPerBet_BP+'\',\''+tableMsg[i].oneRoundMaxTotalBet_Tie+'\',\''+tableMsg[i].minPerBet_Tie+'\',\''+
                tableMsg[i].oneRoundMaxTotalBet_Push+'\',\''+tableMsg[i].minPerBet_Push+'\',\''+tableMsg[i].oneRoundDealerMaxPay+'\',\''+
                tableMsg[i].minTableDeposit+'\',\''+tableMsg[i].commission_rate_agent+'\',\''+tableMsg[i].commission_rate_player+'\',\''+
                tableMsg[i].upgradingFlag+'\',\''+JSON.stringify(tableMsg[i].amountSymbol)+'\',\''+tableMsg[i].validCardVec+'\',NOW())');
        }
        // JSON.stringify(tableMsg[i].amountSymbol)
        Global.userDb.transExecute(sqls,function(err,res){
            if (err) {
                console.log(err);
            } else {
                // Utils.invokeCallback(cb, null, res);
                console.log('数据库操作成功！');
            }
        });
    }

}


//const result=await rpc.get_table_rows({"scope":"gamemallards", "code":"gamemallards", "table":"tablesinfo", "json": true});
// FromEOS.BakData11 = function(){
//     //获取tableInfo数据
//     return new Promise(function(resolve,reject){

//         let tableInfo= Global.eosTr.GetTableInfoRows('gamemallards','gamemallards',100)
//         .then(function(tableRst){
//             FromEOS.InsertIntoLocalDB(tableRst.rows);
//             if (tableRst.more){
//                 let beginBound=tableRst.rows[tableRst.rows.length-1].tableId+1;
//                 let endBound=beginBound+100;
//                 let isContinue = true;
//                 while (isContinue){
//                     const tableRsts= Global.eosTr.GetTableInfoAppointRows('gamemallards','gamemallards',endBound,beginBound);   //scope,code,upper_bound,lower_bound
//                     if (tableRsts.rows.length>0){
//                         FromEOS.InsertIntoLocalDB(tableRsts.rows);
//                         beginBound=tableRsts.rows[tableRsts.rows.length-1].tableId+1;
//                         endBound=beginBound+100;
//                     } else{
//                         isContinue=false;
//                     }
//                 }
//             }

//         })
//         .catch(function(error){
//             console.log(error)
//             // reject(error);
//         }) 
//     })
// }