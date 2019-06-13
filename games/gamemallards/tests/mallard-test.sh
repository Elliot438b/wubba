#————————————————————————————————————————————————————————————— start —————————————————————————————————————————
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[16,useraaaaaaab,"4000.0000 EOS", 1,0,"useraaaaaaai","EOS", "0.001", "0", "0.0005","25.0000 EOS","1.0000 EOS","10.0000 EOS","1.0000 EOS","10.0000 EOS","1.0000 EOS"]' -p useraaaaaaab useraaaaaaah
tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 5s

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"10.0000 EOS","10.0000 EOS","10.0000 EOS","10.0000 EOS","10.0000 EOS", "useraaaaaaab","useraaaaaaad","小明"]' -p useraaaaaaac useraaaaaaah
sleep 6s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704,1]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

# cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaad,"5.0000 EOS","5.0000 EOS","5.0000 EOS","5.0000 EOS","5.0000 EOS", "","中明"]' -p useraaaaaaad useraaaaaaah
# cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaab,"0.0000 EOS","1.0000 EOS","0.0000 EOS","0.0000 EOS","0.0000 EOS", useraaaaaaah,"abc"]' -p useraaaaaaab useraaaaaaah
# cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaaf,"0.0000 EOS","0.0000 EOS","1.0000 EOS","0.0000 EOS","0.0000 EOS", useraaaaaaab,"小军"]' -p useraaaaaaaf useraaaaaaah
# cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaaa,"0.0000 EOS","0.0000 EOS","0.0000 EOS","1.0000 EOS","0.0000 EOS", useraaaaaaac,"李飞"]' -p useraaaaaaaa useraaaaaaah
# cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaab,"0.0000 EOS","0.0000 EOS","0.0000 EOS","0.0000 EOS","1.0000 EOS", useraaaaaaac,"杜力"]' -p useraaaaaaab useraaaaaaah
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

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards edittable '['$tableid', 1,"useraaaaaaaj","EOS", "0.8000", "0.3000", "1001.0000 EOS","100.0000 EOS","100.0000 EOS","1.0000 EOS","50.0000 EOS","1.0000 EOS"]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

#cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards dealerwitdaw '['$tableid', "2000.0000 EOS"]' -p useraaaaaaab
# cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

#cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards closetable '['$tableid']' -p useraaaaaaab
#cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

#  ----------------------------------------------------------- erasedata)
#the second parameter is (103718369455 = erase end&&pause|| -2 = erase close)
echo "erase old data(second parameter is (103718369455 = erase end&&pause|| -2 = erase close)"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards clear12cache '[103718369455]' -p gamemallards

#  ----------------------------------------------------------- importdata)
echo "importdata EOSt"
nums=(29 100 13 8 91 44);
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards import12data '[180,0,"useraaaaaaab","0","0","100.0000 SYS","2.0000 SYS","3.0000 SYS","4.0000 SYS","5.0000 SYS","6.0000 SYS","7.0000 SYS","8.0000 SYS","9.0000 SYS","10.0000 SYS","11.0000 SYS","12.0000 SYS","13.0000 SYS","14.0000 SYS","15.0000 SYS","16.0000 SYS","17.0000 SYS",0.003,0.002,"0",{"symbol":"4,EOS","contract":"useraaaaaaaj"}]' -p useraaaaaaak
#cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards import12data '[13,${nums[@]}]' -p useraaaaaaak

#  ----------------------------------------------------------- shuffle)
#EOSt shuffle for bac
echo "EOSt shuffle"
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
#EOSt pausetable for bac
echo "EOSt pausetable continuetable and closetable"
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
echo "normalflow EOSt"
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
echo "trusteeship EOSt"
eosio-cpp -abigen gamemallards.cpp -o gamemallards.wasm
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 set contract gamemallards ./ gamemallards.wasm gamemallards.abi
#cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[useraaaaaaab,"23000.0000 SYS", 1, "0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS","0.0000 SYS"]' -p useraaaaaaab
#tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[20,useraaaaaaab,"4000.0000 EOS", 1,"useraaaaaaaj","EOS", "0.005", "0.002", "5.0000 EOS","1.0000 EOS","5.0000 EOS","1.0000 EOS","5.0000 EOS","1.0000 EOS"]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[22,useraaaaaaab,"4000.0000 EOS", 1,"useraaaaaaaj","EOS", "0.005", "0.002", "5.0000 EOS","1.0000 EOS","5.0000 EOS","1.0000 EOS","5.0000 EOS","1.0000 EOS"]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[24,useraaaaaaab,"4000.0000 EOS", 1,"useraaaaaaaj","EOS", "0.005", "0.002", "5.0000 EOS","1.0000 EOS","5.0000 EOS","1.0000 EOS","5.0000 EOS","1.0000 EOS"]' -p useraaaaaaab useraaaaaaah
tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 1000|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards upgrading '["1"]' -p gamemallards
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards upgrading '["0"]' -p gamemallards
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards trusteeship '['$tableid']' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards exitruEOShip '['$tableid']' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards shuffleinfo -L $tableid -U $tableid
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"0.0000 EOS","2.0000 EOS","2.0000 EOS","2.0000 EOS","2.0000 EOS", "wangls", "王帅"]' -p useraaaaaaac useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 36s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaab useraaaaaaah
sleep 3s
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704]' -p useraaaaaaah
cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
sleep 3s

# ----------------------------------------------------------- exitruEOShip)
echo "exitruEOShip EOSt"
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[useraaaaaaab,"23000.0000 SYS"]' -p useraaaaaaab
tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards exitruEOShip '['$tableid']' -p useraaaaaaab
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
echo "dealer disconnect EOSt"
tableid=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`

cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards exitruEOShip '['$tableid']' -p useraaaaaaab
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









