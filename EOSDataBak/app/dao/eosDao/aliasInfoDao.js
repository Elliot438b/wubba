/**
 * Created by ujInfo on 2019/4/17.
 */
var AliasInfo = module.exports;

var Utils = require('../../../libs/util/utils.js');
var Global = require('../../../libs/global/global.js');

AliasInfo.insertTableInfo=function(eosAliasInfos,cb){

    if (eosAliasInfos.length>0){
        var sqls=[];
        for (let i=0;i<eosAliasInfos.length;i++){
            let tmpSql='INSERT INTO `t_alias_info_eos`(aliasId,account,create_time) values (\''+
            eosAliasInfos[i].aliasId +'\',\''+ eosAliasInfos[i].account + '\',NOW())'
            console.log(tmpSql);
            sqls.push(tmpSql);
        }
        Global.localDb.transExecute(sqls,function(err,res){
            if (err) {
                Utils.invokeCallback(cb, err, null);
            } else {
                Utils.invokeCallback(cb, null, eosAliasInfos);
            }
        });
    }
    
}