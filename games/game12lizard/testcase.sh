#!/bin/bash

case $1 in
    chainstart)
        echo "chain restart, set permission"
        cleos --wallet-url http://127.0.0.1:6666 system newaccount useraaaaaaak game12lizard EOS8Znrtgwt8TfpmbVpTKvA2oB8Nqey625CLN8bCN3TEbgx86Dsvr --buy-ram "1000 SYS" --stake-net "1000 SYS" --stake-cpu "1000 SYS" --transfer
        cleos --wallet-url http://127.0.0.1:6666 transfer useraaaaaaam game12lizard "100000 SYS"
        cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaab active '{"threshold":1,"keys":[{"key":"EOS7yBtksm8Kkg85r4in4uCbfN77uRwe82apM8jjbhFVDgEgz3w8S","weight":1}],"accounts":[{"permission":{"actor":"game12lizard","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaab
        cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaac active '{"threshold":1,"keys":[{"key":"EOS7WnhaKwHpbSidYuh2DF1qAExTRUtPEdZCaZqt75cKcixuQUtdA","weight":1}],"accounts":[{"permission":{"actor":"game12lizard","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaac
        cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaad active '{"threshold":1,"keys":[{"key":"EOS7Bn1YDeZ18w2N9DU4KAJxZDt6hk3L7eUwFRAc1hb5bp6xJwxNV","weight":1}],"accounts":[{"permission":{"actor":"game12lizard","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaad
        cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaae active '{"threshold":1,"keys":[{"key":"EOS7Bn1YDeZ18w2N9DU4KAJxZDt6hk3L7eUwFRAc1hb5bp6xJwxNV","weight":1}],"accounts":[{"permission":{"actor":"game12lizard","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaae
        cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaak active '{"threshold":1,"keys":[{"key":"EOS6iwndPo58Y2ihWshfhnFbEBJHGkZtujR1bn7bVLngnTWFA8Hm3","weight":1}],"accounts":[{"permission":{"actor":"game12lizard","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaak
        cleos --wallet-url http://127.0.0.1:6666 set account permission game12lizard active '{"threshold":1,"keys":[{"key":"EOS69X3383RzBZj41k73CSjUNXM5MYGpnDxyPnWUKPEtYQmTBWz4D","weight":1}],"accounts":[{"permission":{"actor":"game12lizard","permission":"eosio.code"},"weight":1}]}' owner -p game12lizard

        cleos --wallet-url http://127.0.0.1:6666 push action eosio.token transfer '["useraaaaaaab","game12lizard","5.0000 SYS","test"]' -p useraaaaaaab
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard initsymbol '["eosio.token","SYS","0.1000 SYS"]' -p game12lizard
    ;;
    
    temptest)
        #test shuffle for baccarat
        echo "temptest"
        eosio-cpp -abigen lizard.cpp -o lizard.wasm
        cleos --wallet-url http://127.0.0.1:6666 set contract game12lizard ./ lizard.wasm lizard.abi
        # init currencyinfo
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard initsymbol '["useraaaaaaaj","TES","0.1000 TES"]' -p useraaaaaaak
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard initsymbol '["eosio.token","SYS","0.1000 SYS"]' -p useraaaaaaak
        cleos get table game12lizard game12lizard currencyinfo
        d
        #tableid=`cleos get table game12lizard game12lizard tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        #tableid=tableid+1
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '[230,useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        tableid=`cleos get table game12lizard game12lizard tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        
        for((num=1;num<=1;num++));
        do
            #    cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
            
            sleep 5s
        done
        
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard depositable '['$tableid', "10.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pushaliasnam '["","useraaaaaaae"]' -p useraaaaaaae
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pushaliasnam '["wlsaaa","useraaaaaaae"]' -p useraaaaaaae
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pushaliasnam '["wangls","useraaaaaaah"]' -p useraaaaaaah
        #cleos get table game12lizard game12lizard aliasinfo
        
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard depositable '['$tableid', "23000.0000 SYS"]' -p useraaaaaaab
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
        
        sleep 3s
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard upgrading '["1"]' -p useraaaaaaak
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "wangls", "王丽"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "wls", "wls"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"big\": \"2.6001 SYS\",\"total9\": \"3.5001 SYS\",\"tri2\": \"2.0000 SYS\"}"]' -p useraaaaaaad useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
        
        cleos get table game12lizard game12lizard aliasinfo
        
        sleep 36s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaab useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',704]' -p useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
        
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard edittable '['$tableid', 1, "eosio.token", "SYS", "0.8000", "0.2000", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab
        # cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerwitdaw '['$tableid', "20.0000 SYS"]' -p useraaaaaaab
        # cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
        
        # cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaab
        # cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
        
        # cleos --wallet-url http://127.0.0.1:6666 push action game12lizard changeprivat '[0, '$tableid']' -p useraaaaaaab
        # cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
        
    ;;
    erasedata)
        #the second parameter is (103718369455 = erase end&&pause|| -2 = erase close)
        echo "erase old data(second parameter is (103718369455 = erase end&&pause|| -2 = erase close)"
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard clear12cache '['$2']' -p game12lizard
    ;;
    importdata)
        echo "importdata test"
        nums=(29 100 13 8 91 44);
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard import12data '[155,0,"useraaaaaaab","0","0","100.0000 SYS","2.0000 SYS","3.0000 SYS","4.0000 SYS","5.0000 SYS","6.0000 SYS","7.0000 SYS","8.0000 SYS","9.0000 SYS","10.0000 SYS","11.0000 SYS","12.0000 SYS","13.0000 SYS","14.0000 SYS","15.0000 SYS","16.0000 SYS","17.0000 SYS",0.003,0.002,"0",{"symbol":"4,TES","contract":"useraaaaaaaj"}]' -p game12lizard
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard import12data '[13,${nums[@]}]' -p game12lizard
    ;;

    

    testnewtable)
        tableid=10
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "0.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "0.0000 SYS","0.0000 SYS", "0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"0.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"100.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "TES", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosiotoken1", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 0, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 2, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", wls, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

       ;;

    testeidtable)
        tableid=3002

        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard edittable '['$tableid', 1, "eosio.token", "SYS", "0.8000", "0.2000", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaah
