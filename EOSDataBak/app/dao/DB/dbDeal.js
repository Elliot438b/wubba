/**
 * Created by ujinfo on 19/3/21.
 */
var Log = require('../../../libs/log/log.js');
var Utils = require('../../../libs/util/utils.js');
var Mysql = require('mysql');

function DBDeal(dbConfig){
	if(!dbConfig){
        Log.error('数据库配置不存在');
        console.log('数据库配置不存在');
		return;
	}

	this.config = dbConfig;
	this.pool = Mysql.createPool(dbConfig);
	this.ping();
}

DBDeal.prototype.ping = function(){
	this.pool.getConnection(function(err, connection) {
		if (err) {
            Log.error('sql connect fail：' + err);
            console.log('sql connect fail：' + err);
			return;
		}
        Log.info('sql connect success...')
        console.log('sql connect success...');
		connection.release();
	})
}

DBDeal.prototype.query = function(sql, values, cb){
	this.pool.getConnection(function(err, connection) {
		if(err){
            console.log('sql connect fail：' + err);
			Log.error('sql connect fail：' + err);
			return;
		}

		connection.query(sql, values, function(err, res) {
			connection.release();
			if(err){
                console.log('执行sql语句['+sql+'; '+values+']错误：' + err);
				Log.error('执行sql语句['+sql+'; '+values+']错误：' + err);
			}
			// console.log(err, res);
			Utils.invokeCallback(cb, err, res);
		});
    });
}
//使用前，先规整SQL语句
DBDeal.prototype.transExecute=function(sqls,cb){
	this.pool.getConnection(function(err, connection) {
		if(err){
            Log.error('sql connect fail：' + err);
            console.log('sql connect fail：' + err);
			return;
		}
		console.log('sqls is '+sqls);
		connection.beginTransaction(sqls, function(err, res) {
			for(let i=0;i<sqls.length;i++){
				// console.log('执行sql语句['+sqls[i]+';]：');
				connection.query(sqls[i],function(err, res) {
					if(err){
                        Log.error('执行sql语句['+sqls[i]+';]错误：' + err);
                        console.log('执行sql语句['+sqls[i]+';]错误：' + err);
						connection.rollback(function() {
							throw error;
						})
					}
				})
			}
			connection.commit(function(err) {
				if (err) {
					return connection.rollback(function() {
					throw err;
				});
			}
		  })
			//console.log(err, res);
			connection.release();
			Utils.invokeCallback(cb, err, res);
		});
	});
}

module.exports = DBDeal;
