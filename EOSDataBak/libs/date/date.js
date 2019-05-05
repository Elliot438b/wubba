/**
 * Created by ujInfo on 2019/4/21.
 */

var MyDate = module.exports;

MyDate.unix = function(){
    return Math.round(Date.now()/1000);
}