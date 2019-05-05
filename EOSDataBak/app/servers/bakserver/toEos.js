/**
 * Created by ujInfo on 19/5/3.
 */

var ToEOS = module.exports;

var  Global = require('../../../libs/global/global.js');
var {commbacImport12Data,importToData} = require('../../eosTrMsg/bacMsg/bacImport12Data.js');
var  baseAuthor = require('../../../libs/EOS/baseAuthor');
var baseAc = require('../../../libs/EOS/baseAction.js');

// ToEOS.DataToEos = async function(){
//     let isContinue=true;
//     while(isContinue){
//         var sql = 'SELECT * FROM `T_TABLE_BAC_BAK` where `upgradingFlag`=1 ORDER BY id ASC LIMIT '+Global.batchNum;
//         Global.userDb.query(sql, null, function(err, res){
//             if (err) {
//                 Utils.invokeCallback(cb, err, null);
//             } else {
//                 if (res && res.length >= 1) {
//                     //调用合约方法
//                     try{
//                         let dataStruct =getImport12DataStruct(res);
//                         // const trRst = await Global.eosTr.PushTr(dataStruct);
//                         // console.log(trRst);
//                         for (let i=0;i<res.length;i++){
//                             let sqls=[];
//                             sqls.push('UPDATE `T_TABLE_BAC_BAK` SET `upgradingFlag` = 2 WHERE id='+res[i].id);
//                         }
//                         Global.userDb.transExecute(sqls);
//                     } catch(err){
//                         console.log(err)
//                     }                  
//                 } else {
//                     // Utils.invokeCallback(cb, null, null);
//                     isContinue=false;
//                     console.log('数据已经同步完成');
//                 }
//             }
//         });
//     }
// };

ToEOS.DataToEos = function(){
    return new Promise(function(resolve,reject){
    let isContinue=true;
    // while(isContinue){
        var sql = 'SELECT * FROM `T_TABLE_BAC_BAK` where `upgradingFlag`=1 ORDER BY id ASC LIMIT '+Global.batchNum;
        try{
        Global.userDb.query(sql, null, function(err, res){
            if (err) {
                // Utils.invokeCallback(cb, err, null);
                console.log(err);
            } else {
                if (res && res.length >= 1) {
                    // Utils.invokeCallback(cb, null, res);
                    //调用合约方法
                    Global.eosTr.PushTr(getImport12DataStruct(res))
                    .then(function(trRst){
                        console.log(trRst);
                        let sqls=[];
                        for (let i=0;i<res.length;i++){
                            sqls.push('UPDATE `T_TABLE_BAC_BAK` SET `upgradingFlag` = 2 WHERE id='+res[i].id);
                        }
                        Global.userDb.transExecute(sqls);
                        resolve(true) ;
                    })
                    .catch(function(error){
                        // isContinue=false;
                        console.log(error)
                        reject(false) ;
                    
                    });
                    // getImport12DataStruct(res);
                } else {
                    // Utils.invokeCallback(cb, null, null);
                    // isContinue=false;
                    console.log('数据已经同步完成');
                    resolve(false) ;
                }
            }
        });
    } catch(err){
        
        console.log(err);
        reject(false) ;
    }
})
}




getImport12DataStruct = function (tableMsg){
    _commbacImport12Data=new commbacImport12Data();
    for (let i=0;i<tableMsg.length;i++){
        import12Datads= new importToData();
        import12Datads.tableId=parseInt(tableMsg[i].tableId);
        import12Datads.tableStatus=parseInt(tableMsg[i].tableStatus);
        import12Datads.cardBoot=parseInt(tableMsg[i].cardBoot);
        import12Datads.dealer=tableMsg[i].dealer;
        if (tableMsg[i].trusteeship==0){
            import12Datads.trusteeship=false;
        } else {
            import12Datads.trusteeship=true;
        }
        if (tableMsg[i].isPrivate==0){
            import12Datads.isPrivate=false;
        } else {
            import12Datads.isPrivate=true;
        }
        import12Datads.dealerBalance=tableMsg[i].dealerBalance;
        import12Datads.oneRoundMaxTotalBet_BP=tableMsg[i].oneRoundMaxTotalBet_BP;
        import12Datads.minPerBet_BP=tableMsg[i].minPerBet_BP;
        import12Datads.oneRoundMaxTotalBet_Tie=tableMsg[i].oneRoundMaxTotalBet_Tie;
        import12Datads.minPerBet_Tie=tableMsg[i].minPerBet_Tie;
        import12Datads.oneRoundMaxTotalBet_Push=tableMsg[i].oneRoundMaxTotalBet_Push;
        import12Datads.minPerBet_Push=tableMsg[i].minPerBet_Push; 
        import12Datads.oneRoundDealerMaxPay=tableMsg[i].oneRoundDealerMaxPay;
        import12Datads.minTableDeposit=tableMsg[i].minTableDeposit;
        import12Datads.commission_rate_agent=parseFloat(tableMsg[i].commission_rate_agent);
        import12Datads.commission_rate_player=parseFloat(tableMsg[i].commission_rate_player);
        if (tableMsg[i].upgradingFlag==0){
            import12Datads.upgradingFlag=false;
        } else {
            import12Datads.upgradingFlag=true;
        }
        import12Datads.upgradingFlag=false;//tableMsg[i].upgradingFlag;
       
        import12Datads.amountSymbol=JSON.parse(tableMsg[i].amountSymbol);
       
        import12Datads.validCardVec= tableMsg[i].validCardVec.split(',');
        let author=new baseAuthor();
        let ac=new baseAc();

        author.actor=Global.bacGameName;
        ac.account=Global.bacGameName;    //合约名
        ac.name='import12data';    //方法名
      
        ac.authorization.push(author);
        ac.data=import12Datads;

        // console.log(import12DataDS);
        // console.log(ac);
       
        _commbacImport12Data.actions.push(ac);
    }
    console.log(_commbacImport12Data);
        return _commbacImport12Data;
   
}