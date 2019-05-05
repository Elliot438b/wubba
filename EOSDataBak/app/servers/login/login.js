/**
 * Created by ujInfo on 2019/4/24.
 */

var Startup = require('../../startup.js');
var Server = require('../../../libs/config/server.js');

var Program = require('../../../libs/program/program.js');
var SessionService = require('../../../libs/session/sessionService.js');

var loginServerConfig = Server.getByServer('login')[Program.loginServerId.toString()];
var logServerConfig = Server.getByServer('log');

Startup.init(loginServerConfig.id);
Startup.initRedis();
Startup.initUseDb();
Startup.initGuid(1);

//是否使用WebSocket
if(loginServerConfig.clientIsWs){
    Startup.listenerFrontWs(loginServerConfig.clientPort);
} else {
    Startup.listenerFront(loginServerConfig.clientPort);
}
Startup.listenerBack(loginServerConfig.port);

//开启Ping检测
SessionService.openCheckPing();
// Startup.connectBack(logServerConfig);

