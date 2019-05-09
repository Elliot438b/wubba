#!/bin/bash

case $1 in
    chainstart)
        echo "chain restart, set permission"
        cleos --wallet-url http://127.0.0.1:6666 system newaccount useraaaaaaak gamemallards EOS8Znrtgwt8TfpmbVpTKvA2oB8Nqey625CLN8bCN3TEbgx86Dsvr --buy-ram "100 SYS" --stake-net "100 SYS" --stake-cpu "100 SYS" --transfer
        cleos --wallet-url http://127.0.0.1:6666 transfer useraaaaaaam gamemallards "100000 SYS"
        cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaab active '{"threshold":1,"keys":[{"key":"EOS7yBtksm8Kkg85r4in4uCbfN77uRwe82apM8jjbhFVDgEgz3w8S","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaab
        cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaac active '{"threshold":1,"keys":[{"key":"EOS7WnhaKwHpbSidYuh2DF1qAExTRUtPEdZCaZqt75cKcixuQUtdA","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaac
        cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaad active '{"threshold":1,"keys":[{"key":"EOS7Bn1YDeZ18w2N9DU4KAJxZDt6hk3L7eUwFRAc1hb5bp6xJwxNV","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaad
        cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaae active '{"threshold":1,"keys":[{"key":"EOS7Bn1YDeZ18w2N9DU4KAJxZDt6hk3L7eUwFRAc1hb5bp6xJwxNV","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaae
        cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaak active '{"threshold":1,"keys":[{"key":"EOS6iwndPo58Y2ihWshfhnFbEBJHGkZtujR1bn7bVLngnTWFA8Hm3","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaak
        cleos --wallet-url http://127.0.0.1:6666 set account permission gamemallards active '{"threshold":1,"keys":[{"key":"EOS69X3383RzBZj41k73CSjUNXM5MYGpnDxyPnWUKPEtYQmTBWz4D","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p gamemallards
        
        # custom token issue.
        cleos --wallet-url http://127.0.0.1:6666 system buyram useraaaaaaag useraaaaaaaj "1000 SYS"
        cleos --wallet-url http://127.0.0.1:6666 set contract useraaaaaaaj ../../library/eosio.token eosio.token.wasm eosio.token.abi
        cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj create '["useraaaaaaai","100000000.0000 TES"]' -p useraaaaaaaj
        cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj issue '["useraaaaaaab","10000000.0000 TES","xxx"]' -p useraaaaaaai
        cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj issue '["useraaaaaaac","10000.0000 TES","xxx"]' -p useraaaaaaai
        cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj issue '["useraaaaaaad","10000.0000 TES","xxx"]' -p useraaaaaaai
        cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj issue '["useraaaaaaak","10000.0000 TES","xxx"]' -p useraaaaaaai
        cleos --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaaj useraaaaaaab "TES"
        cleos --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaaj useraaaaaaac "TES"
        cleos --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaaj useraaaaaaad "TES"
        cleos --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaaj useraaaaaaak "TES"

        eosio-cpp -abigen mallard.cpp -o mallard.wasm
        cleos --wallet-url http://127.0.0.1:6666 set contract gamemallards ./ mallard.wasm mallard.abi
    ;;
    
    temptest)
        #test shuffle for baccarat
        echo "temptest"
        eosio-cpp -abigen mallard.cpp -o mallard.wasm
        cleos --wallet-url http://127.0.0.1:6666 set contract gamemallards ./ mallard.wasm mallard.abi
        # init currencyinfo
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["useraaaaaaaj","TES","0.1000 TES"]' -p gamemallards
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["eosio.token","SYS","0.1000 SYS"]' -p gamemallards
        cleos get table gamemallards gamemallards currencyinfo
        for((num=1;num<=1;num++));
        do
            cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[20,useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
            tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
            cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
            sleep 5s
        done
        
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pushaliasnam '["","useraaaaaaae"]' -p useraaaaaaae
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pushaliasnam '["wls","useraaaaaaae"]' -p useraaaaaaae
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pushaliasnam '["wl1s","useraaaaaaae"]' -p useraaaaaaae
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pushaliasnam '["wangls","useraaaaaaah"]' -p useraaaaaaah
        cleos get table gamemallards gamemallards aliasinfo
        
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards depositable '[useraaaaaaab, '$tableid', "10.0000 TES"]' -p useraaaaaaab
        
        tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        
        cleos get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
        
        # cleos --wallet-url http://127.0.0.1:6666 push action gamemallards depositable '[useraaaaaaab, '$tableid', "23000.0000 TES"]' -p useraaaaaaab
        # cleos get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
        
        cleos get table gamemallards gamemallards aliasinfo
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        
        sleep 36s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaab useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704,0]' -p useraaaaaaah
        cleos get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaab
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
        
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', 1,"useraaaaaaaj","TES", "0.8000", "0.3000", "1001.0000 TES","100.0000 TES","100.0000 TES","1.0000 TES","50.0000 TES","1.0000 TES"]' -p useraaaaaaab
        cleos get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
        
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerwitdaw '['$tableid', "2000.0000 TES"]' -p useraaaaaaab
        # cleos get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
        
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards closetable '['$tableid']' -p useraaaaaaab
        #cleos get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
    ;;
    erasedata)
        #the second parameter is (103718369455 = erase end&&pause|| -2 = erase close)
        echo "erase old data(second parameter is (103718369455 = erase end&&pause|| -2 = erase close)"
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards clear12cache '[103718369455]' -p gamemallards
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards clear12cache '['$2']' -p gamemallards
    ;;
    importdata)
        echo "importdata test"
        nums=(29 100 13 8 91 44);
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards import12data '[180,0,"useraaaaaaab","0","0","100.0000 SYS","2.0000 SYS","3.0000 SYS","4.0000 SYS","5.0000 SYS","6.0000 SYS","7.0000 SYS","8.0000 SYS","9.0000 SYS","10.0000 SYS","11.0000 SYS","12.0000 SYS","13.0000 SYS","14.0000 SYS","15.0000 SYS","16.0000 SYS","17.0000 SYS",0.003,0.002,"0",{"symbol":"4,TES","contract":"useraaaaaaaj"}]' -p useraaaaaaak
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards import12data '[13,${nums[@]}]' -p gamemallards
    ;;
    testverdealerseed)
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        #tableid=$(($tableid + 1))
        tableid=1000
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaac useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',wlsiii]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',-20]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards trusteeship '['$tableid']' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaac useraaaaaaah

        ;;
    testcontinuetable)
        tableid=4750

        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah useraaaaaaac
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetable '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards continuetable '['$tableid']' -p useraaaaaaah
:<<!
        tableid=$(($tableid + 1))
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah useraaaaaaac
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetablesee '['$tableid']' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards continuetable '['$tableid']' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah useraaaaaaac
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards continuetable '['$tableid']' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah useraaaaaaac
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetablesee '['$tableid']' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards continuetable '['$tableid']' -p useraaaaaaac useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards continuetable '['$tableid']' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah useraaaaaaac
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetablesee '['$tableid']' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards continuetable '['$tableid']' -p useraaaaaaac useraaaaaaah

        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah useraaaaaaac
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetablesee '['$tableid']' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards continuetable '['$tableid']' -p useraaaaaaac useraaaaaaah
!
        ;;
    testdealerwitdaw)
        tableid=3590
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerwitdaw '['$tableid', "2000.0000 TES"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerwitdaw '['$tableid', "2000.0000 TES"]' -p useraaaaaaac

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerwitdaw '['$tableid', "200.0000 TES"]' -p useraaaaaaac useraaaaaaah
        sleep 1s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerwitdaw '['$tableid', "200.0000 TES"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerwitdaw '['$tableid', "0.0000 TES"]' -p useraaaaaaac useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerwitdaw '['$tableid', "2000000000000.0000 TES"]' -p useraaaaaaac useraaaaaaah


        ;;
    testdepositable)
        tableid=3850

        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards depositable '['$tableid', "10.0000 TES"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards depositable '['$tableid', "10.0000 TES"]' -p useraaaaaaac

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards depositable '['$tableid', "10.0000 TES"]' -p useraaaaaaac useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards depositable '[ '$tableid', "10.0000 TES"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards depositable '['$tableid', "0.0000 TES"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"40000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards depositable '['$tableid', "40000000000000000000000000.0000 TES"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah useraaaaaaac
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetablesee '['$tableid']' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards depositable '['$tableid', "10.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
        ;;
    testdisconnecthi)
        tableid=3210
