var Global=module.exports;
var Log = require('../log/log.js');
var Program = require('../program/program.js');

Global.EOSInterval=1000*3;

//当前服务器名称
Global.serverName = '';
//当前服务器所连接的后台客户端
Global.serverClients = {};
//当前环境(开发，生产)
Global.environment = 'development'; //Program.environment || 'development';
//当前服务器使用的Guid
Global.guid = null;

Global.GSAccount='gamemallards';
Global.bacGameName='gamemallards';
Global.sigGameName='game12lizard';

Global.acPermission='active';
Global.ownerPermission='owner';

Global.executed='executed';  //soft-failed就代表我合约校验没通过  hard-failed代表链的问题，执行失败，跟合约没关系

Global.pingInterval=5*3000;
//当前服务器所连接的localDB
Global.userDb = null;

Global.batchNum=3;
Global.endBound=1000000;


const {EosTr} = require('../../libs/EOS/EOSTr.js');


Global.EOSDevConfig = {//测试环境   SERVER的账号：useraaaaaaah---5JV9UNEpPKa4sqxSxvGWYPY9ZBTzAttyq7ShPvLUJSetwAeSXFW
    keyProvider: ['5JUNYmkJ5wVmtVY8x9A1KKzYe9UWLZ4Fq1hzGZxfwfzJB8jkw6u'],//["5KNbKxyyqfGvLgEEr6MAwMvxFFv8AAmweSHqtNNcNMSKmt8Y9oy"],  // 配置私钥字符串  eoseoseoseos
    keyPubProvider:['EOS7yBtksm8Kkg85r4in4uCbfN77uRwe82apM8jjbhFVDgEgz3w8S'],//["EOS7yqWwcdR5GFQgdykZ73UiZEsPvTwGXxJkZ28xsfDQFdQWoK7EF"],  //公钥
    httpEndpoint: 'http://127.0.0.1:51043',//'https://jungle.eosio.cr:443', //DEV开发链url与端口   rpc 地址 
    chainId: "1c6ae7719a2a3b4ecb19584a30ff510ba1b6ded86e1fd8b8fc22f1179c622a32", // 通过cleos get info可以获取chainId
    mockTransactions: () => null, // 如果要广播，需要设为null
    // transactionHeaders: (expireInSeconds, callback) => {
    //   callback(null/*error*/, headers) //手动设置交易记录头，该方法中的callback回调函数每次交易都会被调用
    // },
    expireInSeconds: 60,
    broadcast: true,
    debug: false,
    sign: true,
    authorization: null // 该参数用于在多签名情况下，识别签名帐号与权限,格式如：account@permission
  };

  Global.EOSReleaseConfig = {  //生产环境
    keyProvider: ['5JPkavUdKyr1sZrktE3jnej76cqADXHqByA2rf4j4vqUsCNWxao'],//["5JPkavUdKyr1sZrktE3jnej76cqADXHqByA2rf4j4vqUsCNWxao"],  // 配置私钥字符串  eoseoseoseos
    keyPubProvider:['EOS6WnfbnoLNRXmwFbP2shqykG7cnJXKq7zcnkjAbzKQC3V5NKAYn'],//["EOS6WnfbnoLNRXmwFbP2shqykG7cnJXKq7zcnkjAbzKQC3V5NKAYn"],  //公钥
    httpEndpoint: 'https://jungle.eosio.cr:443', //DEV开发链url与端口   rpc 地址
    chainId: "e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473", // 通过cleos get info可以获取chainId
    mockTransactions: () => null, // 如果要广播，需要设为null
    // transactionHeaders: (expireInSeconds, callback) => {
    //   callback(null/*error*/, headers) //手动设置交易记录头，该方法中的callback回调函数每次交易都会被调用
    // },
    expireInSeconds: 60,
    broadcast: true,
    debug: false,
    sign: true,
    authorization: null // 该参数用于在多签名情况下，识别签名帐号与权限,格式如：account@permission
  };

  Global.eosTr=new EosTr(Global.EOSDevConfig.httpEndpoint,Global.EOSDevConfig.keyProvider,Global.EOSDevConfig.chainId);
