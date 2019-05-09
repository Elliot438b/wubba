const fetch = require('node-fetch'); 
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');
const { TextDecoder, TextEncoder } = require('util'); 
const {Api, ApiInterfaces, JsonRpc, Numeric, RpcInterfaces, RpcError, Serialize } = require('eosjs');
// var  Global = require('../global/global.js');

// const rpc = new JsonRpc(Global.EOSDevConfig.httpEndpoint, { fetch });
// const ServerSignatureProvider = new JsSignatureProvider(Global.EOSDevConfig.keyProvider);

// const apiServer = new Api({ rpc, 
//     // authorityProvider:EosConfig.keyPubProvider,
//     ServerSignatureProvider,
//     chainId:Global.EOSDevConfig.chainId,
//     textDecoder: new TextDecoder(), 
//     textEncoder: new TextEncoder() });

var rpc,ServerSignatureProvider,apiServer,gccChainID;

var EosTr=/** @class */ (function () {
    /**
     * @param args
     *    
     *    * httpEndpoint: chain URL
     *    * keyProvider: private key of account
     *    * chianID: chain ID
     */
    function EosTr(httpEndpoint,keyProvider,chianID){
        rpc = new JsonRpc(httpEndpoint, { fetch });
        ServerSignatureProvider = new JsSignatureProvider(keyProvider);
        apiServer = new Api({ rpc, 
            ServerSignatureProvider,
            chainId:chianID,
            textDecoder: new TextDecoder(), 
            textEncoder: new TextEncoder() });
        gccChainID=chianID;
           
    }
    EosTr.prototype.tst= function () {
        return new Promise(function(resolve,reject){
            try{
                rpc.get_info()
                .then(function(suc){
                    resolve(suc);       
                });
                 
            }catch(e)
            {
                reject(e);
                console.log(e);
            }
        })
    };

    EosTr.prototype.GetInfo=function(){
        return new Promise(function(resolve,reject){
            rpc.get_info()
                .then(function(suc){
                    resolve(suc);
                })
        })
    }

    EosTr.prototype.GetCurBalance=function(code,account,symbol){
        return new Promise(function(resolve,reject){
            rpc.get_currency_balance(code,account,symbol)
                .then(function(suc){
                    resolve(suc);
                })
        })
    }

    EosTr.prototype.getEOSPublicKey=function(account){
        return new Promise(function(resolve,reject){
            rpc.get_account(account)
                .then(function(suc){
                    resolve(suc);
                })
        })
    }

    
    EosTr.prototype.PushTr= function (buzMsg) {
        return new Promise(function(resolve,reject){
            // console.log(buzMsg.actions[0].authorization);
            // console.log(buzMsg.actions[0].data);
            var tmpbuzMsg=buzMsg;
            var chainId,head_block_num,block;
            // console.log(buzMsg);

                let info = rpc.get_info()
                .then(function(suc){
                    if (suc != null && suc.chain_id != null && suc.head_block_num != null) {
        
                        chainId = suc.chain_id;
                        head_block_num = suc.head_block_num ;//- blocksBehind;
                       
                        block = rpc.get_block(head_block_num)
                        .then(function(blockRst){
                        if (blockRst != null && blockRst.ref_block_prefix != null && blockRst.timestamp != null) {
           
                                let tmpTime=new Date(blockRst.timestamp);
                
                                tmpTime=new Date(tmpTime.getTime()+30*1000);
                
                                tmpbuzMsg.expiration=tmpTime.toString().split('.')[0];
                                tmpbuzMsg.ref_block_num=blockRst.block_num & 0xFFFF;
                                tmpbuzMsg.ref_block_prefix=blockRst.ref_block_prefix;
                                // console.log(JSON.stringify(tmpbuzMsg));
                                // console.log(tmpbuzMsg.actions[0].authorization);
                                // console.log(tmpbuzMsg.actions[0].data);
                                apiServer.serializeActions(tmpbuzMsg.actions)
                                .then(function(serActRst){
                                    for (let i=0;i<serActRst.length;i++)
                                    {
                                        tmpbuzMsg.actions[i].data=serActRst[i].data;
                                    }
                                    // console.log(tmpbuzMsg.actions[0].data);
                                    const serializedTransaction=apiServer.serializeTransaction(tmpbuzMsg);
                                  
                                    var siKey=ServerSignatureProvider.getAvailableKeys()
                                    .then(function(result){
                                            let si=ServerSignatureProvider.sign({chainId:chainId, requiredKeys:result, serializedTransaction:serializedTransaction})
                                        .then(function(sigRst){
                                             rpc.push_transaction(sigRst)
                                            .then(function(pushRst){
                                                // console.log(JSON.stringify(pushRst));
                                                resolve(pushRst) ;
                                            })
                                        
                                        })
                                        .catch(function(error){
                                            console.log(error);
                                        });
                                    })     
                              })
                              .catch(function(err){
                                  console.log(err);
                                  reject(err) ;
                              });                       
                            }
                        })
                    }
              })
        })
        .catch(function(err){
            reject(err);
        })
       
    };
    EosTr.prototype.PushSerializedTr=function (serializedTr){
        return new Promise(function(resolve,reject){
            try{
                let info = rpc.push_transaction(serializedTr); 
                resolve('success');   
            }catch(e)
            {
                reject(e);
                console.log(e);
            }
        })
        
    };

    EosTr.prototype.PushSerializedTrByServerSig=function (signatures,serializedTr){
        return new Promise(function(resolve,reject){
            let _signatures=signatures;let _serializedTr=serializedTr;
            try{
                ServerSignatureProvider.getAvailableKeys()
                .then(function(sigKey){
                    let playsi=signatureProviderplayer.sign({chainId:gccChainID, requiredKeys:sigKey, serializedTransaction:_serializedTr})
                    .then(function (sigRst){
                        _signatures=_signatures.concat(sigRst.signatures);   
                        rpc.push_transaction({signatures:_signatures, serializedTransaction:_serializedTr})   
                        .then(function(result){
                            console.log(result);
                            return result;
                         })
                    })
                   
                })
            }catch(e)
            {
                reject(e);
                console.log(e);
            }
        })
        
    };

    EosTr.prototype.GetTableRows=function (scope,code,table){
        return new Promise(function(resolve,reject){
            try{
                let info = rpc.get_table_rows({"scope":scope, "code":code, "table":table,"json": true});
                resolve(info);   
            }catch(e)
            {
                reject(e);
                console.log(e);
            }
        })
        
    };

    EosTr.prototype.GetTableInfoRows=function (scope,code,limitNum){
        return new Promise(function(resolve,reject){
            try{
                let info = rpc.get_table_rows({"scope":scope, "code":code, "table":'tablesinfo', "table_key":'tableId',"limit":limitNum,"json": true});
                //let info = rpc.get_table_rows({"scope":scope, "code":code, "table":'tablesinfo', "json": true});
                console.log(info);
                resolve(info);   
            }catch(e)
            {
                reject(e);
                console.log(e);
            }
        })
        
    };
    //获取表中指定行的数据
    EosTr.prototype.GetTableInfoAppointRows=function (scope,code,upper_bound,lower_bound){
        return new Promise(function(resolve,reject){
            try{
                let info = rpc.get_table_rows({"scope":scope, "code":code, "table":'tablesinfo', "table_key":'tableId', "upper_bound":upper_bound, "lower_bound":lower_bound,"json": true});
                resolve(info);   
            }catch(e)
            {
                reject(e);
                console.log(e);
            }
        })
        
    };


    return EosTr;
}()); // eosTr
exports.EosTr = EosTr;