:<<!
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards disconnecthi '["useraaaaaaac",'$tableid']' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards disconnecthi '["useraaaaaaac",'$tableid']' -p useraaaaaaac

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards disconnecthi '["useraaaaaaaa",'$tableid']' -p useraaaaaaac useraaaaaaah
!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards disconnecthi '["useraaaaaaac",'$tableid']' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards disconnecthi '["useraaaaaaac",'$tableid']' -p useraaaaaaac useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards disconnecthi '["useraaaaaaac",'$tableid']' -p useraaaaaaac useraaaaaaah


        ;;
    testverserverseed)
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        #tableid=$(($tableid + 1))
        tableid=5052

        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah","望"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaab useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704,"0"]' -p useraaaaaaah

:<<!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaah useraaaaaaac
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p gamemallards

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaac useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaac useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p useraaaaaaah

        tableid=3010
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaad,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaad useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        sleep 1s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',wlsiii]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaad,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaad useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        sleep 1s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p useraaaaaaah


        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaad,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaad useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards trusteeship '['$tableid']' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        sleep 1s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p useraaaaaaah

        #?
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaad,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaad useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaad useraaaaaaah
        sleep 1s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p useraaaaaaah


        tableid=5060
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah","wls"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
        sleep 32s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaac useraaaaaaah
        sleep 1s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p useraaaaaaah

        tableid=900
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        #for((num=1;num<=100;num++));
        #do
            #dealerseed=num;
            #dealerseedhash=`echo -n $num | sha256sum`
            #serverseed=num+1;
            #serverseedhash=`echo -n $num | sha256sum`
            cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',bdc5d8a48c23897906b09a9a3680bd2e9c8b3121edbda36f949800f0959c8d55]' -p useraaaaaaab useraaaaaaah
            cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',fa88d374b9cf5e059fad4a2fe406feae4c49cbf4803083ec521d3c75ee22557c]' -p useraaaaaaah
            cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
            cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","1.0200 TES","1.1000 TES","1.5000 TES","1.5000 TES", "useraaaaaaah","wang"]' -p useraaaaaaac useraaaaaaah
            #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "", ""]' -p useraaaaaaac useraaaaaaah
            #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", "useraaaaaaae", "王帅"]' -p useraaaaaaad useraaaaaaah
            sleep 32s
            cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
            cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',900]' -p useraaaaaaab useraaaaaaah
            sleep 3s
            cleos --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',901, 0]' -p useraaaaaaah
            cleos get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
        #done
