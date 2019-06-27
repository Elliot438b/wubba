
var Global = require('./libs/global/global.js');
var DBDeal = require('./app/dao/DB/dbDeal.js');
var Db = require('./libs/config/db.js');
var Timer = require('./libs/timer/timer.js');
var ToEOS = require('./app/servers/bakserver/toEos.js');
var FromEOS = require('./app/servers/bakserver/fromEOS.js');
Global.userDb = new DBDeal(Db.get('local127'));

// /**从本地数据库备份到EOS */
let DBRst=true;
let i=0;
var IntervalName=Timer.setInterval(5000, function(){
    if (DBRst){
        ToEOS.DataToEos()
        .then(function(rst){
            DBRst=rst;
        })
        .catch(function(err){
            DBRst=false;
            Timer.clearInterval(IntervalName);
            return ;
        });
    }
});

/**从EOS备份到本地数据库 */
// (async () => {
//         try {   
//             FromEOS.BakData();
//         } catch (e) {
//             console.log('Caught exception: ' + e);
    
//         }
//    })();