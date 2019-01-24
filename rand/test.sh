#!/bin/bash

cleos --wallet-url http://127.0.0.1:6666 set contract useraaaaaaaa ./ wubba.wasm wubba.abi

echo "start roundNum: $1"
echo "end roundNum: $2"

for((num=$1;num<=$2;num++));
do
	echo "this roundId: $num"
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa newtable '['$num',useraaaaaaab]' -p useraaaaaaab
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa dealerseed '['$num',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa serverseed '['$num',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$num',6,useraaaaaaac,100]' -p useraaaaaaac
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$num',2,useraaaaaaad,20]' -p useraaaaaaad
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$num',1,useraaaaaaae,500]' -p useraaaaaaae
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$num',8,useraaaaaaaf,20]' -p useraaaaaaaf
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$num',2,useraaaaaaag,500]' -p useraaaaaaag
	cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L $num -U $num
	sleep 30s
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa endbet '['$num']' -p useraaaaaaah
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verdealeseed '['$num',10]' -p useraaaaaaab
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verserveseed '['$num',704]' -p useraaaaaaah
	cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L $num -U $num

done

