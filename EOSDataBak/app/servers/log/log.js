/**
 * Created by ujInfo on 19/4/24.
 */

var Startup = require('../../startup.js');
var Server = require('../../../libs/config/server.js');
var Log = require('../../../libs/log/log.js');

var serverConfig = Server.getByServer('log');

Startup.init(serverConfig.id);
Startup.listenerBack(serverConfig.port);

