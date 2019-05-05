/**
 * Created by ujInfo on 19/4/24.
 */
var Program = require('commander');

Program
    .option('-l, --loginServerId <n>', 'login server id', parseInt)
    .option('-g, --gameId <n>', 'game server id', parseInt)
    .option('-p, --protoFile <n>', 'proto file')
    .option('-e, --environment <n>', 'environment')
    .parse(process.argv);

module.exports = Program;