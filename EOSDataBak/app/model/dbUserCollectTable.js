/**
 * Created by ujInfo on 2019/4/19.
 */

function DBUserColTable(){
    this.id = 0;                     //int not null,
    this.eosaccount = '';            //varchar(15),
    this.colTableID = 0; 
    this.collecttime = ''; 
}

module.exports = DBUserColTable;