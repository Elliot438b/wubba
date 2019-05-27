# ----------------------------------------------------------- chain restart, set permission
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 system newaccount useraaaaaaaa gamemallards EOS8Znrtgwt8TfpmbVpTKvA2oB8Nqey625CLN8bCN3TEbgx86Dsvr --buy-ram "1000 SYS" --stake-net "1000 SYS" --stake-cpu "1000 SYS" --transfer
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 transfer useraaaaaaam gamemallards "100000 SYS"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaab active '{"threshold":1,"keys":[{"key":"EOS7yBtksm8Kkg85r4in4uCbfN77uRwe82apM8jjbhFVDgEgz3w8S","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaab
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaac active '{"threshold":1,"keys":[{"key":"EOS7WnhaKwHpbSidYuh2DF1qAExTRUtPEdZCaZqt75cKcixuQUtdA","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaac
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaad active '{"threshold":1,"keys":[{"key":"EOS7Bn1YDeZ18w2N9DU4KAJxZDt6hk3L7eUwFRAc1hb5bp6xJwxNV","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaad
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaae active '{"threshold":1,"keys":[{"key":"EOS6cNcTC6WTFkKV4C8DoxcTXdDTDKvj3vgZEVDGVFckK1eTNJQtf","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaae
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaaf active '{"threshold":1,"keys":[{"key":"EOS8UkmsnCo4GxDihbKwgoZY6f2QLSMEqBZ2frGLckxrCHrz15r7X","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaaf
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaak active '{"threshold":1,"keys":[{"key":"EOS6iwndPo58Y2ihWshfhnFbEBJHGkZtujR1bn7bVLngnTWFA8Hm3","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaak
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set account permission gamemallards active '{"threshold":1,"keys":[{"key":"EOS69X3383RzBZj41k73CSjUNXM5MYGpnDxyPnWUKPEtYQmTBWz4D","weight":1}],"accounts":[{"permission":{"actor":"gamemallards","permission":"eosio.code"},"weight":1}]}' owner -p gamemallards

# custom token issue 1.
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 system buyram useraaaaaaag useraaaaaaaj "10 SYS"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set contract useraaaaaaaj ../../library/eosio.token eosio.token.wasm eosio.token.abi
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj create '["useraaaaaaai","100000000.0000 TES"]' -p useraaaaaaaj
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj issue '["useraaaaaaab","10000000.0000 TES","xxx"]' -p useraaaaaaai
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj issue '["useraaaaaaac","10000.0000 TES","xxx"]' -p useraaaaaaai
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj issue '["useraaaaaaad","10000.0000 TES","xxx"]' -p useraaaaaaai
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj issue '["useraaaaaaak","10000.0000 TES","xxx"]' -p useraaaaaaai
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj issue '["useraaaaaaaj","10000.0000 TES","xxx"]' -p useraaaaaaai
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj issue '["useraaaaaaaf","10000.0000 TES","xxx"]' -p useraaaaaaai
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj issue '["gamemallards","10000.0000 TES","xxx"]' -p useraaaaaaai
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaaj useraaaaaaaf "TES"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaaj useraaaaaaab "TES"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaaj useraaaaaaac "TES"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaaj useraaaaaaad "TES"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaaj useraaaaaaak "TES"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaaj useraaaaaaaj "TES"
# custom token issue 2.
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 system buyram useraaaaaaag useraaaaaaal "10 SYS"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set contract useraaaaaaal ../../library/eosio.token eosio.token.wasm eosio.token.abi
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaal create '["useraaaaaaal","100000000.0000 GDP"]' -p useraaaaaaal
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaal issue '["useraaaaaaab","10000000.0000 GDP","xxx"]' -p useraaaaaaal
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaal issue '["useraaaaaaac","10000.0000 GDP","xxx"]' -p useraaaaaaal
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaal issue '["gamemallards","10000.0000 GDP","xxx"]' -p useraaaaaaal
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaal issue '["useraaaaaaad","10000.0000 GDP","xxx"]' -p useraaaaaaal
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaal issue '["useraaaaaaak","10000.0000 GDP","xxx"]' -p useraaaaaaal
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action useraaaaaaal issue '["useraaaaaaal","10000.0000 GDP","xxx"]' -p useraaaaaaal
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaal useraaaaaaab "GDP"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaal useraaaaaaac "GDP"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaal useraaaaaaad "GDP"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaal useraaaaaaad "GDP"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance useraaaaaaal useraaaaaaal "GDP"