!
        ;;

    testshuffle)
        tableid=3050
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaad,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaad,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p gamemallards

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaad,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaad useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah


        ;;
    testnewtable)
        #test newtable
        echo "test newtable"
        tableid=800

        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "0.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "0.0000 TES","0.0000 TES","0.0000 TES","0.0000 TES","0.0000 TES","0.0000 TES"]' -p useraaaaaaab useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"0.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","0.0001.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","0.0001 TES"]' -p useraaaaaaab useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TSS", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"100.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 0,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 2,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", wls,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        #for((num=2101;num<=2150;num++));
       # do
          #  cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$num',useraaaaaaai,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaai useraaaaaaah
         #   cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$num']' -p useraaaaaaah
         #   sleep 0.5s
       # done
        ;;

    testedittable)
        #test editable
        echo "test editable"
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        #tableid=$(($tableid + 5))
        tableid=950
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', 1,"useraaaaaaaj","TES", "0.8000", "0.3000", "1001.0000 TES","100.0000 TES","100.0000 TES","1.0000 TES","50.0000 TES","1.0000 TES"]' -p useraaaaaaah
:<<!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', 1,"useraaaaaaaj","TES", "0.8000", "0.3000", "1001.0000 TES","100.0000 TES","100.0000 TES","1.0000 TES","50.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', 1,"useraaaaaaaj","TES", "0.8000", "0.3000", "1001.0000 TES","100.0000 TES","100.0000 TES","1.0000 TES","50.0000 TES","1.0000 TES"]' -p useraaaaaaab

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', 1,"useraaaaaaaj","TES", "0.8000", "0.3000", "1001.0000 TES","100.0000 TES","100.0000 TES","1.0000 TES","50.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', 1,"useraaaaaaaj","TES", "0.8000", "0.3000", "0.0000 TES","0.0000 TES","0.0000 TES","0.0000 TES","0.0000 TES","0.0000 TES"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","0.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', 1,"useraaaaaaaj","TES", "0.8000", "0.3000", "1001.0000 TES","100.0000 TES","100.0000 TES","1.0000 TES","50.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', 1,"useraaaaaaaj","TES", "0.8000", "0.3000", "1001.0000 TES","0.001.0000 TES","100.0000 TES","1.0000 TES","50.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', 0,"useraaaaaaaj","TES", "0.8000", "0.3000", "1001.0000 TES","100.0000 TES","100.0000 TES","1.0000 TES","50.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', 1,"useraaaaaaaj","TES", "0.8000", "0.3000", "1001.0000 TES","100.0000 TES","100.0000 TES","1.0000 TES","50.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', -2,"useraaaaaaaj","TES", "0.8000", "0.3000", "1001.0000 TES","100.0000 TES","100.0000 TES","1.0000 TES","50.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', wls,"useraaaaaaaj","TES", "0.8000", "0.3000", "1001.0000 TES","100.0000 TES","100.0000 TES","1.0000 TES","50.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
!
        ;;

    testdealerseed)
        tableid=502
