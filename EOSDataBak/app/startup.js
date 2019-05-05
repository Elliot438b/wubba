/**
 * Created by ujInfo on 2019/4/19.
 */
var Startup = module.exports;

var Global = require('../libs/global/global.js');
var Log = require('../libs/log/log.js');
var Link = require('../libs/net/link.js');
var Timer = require('../libs/timer/timer.js');
var Guid = require('../libs/guid/guid.js');
var Session = require('../libs/session/session.js');
var SessionService = require('../libs/session/sessionService.js');
var RpcProto = require('./proto/rpcProto.js');
var Db = require('../libs/config/db.js');
var Redis = require('../libs/config/redis.js');
var DBDeal = require('./dao/DB/dbDeal.js');
// var RedisClient = require('./cache/redis/redis.js');

var Rpc = require('./message/rpc.js');



Startup.init = function(serverName) {
    Global.serverName = serverName;

    Log.init(serverName);

    process.on('uncaughtException', function(err) {
        Log.error('Caught exception: ' + err.stack);
    });

    Log.info('server starting ...');
};

Startup.initUseDb = function() {
   Global.userDb = new DBDeal(Db.get('local'));
   
}
