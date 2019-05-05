/**
 * Created by ujInfo on 19/4/26.
 */

var LoginMessageHandle = module.exports;


var wsProto = require('../proto/wsProto.js');
var Auth = require('../module/auth.js');

LoginMessageHandle.handles = {};
LoginMessageHandle.handles[wsProto.ID_ws_C2S_Login] = function(userSession, data){
    // Auth.login(userSession, data.account);
    console.log('收到用户登录userSession is ');
    console.log(userSession);
    console.log(data);
    let tmpIP=userSession.session.remoteAddress.split(':');
    console.log(tmpIP[3]);   //获取客户端IP地址
    // ::ffff:192.168.199.158:42434
    // Auth.login(userSession, data.eosaccount,tmpIP[3]);
    Auth.login(userSession, data,tmpIP[3]);
}

LoginMessageHandle.handles[wsProto.ID_ws_C2S_UpdateUser] = function(userSession, data){
    Auth.editUserMsg(userSession, data.User);
}
