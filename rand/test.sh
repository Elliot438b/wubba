#!/bin/bash

case $1 in
chainstart)
    echo "chain restart, set permission"
    cleos --wallet-url http://127.0.0.1:6666 system buyram useraaaaaaai useraaaaaaaa "10 SYS"
    cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaab active '{"threshold":1,"keys":[{"key":"EOS7yBtksm8Kkg85r4in4uCbfN77uRwe82apM8jjbhFVDgEgz3w8S","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaa","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaab
    cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaac active '{"threshold":1,"keys":[{"key":"EOS7WnhaKwHpbSidYuh2DF1qAExTRUtPEdZCaZqt75cKcixuQUtdA","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaa","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaac
    cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaad active '{"threshold":1,"keys":[{"key":"EOS7Bn1YDeZ18w2N9DU4KAJxZDt6hk3L7eUwFRAc1hb5bp6xJwxNV","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaa","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaad
    cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaae active '{"threshold":1,"keys":[{"key":"EOS7Bn1YDeZ18w2N9DU4KAJxZDt6hk3L7eUwFRAc1hb5bp6xJwxNV","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaa","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaae
    cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaaa active '{"threshold":1,"keys":[{"key":"EOS69X3383RzBZj41k73CSjUNXM5MYGpnDxyPnWUKPEtYQmTBWz4D","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaa","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaaa

    ;;
temptest)
    #test player bet for baccarat
    echo "test player bet"
    eosio-cpp -abigen wubba.cpp -o wubba.wasm
    cleos --wallet-url http://127.0.0.1:6666 set contract useraaaaaaaa ./ wubba.wasm wubba.abi
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa newtable '[useraaaaaaab,"20.0000 SYS"]' -p useraaaaaaab
    tableid=`cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaac,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaac
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaad,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaad
    cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L $tableid -U $tableid
    sleep 36s
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa endbet '['$tableid']' -p useraaaaaaah
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verdealeseed '['$tableid',10]' -p useraaaaaaab
    sleep 3s
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verserveseed '['$tableid',704]' -p useraaaaaaah
    cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L $tableid -U $tableid

    ;;
erasedata)
    echo "erase old data"
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa erasingdata '[-1]' -p useraaaaaaaa
    ;;
normalflow)
    echo "normalflow test"
    eosio-cpp -abigen wubba.cpp -o wubba.wasm
    cleos --wallet-url http://127.0.0.1:6666 set contract useraaaaaaaa ./ wubba.wasm wubba.abi
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa newtable '[useraaaaaaab,"20.0000 SYS"]' -p useraaaaaaab
    tableid=`cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`

    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa newtable '[useraaaaaaac,"20.0000 SYS"]' -p useraaaaaaac
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa newtable '[useraaaaaaab,"20.0000 SYS"]' -p useraaaaaaab
    #second index
    cleos get table useraaaaaaaa useraaaaaaaa tablesinfo --index 2 --key-type name -L useraaaaaaac -U useraaaaaaac

    cleos --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaaa
    cleos --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaab
    cleos --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaac
    cleos --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaad

    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaac,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaac
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaad,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaad
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaae,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaae
    cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L $tableid -U $tableid
    sleep 36s
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa endbet '['$tableid']' -p useraaaaaaah
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verdealeseed '['$tableid',10]' -p useraaaaaaab
    sleep 3s
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verserveseed '['$tableid',704]' -p useraaaaaaah
    cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L $tableid -U $tableid
    sleep 3s
    cleos --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaaa
    cleos --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaab
    cleos --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaac
    cleos --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaad
    sleep 3s

    ;;
trusteeship)
    # start

    echo "trusteeship test"
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa newtable '[useraaaaaaab,"20.0000 SYS"]' -p useraaaaaaab
    tableid=`cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`

    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa trusteeship '['$tableid']' -p useraaaaaaab
    # cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa dealerseed '['$tableid',9d8cc53ec9a3db76af85145d224201054044d56158d8f6186ea8cc22f3b2f4dd]' -p useraaaaaaab
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa serverseed '['$tableid',a2829e4ffc37947dc9172cd3aeb6a1f19bf6bf27ea0abe2c527884620614eff3]' -p useraaaaaaah
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaac,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaac
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaad,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaad
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaae,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaae
    cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L $tableid -U $tableid
    sleep 36s
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa endbet '['$tableid']' -p useraaaaaaah
    # cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verdealeseed '['$tableid',"1w1"]' -p useraaaaaaab
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verserveseed '['$tableid',"2l3wxx2"]' -p useraaaaaaah
    cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L $tableid -U $tableid
    sleep 3s
    ;;
exitruteship)
    echo "exitruteship test"
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa newtable '[useraaaaaaab,"20.0000 SYS"]' -p useraaaaaaab
    tableid=`cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`

    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa exitruteship '['$tableid']' -p useraaaaaaab
    for((num=1;num<=1;num++));
    do
    	echo "this roundId: $num"
    	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa dealerseed '['$tableid',9d8cc53ec9a3db76af85145d224201054044d56158d8f6186ea8cc22f3b2f4dd]' -p useraaaaaaab
    	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa serverseed '['$tableid',a2829e4ffc37947dc9172cd3aeb6a1f19bf6bf27ea0abe2c527884620614eff3]' -p useraaaaaaah
    	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaac,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaac
    	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaad,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaad
    	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaae,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaae
    	cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L $tableid -U $tableid
    	sleep 36s
    	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa endbet '['$tableid']' -p useraaaaaaah
    	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verdealeseed '['$tableid',1w1]' -p useraaaaaaab
    	sleep 3s
    	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verserveseed '['$tableid',2l3wxx2]' -p useraaaaaaah
    	cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L $tableid -U $tableid
    	sleep 3s
    done
    ;;
disconnect)
    echo "dealer disconnect test"
    tableid=`cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`

    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa exitruteship '['$tableid']' -p useraaaaaaab
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaac,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaac
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaad,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaad
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['$tableid',useraaaaaaae,"3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS","3.0000 SYS"]' -p useraaaaaaae
    cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L $tableid -U $tableid
    sleep 36s
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa endbet '['$tableid']' -p useraaaaaaah
    # cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verdealeseed '['$tableid',"10"]' -p useraaaaaaab
    sleep 3s
    cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verserveseed '['$tableid',"704"]' -p useraaaaaaah
    cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L $tableid -U $tableid
    sleep 3s
    ;;
esac









