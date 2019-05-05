/**
 * Created by ujInfo on 19/4/24.
 */

var Startup = require('../../startup.js');
var Server = require('../../../libs/config/server.js');

var Program = require('../../../libs/program/program.js');
var RoomObjs = require ('../../module/roomObj.js');


var gameServerConfig = Server.getByServer('game')[Program.gameId.toString()];
var loginServerConfig = Server.getByServer('login');
var logServerConfig = Server.getByServer('log');

Startup.init(gameServerConfig.id);
Startup.initRedis();

for(var key in loginServerConfig){
    console.log(key);
    Startup.connectBack(loginServerConfig[key]);
}

// Startup.connectBack(logServerConfig);
RoomObjs.GenerateRoomObjs();

