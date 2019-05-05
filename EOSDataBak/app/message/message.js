/**
 * Created by ujInfo on 19/4/25.
 */

exports.isLoginMsg = function(msgId){
    return (msgId == 10001) || (msgId == 20001);
}


exports.isGameMsg = function(msgId){
    // return (msgId >= 2000 && msgId <= 5999) || (msgId == 10003);
    return (msgId > 10001 && msgId < 19999) || (msgId > 20001 && msgId < 29999);
}