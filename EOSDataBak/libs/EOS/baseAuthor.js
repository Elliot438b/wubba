
var Global= require('../../libs/global/global.js');

function baseAuthor(){
        const baseauthor={
            actor: '',
            permission: Global.ownerPermission
        };
        return baseauthor;
    }
module.exports = baseAuthor