/**
 * Created by ujInfo on 2019/4/18.
 */
var modEOS = module.exports;

const {EosTr} = require('../../libs/EOS/EOSTr.js');
const eosTrStruct = require('../model/eosTrStruct.js');
var  Global = require('../../libs/global/global.js');
var eosTr=new EosTr(Global.EOSDevConfig.httpEndpoint,Global.EOSDevConfig.keyProvider,Global.EOSDevConfig.chainId);
// var eosTr=new EosTr(Global.EOSReleaseConfig.httpEndpoint,Global.EOSReleaseConfig.keyProvider,Global.EOSReleaseConfig.chainId);

/**
 * 根据主键查询智能合约中，指定的表
 */
modEOS.getTableMsg = function(scope,code,table){

     eosTr.GetTableRows(scope,code,table)
      .then(function(trRst){
            console.log(trRst);
            return trRst;
      })
      .catch(function(error){
        console.log(error)
    }
    );
}

/**
 * 玩家游戏赋权
 */
modEOS.gamePermission=function (trStruct){
    return new Promise(function(resolve,reject){
        // var myDate = new Date();
        // console.log('gettrStruct begin '+ myDate.toLocaleTimeString());    
    // eosTr.PushTr(eosTrStruct.gettrStruct())
    eosTr.PushTr(trStruct)
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

// modEOS.gamePermission=function (){
//     return new Promise(function(resolve,reject){
//         var myDate = new Date();
//         console.log('gettrStruct begin '+ myDate.toLocaleTimeString());    
//     // eosTr.PushTr(eosTrStruct.gettrStruct())
//     eosTr.PushTr(eosTrStruct.getSicGamePermissionStruct())
//         .then(function(trRst){
           
//             resolve(trRst) ;
//         })
//         .catch(function(error){
//             console.log(error)
//             reject(error);
//         }
//     );
//     })
// }

/**
 * 查询用户余额
 */
modEOS.getAccountBalance=function(){
    return new Promise(function(resolve,reject){
        var myDate = new Date();
        console.log('gettrStruct begin '+ myDate.toLocaleTimeString());    
    // eosTr.PushTr(eosTrStruct.gettrStruct())
    eosTr.PushTr(eosTrStruct.getSicGamePermissionStruct())
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


