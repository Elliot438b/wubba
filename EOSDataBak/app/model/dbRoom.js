/**
 * Created by ujInfo on 2019/4/19.
 */


function DBRoom(){
  
    this.id = 0;                    //int not null,
    this.dealer = '';               //varchar(15),
    this.room_name = '';            //varchar(20),
    this.createtime = '';           //varchar(20),
    this.code = '';                 //varchar(20),
}

module.exports = DBRoom;