:<<!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard edittable '['$tableid', 1, "eosio.token", "SYS", "0.8000", "0.2000", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard edittable '['$tableid', 1, "eosio.token", "SYS", "0.8000", "0.2000", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard edittable '['$tableid', 1, "eosio.token", "SYS", "0.8000", "0.2000", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard edittable '['$tableid', 1, "eosio.token", "SYS", "0.8000", "0.2000", "5.0000 SYS","1.0000 SYS", "0.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard edittable '['$tableid', 1, "eosio.token", "SYS", "0.8000", "0.2000", "0.0000 SYS","0.0000 SYS", "0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard edittable '['$tableid', 0, "eosio.token", "SYS", "0.8000", "0.2000", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard edittable '['$tableid', 1, "eosio.token", "SYS", "0.8000", "0.2000", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard edittable '['$tableid', 2, "eosio.token", "SYS", "0.8000", "0.2000", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard edittable '['$tableid', wls, "eosio.token", "SYS", "0.8000", "0.2000", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard edittable '['$tableid', 1, "eosio.token", "SYS", "0.8000", "0.2000", "5.0000 SYS","0.0001 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
!
        ;;

   testupgrading)
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard upgrading '["1"]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard upgrading '["1"]' -p useraaaaaaak
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard upgrading '["wls"]' -p useraaaaaaak
        ;;

   testimport12data)
        tableid=3300
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard import12data '['$tableid',0,"useraaaaaaab","0","0","100.0000 SYS","2.0000 SYS","3.0000 SYS","4.0000 SYS","5.0000 SYS","6.0000 SYS","7.0000 SYS","8.0000 SYS","9.0000 SYS","10.0000 SYS","11.0000 SYS","12.0000 SYS","13.0000 SYS","14.0000 SYS","15.0000 SYS","16.0000 SYS","17.0000 SYS",0.003,0.002,"0",{"symbol":"4,TES","contract":"useraaaaaaaj"}]' -p game12lizard

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard import12data '['$tableid',0,"useraaaaaaab","0","0","100.0000 SYS","2.0000 SYS","3.0000 SYS","4.0000 SYS","5.0000 SYS","6.0000 SYS","7.0000 SYS","8.0000 SYS","9.0000 SYS","10.0000 SYS","11.0000 SYS","12.0000 SYS","13.0000 SYS","14.0000 SYS","15.0000 SYS","16.0000 SYS","17.0000 SYS",0.003,0.002,"0",{"symbol":"4,TES","contract":"useraaaaaaaj"}]' -p useraaaaaaah

        sleep 3s
        #tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard import12data '['$tableid',0,"useraaaaaaab","0","0","100.0000 SYS","2.0000 SYS","3.0000 SYS","4.0000 SYS","5.0000 SYS","6.0000 SYS","7.0000 SYS","8.0000 SYS","9.0000 SYS","10.0000 SYS","11.0000 SYS","12.0000 SYS","13.0000 SYS","14.0000 SYS","15.0000 SYS","16.0000 SYS","17.0000 SYS",0.003,0.002,"0",{"symbol":"4,TES","contract":"useraaaaaaaj"}]' -p useraaaaaaak
        ;;

    testinitsymbol)
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard initsymbol '["useraaaaaaaj","TES","0.1000 TES"]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard initsymbol '["useraaaaaaab","SSS","0.1000 SSS"]' -p useraaaaaaak
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard initsymbol '["useraaaaaaaj","TES","0.1000 TES"]' -p useraaaaaaak
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard initsymbol '["useraaaaaaaj","TES","0.3000 TES"]' -p useraaaaaaak
        cleos get table game12lizard game12lizard currencyinfo
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard initsymbol '["eosio.token","SYS","0.1000 TES"]' -p useraaaaaaak

        ;;
    testtrusteeship)
        tableid=900
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard trusteeship '['$tableid']' -p useraaaaaaah
:<<!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard trusteeship '['$tableid']' -p useraaaaaaak

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard trusteeship '['$tableid']' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard trusteeship '['$tableid']' -p useraaaaaaab useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard trusteeship '['$tableid']' -p useraaaaaaab useraaaaaaah
!
        ;;

    testexitruteship)
        tableid=910
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard exitruteship '['$tableid']' -p useraaaaaaah
:<<!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard exitruteship '['$tableid']' -p useraaaaaaak

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard exitruteship '['$tableid']' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard exitruteship '['$tableid']' -p useraaaaaaab useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard exitruteship '['$tableid']' -p useraaaaaaab useraaaaaaah
!
        ;;

    testclosetable)
        tableid=`cleos get table game12lizard game12lizard tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaah
:<<!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaak

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaab useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaab useraaaaaaah
!
        ;;
    testdealerwitdaw)
        tableid=1420
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerwitdaw '['$tableid', "2000.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerwitdaw '['$tableid', "2000.0000 SYS"]' -p useraaaaaaac

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerwitdaw '['$tableid', "200.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        sleep 1s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerwitdaw '['$tableid', "200.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerwitdaw '['$tableid', "0.0000 SYS"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerwitdaw '['$tableid', "2000000000000.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        ;;
    testpausetabledea)
        tableid=`cleos get table game12lizard game12lizard tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        tableid=1140
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetabledea '['$tableid']' -p useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
:<<!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetabledea '['$tableid']' -p useraaaaaaad
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetabledea '['$tableid']' -p useraaaaaaad useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetabledea '['$tableid']' -p useraaaaaaad useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetabledea '['$tableid']' -p useraaaaaaad useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
!
        ;;

   testpausetablesee)
        tableid=`cleos get table game12lizard game12lizard tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        tableid=1160
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetablesee '['$tableid']' -p useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetablesee '['$tableid']' -p useraaaaaaad
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetablesee '['$tableid']' -p useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetablesee '['$tableid']' -p useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetablesee '['$tableid']' -p useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
        ;;


    testcontinuetable)
        tableid=`cleos get table game12lizard game12lizard tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        tableid=7029

        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaac,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetablesee '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard continuetable '['$tableid']' -p useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