# ----------------------------------------------------------- test shuffle for bac
echo "temptest"
#eosio-cpp -abigen gamemallards.cpp -o gamemallards.wasm
eosio-cpp -o gamemallards.wasm gamemallards.cpp --abigen -I .
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set contract gamemallards ./ gamemallards.wasm gamemallards.abi
# init currencyinfo
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["useraaaaaaaj","TES","0.1000 TES"]' -p gamemallards
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["useraaaaaaal","GDP","0.1000 GDP"]' -p gamemallards
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["eosio.token","SYS","0.1000 SYS"]' -p gamemallards
# error test
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["useraaaaaaaa","GDP","0.1000 GDP"]' -p gamemallards
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["useraaaaaaal","GDA","0.1000 GDA"]' -p gamemallards
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards initsymbol '["useraaaaaaal","GDP","0.1000 GDA"]' -p gamemallards

cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards currencyinfo
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[10,useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
sleep 5s

#cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards depositable '[useraaaaaaab, '$tableid', "10.0000 TES"]' -p useraaaaaaab

tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid

cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

# cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards depositable '[useraaaaaaab, '$tableid', "23000.0000 TES"]' -p useraaaaaaab
# cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards aliasinfo
sleep 3s

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"1.0000 TES","0.0000 TES","0.0000 TES","0.0000 TES","0.0000 TES", "","中明"]' -p useraaaaaaad useraaaaaaah
sleep 2s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704,1]' -p useraaaaaaah

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","0.0000 TES", "","小明"]' -p useraaaaaaac useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaab,"0.0000 TES","1.0000 TES","0.0000 TES","0.0000 TES","0.0000 TES", useraaaaaaah,"abc"]' -p useraaaaaaab useraaaaaaah

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaaf,"0.0000 TES","1.0000 TES","0.0000 TES","0.0000 TES","0.0000 TES", useraaaaaaah,"小军"]' -p useraaaaaaaf useraaaaaaah
#cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", useraaaaaaah,"abc"]' -p useraaaaaaac useraaaaaaah
#cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 TES","100.0000 TES","0.0000 TES","10.0000 TES","10.0000 TES", useraaaaaaah,"cxvx"]' -p useraaaaaaad useraaaaaaah

sleep 36s


cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaab useraaaaaaah
sleep 3s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704,1]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704,0]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', 1,"useraaaaaaaj","TES", "0.8000", "0.3000", "1001.0000 TES","100.0000 TES","100.0000 TES","1.0000 TES","50.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

#cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards dealerwitdaw '['$tableid', "2000.0000 TES"]' -p useraaaaaaab
# cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

#cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards closetable '['$tableid']' -p useraaaaaaab
#cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

#  ----------------------------------------------------------- erasedata)
#the second parameter is (103718369455 = erase end&&pause|| -2 = erase close)
echo "erase old data(second parameter is (103718369455 = erase end&&pause|| -2 = erase close)"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards clear12cache '['$2']' -p useraaaaaaak

#  ----------------------------------------------------------- importdata)
echo "importdata test"
nums=(29 100 13 8 91 44);
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards import12data '[180,0,"useraaaaaaab","0","0","100.0000 SYS","2.0000 SYS","3.0000 SYS","4.0000 SYS","5.0000 SYS","6.0000 SYS","7.0000 SYS","8.0000 SYS","9.0000 SYS","10.0000 SYS","11.0000 SYS","12.0000 SYS","13.0000 SYS","14.0000 SYS","15.0000 SYS","16.0000 SYS","17.0000 SYS",0.003,0.002,"0",{"symbol":"4,TES","contract":"useraaaaaaaj"}]' -p useraaaaaaak
#cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards import12data '[13,${nums[@]}]' -p useraaaaaaak

#  ----------------------------------------------------------- shuffle)
#test shuffle for bac
echo "test shuffle"
eosio-cpp -abigen gamemallards.cpp -o gamemallards.wasm
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set contract gamemallards ./ gamemallards.wasm gamemallards.abi
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[useraaaaaaab,"23000.0000 SYS", 1, "1.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS"]' -p useraaaaaaab
tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards hashseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5,e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"500.0000 SYS","0.0000 SYS","3.0000 SYS","4.0000 SYS","3.0000 SYS"]' -p useraaaaaaac useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 SYS","100.0000 SYS","0.0000 SYS","10.0000 SYS","10.0000 SYS"]' -p useraaaaaaad useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 36s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaab
sleep 3s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

