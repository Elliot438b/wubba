/**
 * Created by ujInfo on 19/4/24.
 */
function GameUser(){
    this.eosaccount = '';           //varchar(15) not null,
    this.nickname  = '';            //varchar(20),
    this.sessionId = 0;
                                    //其余待定
}

module.exports = GameUser;