:<<!
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '[20000000000000000000000000,4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',wls]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards trusteeship '['$tableid']' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        ;;

    testtrusteeship)
        #tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        #tableid=$(($tableid + 1))
        tableid=800
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards trusteeship '['$tableid']' -p useraaaaaaah
:<<!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards trusteeship '['$tableid']' -p gamemallards

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards trusteeship '['$tableid']' -p useraaaaaaab useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards trusteeship '['$tableid']' -p useraaaaaaab useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards trusteeship '['$tableid']' -p useraaaaaaab useraaaaaaah
!
        ;;
    testexittuteship)
        tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        tableid=$(($tableid + 5))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaah
:<<!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaak

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaac useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaac useraaaaaaah
!
        ;;

    testclosetable)
        tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        tableid=$(($tableid + 5))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards closetable '['$tableid']' -p  useraaaaaaah
:<<!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards closetable '['$tableid']' -p useraaaaaaak

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards closetable '['$tableid']' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards closetable '['$tableid']' -p useraaaaaaac useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards closetable '['$tableid']' -p useraaaaaaac useraaaaaaah
!
        ;;

    testclear12cache)
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards clear12cache '[103718369455]' -p useraaaaaaah

        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards clear12cache '[103718369455]' -p gamemallards

        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards clear12cache '[-2]' -p gamemallards

        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards clear12cache '[wls]' -p gamemallards

        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards clear12cache '[2000000000000000000000000]' -p gamemallards

        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards clear12cache '[-110]' -p gamemallards
        ;;
    testpausetabledea)
        tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        tableid=$(($tableid + 5))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetabledea '['$tableid']' -p useraaaaaaah
:<<!
        tableid=$(($tableid + 5))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetabledea '['$tableid']' -p useraaaaaaab


        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetabledea '['$tableid']' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetabledea '['$tableid']' -p useraaaaaaac useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetabledea '['$tableid']' -p useraaaaaaac useraaaaaaah
!
        ;;

    testpausetablesee)
        tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
        tableid=$(($tableid + 5))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetablesee '['$tableid']' -p useraaaaaaah
