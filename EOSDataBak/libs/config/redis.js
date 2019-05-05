/**
 * Created by ujInfo on 2019/4/24.
 */
var Redis = module.exports;

var Global = require('../global/global.js');
var RedisConfig = require('../../config/redis.json');

Redis.get = function() {
    return RedisConfig[Global.environment];
}