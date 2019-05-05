/**
 * Created by ujInfo on 2019/4/19.
 */

function DBUserAgent(){
   
    this.id = 0;                     //int not null,
    this.room_id = 0;                //int,
    this.player = '';                //varchar(15),
    this.agent = '';                 //varchar(15),
    this.flag= 1;                    //int default 1 comment '0：无效  1：有效',
    
}

module.exports = DBUserAgent;