:<<!
        tableid=$(($tableid + 5))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetablesee '['$tableid']' -p useraaaaaaac

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetablesee '['$tableid']' -p  useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaac,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetablesee '['$tableid']' -p useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pausetablesee '['$tableid']' -p useraaaaaaah
!
        ;;

    testserverseed)
        tableid=650
:<<!
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaab
!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards trusteeship '['$tableid']' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        ;;

    testplayerbet)
        tableid=720
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah


        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaab

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","0.0000 TES","0.0000 TES","0.0000 TES","0.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"1.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.5000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"1.0000 TES","0.50000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"1.0000 TES","2.0000 TES","0.5000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"1.0000 TES","2.0000 TES","2.0000 TES","0.5000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"1.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","0.5000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"1.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"10.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"1.0000 TES","1.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"1.0000 TES","1.0000 TES","20.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        #tableid=$(($tableid + 1))
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"1.0000 TES","1.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"1.0000 TES","1.0000 TES","2.0000 TES","20.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        #tableid=$(($tableid + 1))
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"1.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        #sleep 3s
        #cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"1.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah

        ;;

    testendbet)
        tableid=tableid=`cleos get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
:<<!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        sleep 36s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        sleep 36s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaak

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        sleep 36s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        sleep 3s
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
        cleos get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
!
        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$tableid',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "useraaaaaaah", "王帅"]' -p useraaaaaaac useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah

        ;;

    testpushaliasnam)
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pushaliasnam '["","useraaaaaaae"]' -p useraaaaaaae
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pushaliasnam '["","useraaaaaaae"]' -p useraaaaaaak
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pushaliasnam '["wls","useraaaaaaae"]' -p useraaaaaaae
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pushaliasnam '["wls","useraaaaaaad"]' -p useraaaaaaad
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards pushaliasnam '["wangl","useraaaaaaae"]' -p useraaaaaaae
        ;;

    testinitsymbol)
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["useraaaaaaaj","TES","0.1000 TES"]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["useraaaaaaab","SSS","0.1000 SSS"]' -p gamemallards
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["useraaaaaaaj","TES","0.1000 TES"]' -p gamemallards
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["useraaaaaaaj","TES","0.3000 TES"]' -p gamemallards
        cleos get table gamemallards gamemallards currencyinfo
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["eosio.token","SYS","0.1000 TES"]' -p gamemallards

        ;;

    testupgrading)
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards upgrading '["1"]' -p useraaaaaaah
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards upgrading '["1"]' -p gamemallards
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards upgrading '["wls"]' -p gamemallards
        ;;

        testimport12data)
        tableid=3300
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards import12data '['$tableid',0,2,"useraaaaaaab","0","0","100.0000 SYS","2.0000 SYS","3.0000 SYS","4.0000 SYS","5.0000 SYS","6.0000 SYS","7.0000 SYS","8.0000 SYS","9.0000 SYS",0.003,0.002,"0",{"symbol":"4,TES","contract":"useraaaaaaaj"}, [1,2,3]]' -p gamemallards

        tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards import12data '['$tableid',0,2,"useraaaaaaab","0","0","100.0000 SYS","2.0000 SYS","3.0000 SYS","4.0000 SYS","5.0000 SYS","6.0000 SYS","7.0000 SYS","8.0000 SYS","9.0000 SYS",0.003,0.002,"0",{"symbol":"4,TES","contract":"useraaaaaaaj"}, [1,2,3]]' -p gamemallards

        sleep 3s
        #tableid=$(($tableid + 1))
        cleos --wallet-url http://127.0.0.1:6666 push action gamemallards import12data '['$tableid',0,2,"useraaaaaaab","0","0","100.0000 SYS","2.0000 SYS","3.0000 SYS","4.0000 SYS","5.0000 SYS","6.0000 SYS","7.0000 SYS","8.0000 SYS","9.0000 SYS",0.003,0.002,"0",{"symbol":"4,TES","contract":"useraaaaaaaj"}, [1,2,3]]' -p gamemallards
        ;;
    testchangeprivat)

        ;;
esac