#  ----------------------------------------------------------- pausetable)
#test pausetable for bac
echo "test pausetable continuetable and closetable"
eosio-cpp -abigen gamemallards.cpp -o gamemallards.wasm
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set contract gamemallards ./ gamemallards.wasm gamemallards.abi
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[useraaaaaaab,"23000.0000 SYS", 1, "0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS"]' -p useraaaaaaab
tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards pausetable '['$tableid']' -p useraaaaaaab
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards hashseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5,e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaab useraaaaaaah

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards continuetable '['$tableid']' -p useraaaaaaab

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"500.0000 SYS","0.0000 SYS","3.0000 SYS","4.0000 SYS","3.0000 SYS"]' -p useraaaaaaac useraaaaaaah
#cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"0.0000 SYS","100.0000 SYS","0.0000 SYS","10.0000 SYS","10.0000 SYS"]' -p useraaaaaaad useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 36s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaab
sleep 3s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards closetable '['$tableid']' -p useraaaaaaab
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards continuetable '['$tableid']' -p useraaaaaaab
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

#  ----------------------------------------------------------- normalflow)
echo "normalflow test"
eosio-cpp -abigen gamemallards.cpp -o gamemallards.wasm
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set contract gamemallards ./ gamemallards.wasm gamemallards.abi
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[useraaaaaaab,"23000.0000 SYS", 1, "0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS"]' -p useraaaaaaab
tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`

#  cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[useraaaaaaac,"23000.0000 SYS"]' -p useraaaaaaac
#  cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[useraaaaaaab,"24202.0000 SYS"]' -p useraaaaaaab
#second index
#  cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo --index 2 --key-type name -L useraaaaaaac -U useraaaaaaac

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance eosio.token gamemallards
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaab
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaac
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaad

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards hashseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5,e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"200.0000 SYS","0.0000 SYS","3.0000 SYS","4.0000 SYS","3.0000 SYS"]' -p useraaaaaaac useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"200.0000 SYS","0.0000 SYS","3.0000 SYS","4.0000 SYS","3.0000 SYS"]' -p useraaaaaaad useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaae,"200.0000 SYS","0.0000 SYS","3.0000 SYS","4.0000 SYS","3.0000 SYS"]' -p useraaaaaaae useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 36s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaab
sleep 3s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 3s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance eosio.token gamemallards
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaab
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaac
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaad
sleep 3s

#   ----------------------------------------------------------- trusteeship)
# start
echo "trusteeship test"
eosio-cpp -abigen gamemallards.cpp -o gamemallards.wasm
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set contract gamemallards ./ gamemallards.wasm gamemallards.abi
#cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[useraaaaaaab,"23000.0000 SYS", 1, "0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS"]' -p useraaaaaaab
#tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[20,useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[22,useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[24,useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 1000|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards upgrading '["1"]' -p useraaaaaaak
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards upgrading '["0"]' -p useraaaaaaak
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards trusteeship '['$tableid']' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES","2.0000 TES", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 36s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaab useraaaaaaah
sleep 3s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 3s

# ----------------------------------------------------------- exitruteship)
echo "exitruteship test"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[useraaaaaaab,"23000.0000 SYS"]' -p useraaaaaaab
tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaab
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards hashseed '['$tableid',9d8cc53ec9a3db76af85145d224201054044d56158d8f6186ea8cc22f3b2f4dd,a2829e4ffc37947dc9172cd3aeb6a1f19bf6bf27ea0abe2c527884620614eff3]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"200.0000 SYS","0.0000 SYS","3.0000 SYS","4.0000 SYS","3.0000 SYS"]' -p useraaaaaaac useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"200.0000 SYS","0.0000 SYS","3.0000 SYS","4.0000 SYS","3.0000 SYS"]' -p useraaaaaaad useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaae,"200.0000 SYS","0.0000 SYS","3.0000 SYS","4.0000 SYS","3.0000 SYS"]' -p useraaaaaaae useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 36s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',1w1]' -p useraaaaaaab
sleep 3s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',2l3wxx2]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 3s

#  ----------------------------------------------------------- disconnect)
echo "dealer disconnect test"
tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards exitruteship '['$tableid']' -p useraaaaaaab
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards hashseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5,e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"200.0000 SYS","0.0000 SYS","3.0000 SYS","4.0000 SYS","3.0000 SYS"]' -p useraaaaaaac useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"200.0000 SYS","0.0000 SYS","3.0000 SYS","4.0000 SYS","3.0000 SYS"]' -p useraaaaaaad useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaae,"200.0000 SYS","0.0000 SYS","3.0000 SYS","4.0000 SYS","3.0000 SYS"]' -p useraaaaaaae useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 36s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
# cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',"10"]' -p useraaaaaaab
sleep 3s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',"704"]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 3s