:<<!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetablesee '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard continuetable '['$tableid']' -p  useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetablesee '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard continuetable '['$tableid']' -p useraaaaaaad useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard pausetablesee '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard continuetable '['$tableid']' -p useraaaaaaad useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard continuetable '['$tableid']' -p useraaaaaaad useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
!
        ;;

    testclosetable)
        tableid=`cleos get table game12lizard game12lizard tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        tableid=1180
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaad useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaad
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaad useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaad useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaad useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
        ;;
    testdepositable)
        tableid=1240

        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard depositable '['$tableid', "10.0000 SYS"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard depositable '['$tableid', "10.0000 SYS"]' -p useraaaaaaac

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard depositable '['$tableid', "10.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard depositable '[ '$tableid', "10.0000 SYS"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard depositable '['$tableid', "0.0000 SYS"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard depositable '['$tableid', "40000000000000000000000000.0000 SYS"]' -p useraaaaaaad useraaaaaaah

        ;;
    testclear12cache)
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard clear12cache '[103718369455]' -p useraaaaaaah

        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard clear12cache '[103718369455]' -p useraaaaaaak

        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard clear12cache '[-2]' -p useraaaaaaak

        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard clear12cache '[wls]' -p useraaaaaaak

        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard clear12cache '[2000000000000000000000000]' -p useraaaaaaak

        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard clear12cache '[-110]' -p useraaaaaaak
        ;;
    testdealerseed)
        tableid=100
:<<!
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaac,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '[20000000000000000000000000,4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',wls]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaac,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard trusteeship '['$tableid']' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaac,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid

        ;;
    testserverseed)
        tableid=350
:<<!
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaab

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard closetable '['$tableid']' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaab,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaac,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaac,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard trusteeship '['$tableid']' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah

        ;;
    testplayerbet)
        tableid=430
:<<!
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaab

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", ""]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"0.0005 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"anytri\": \"0.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"0.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"1.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"pair2\": \"0.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"1.0000 TES","1.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"small\": \"2.6000 SYS\",\"total6\": \"0.0001 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"1.0000 TES","1.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"c12\": \"0.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"1.0000 TES","1.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"s1\": \"0.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"3.6505 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"small\": \"3.6505 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"1.6000 SYS\",\"total6\": \"1.5000 SYS\",\"anytri\": \"3.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"small\": \"1.6000 SYS\",\"total6\": \"3.2000 SYS\",\"anytri\": \"3.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"1.6000 SYS\",\"total6\": \"1.5000 SYS\",\"tri2\": \"3.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"small\": \"1.6000 SYS\",\"total6\": \"1.5000 SYS\",\"tri2\": \"3.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"1.6000 SYS\",\"total6\": \"2.5000 SYS\",\"pair2\": \"3.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"small\": \"1.6000 SYS\",\"total6\": \"2.1000 SYS\",\"pair2\": \"3.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"1.6000 SYS\",\"total6\": \"3.0001 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"small\": \"1.6000 SYS\",\"total6\": \"3.0001 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"small\": \"2.6000 SYS\",\"total6\": \"1.5000 SYS\",\"c12\": \"3.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"small\": \"2.1000 SYS\",\"total6\": \"1.5000 SYS\",\"c12\": \"3.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"1.6000 SYS\",\"total6\": \"1.5000 SYS\",\"s1\": \"3.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaad,"{\"small\": \"1.6000 SYS\",\"total6\": \"1.5000 SYS\",\"s1\": \"3.0001 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "", "王丽"]' -p useraaaaaaac useraaaaaaah

        ;;
    testendbet)
        tableid=450
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaak

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        sleep 1s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        ;;

    testverdealerseed)
        tableid=2090
:<<!
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaab

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        sleep 1s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',lws]' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',1]' -p useraaaaaaad useraaaaaaah
!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard trusteeship '['$tableid']' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah

        ;;

    testverserverseed)
        tableid=300
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        for((num=1;num<=1;num++));
        do
            cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
            cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
            cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
            cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
            cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
            sleep 12s
            cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
            cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
            cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',623]' -p useraaaaaaah
            cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
        done
:<<!
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',704]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',704]' -p useraaaaaaad

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',704]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',704]' -p useraaaaaaah
        sleep 1s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',704]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',704]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',704]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',lws]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',1]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard trusteeship '['$tableid']' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',704]' -p useraaaaaaah

        tableid=4025
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',d2572ef3561449939bbcfb2fa6ed0fa21b00a2362b271e73280d8f97ee2c02a7]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',65fa795e579dafef5f3d216799719eed32f1d4c21bce563c59202e12119d63a3]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',4025]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',4026]' -p useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid


        tableid=800
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',1a1cf797fabe7f95836fabeca626907c77b3e6c9aff7c2290b396a238c69362e]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',096012b7ebcaf56d1d63b2784d2b2bbdeae080d72ad6bd1b9f7018e62a3c37d0]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"big\": \"1.2000 SYS\",\"odd\": \"1.1000 SYS\",\"total13\": \"3.5000 SYS\",\"anytri\": \"2.0000 SYS\",\"tri1\": \"2.0000 SYS\",\"pair6\": \"2.3000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verdealeseed '['$tableid',800]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard verserveseed '['$tableid',801,0]' -p useraaaaaaah
        cleos get table game12lizard game12lizard tablesinfo -L $tableid -U $tableid
!
        ;;


    testdisconnecthi)
        tableid=2500
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard disconnecthi '["useraaaaaaad",'$tableid']' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaak
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard disconnecthi '["useraaaaaaac",'$tableid']' -p  useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard disconnecthi '["useraaaaaaac",'$tableid']' -p useraaaaaaad useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard newtable '['$tableid',useraaaaaaad,"4000.0000 SYS", 1, "eosio.token", "SYS", "0.005", "0.002", "5.0000 SYS","1.0000 SYS", "5.0000 SYS","1.0000 SYS","10.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS","5.0000 SYS","1.0000 SYS"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard playerbet '['$tableid',useraaaaaaac,"{\"small\": \"2.6000 SYS\",\"total6\": \"3.5000 SYS\",\"tri2\": \"2.0000 SYS\"}", "useraaaaaaah", "王丽"]' -p useraaaaaaac useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard disconnecthi '["useraaaaaaad",'$tableid']' -p useraaaaaaad useraaaaaaah
        sleep 1s
        cleos --wallet-url http://127.0.0.1:6666 push action game12lizard disconnecthi '["useraaaaaaad",'$tableid']' -p useraaaaaaad useraaaaaaah


        ;;

esac









