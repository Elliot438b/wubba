#!/bin/bash
eosio-cpp -abigen wubba.cpp -o wubba.wasm
# cleos --wallet-url http://127.0.0.1:6666 system buyram useraaaaaaai useraaaaaaaa "10 SYS"
cleos --wallet-url http://127.0.0.1:6666 set contract useraaaaaaaa ./ wubba.wasm wubba.abi

cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaab active '{"threshold":1,"keys":[{"key":"EOS7yBtksm8Kkg85r4in4uCbfN77uRwe82apM8jjbhFVDgEgz3w8S","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaa","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaab
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa newtable '['119',useraaaaaaab,"5.0000 SYS"]' -p useraaaaaaab
	
for((num=1;num<=1;num++));
do
	echo "this roundId: $num"
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa dealerseed '['119',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa serverseed '['119',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['119',6,useraaaaaaac,100]' -p useraaaaaaac
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['119',2,useraaaaaaad,20]' -p useraaaaaaad
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['119',1,useraaaaaaae,500]' -p useraaaaaaae
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['119',8,useraaaaaaaf,20]' -p useraaaaaaaf
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['119',2,useraaaaaaag,500]' -p useraaaaaaag
	cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L 119 -U 119
	sleep 36s
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa endbet '['119']' -p useraaaaaaah
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verdealeseed '['119',10]' -p useraaaaaaab
	sleep 3s
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verserveseed '['119',704]' -p useraaaaaaah
	cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L 119 -U 119
	sleep 3s
done

# trusteeship:
echo "this roundId test: trusteeship"
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa trusteeship '[119]' -p useraaaaaaab
# cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa dealerseed '[119,9d8cc53ec9a3db76af85145d224201054044d56158d8f6186ea8cc22f3b2f4dd]' -p useraaaaaaab
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa serverseed '[119,a2829e4ffc37947dc9172cd3aeb6a1f19bf6bf27ea0abe2c527884620614eff3]' -p useraaaaaaah
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[119,6,useraaaaaaac,1000]' -p useraaaaaaac
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[119,2,useraaaaaaad,20]' -p useraaaaaaad
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[119,1,useraaaaaaae,500]' -p useraaaaaaae
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[119,8,useraaaaaaaf,20]' -p useraaaaaaaf
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[119,2,useraaaaaaag,500]' -p useraaaaaaag
cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L 119 -U 119
sleep 36s
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa endbet '['119']' -p useraaaaaaah
# cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verdealeseed '[119,"1w1"]' -p useraaaaaaab
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verserveseed '[119,"2l3wxx2"]' -p useraaaaaaah
cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L 119 -U 119
sleep 3s

# exitruteship:
echo "this roundId test: exitruteship, logic is same to first"
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa exitruteship '[119]' -p useraaaaaaab
for((num=1;num<=1;num++));
do
	echo "this roundId: $num"
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa dealerseed '['119',9d8cc53ec9a3db76af85145d224201054044d56158d8f6186ea8cc22f3b2f4dd]' -p useraaaaaaab
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa serverseed '['119',a2829e4ffc37947dc9172cd3aeb6a1f19bf6bf27ea0abe2c527884620614eff3]' -p useraaaaaaah
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['119',6,useraaaaaaac,100]' -p useraaaaaaac
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['119',2,useraaaaaaad,20]' -p useraaaaaaad
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['119',1,useraaaaaaae,500]' -p useraaaaaaae
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['119',8,useraaaaaaaf,20]' -p useraaaaaaaf
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '['119',2,useraaaaaaag,500]' -p useraaaaaaag
	cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L 119 -U 119
	sleep 36s
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa endbet '['119']' -p useraaaaaaah
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verdealeseed '['119',1w1]' -p useraaaaaaab
	sleep 3s
	cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verserveseed '['119',2l3wxx2]' -p useraaaaaaah
	cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L 119 -U 119
	sleep 3s
done

# dealer disconnect:
echo "this roundId test: exitruteship, logic is same to trusteeship"
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa exitruteship '[119]' -p useraaaaaaab
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa dealerseed '[119,4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa serverseed '[119,e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[119,6,useraaaaaaac,1000]' -p useraaaaaaac
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[119,2,useraaaaaaad,20]' -p useraaaaaaad
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[119,1,useraaaaaaae,500]' -p useraaaaaaae
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[119,8,useraaaaaaaf,20]' -p useraaaaaaaf
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[119,2,useraaaaaaag,500]' -p useraaaaaaag
cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L 119 -U 119
sleep 36s
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa endbet '['119']' -p useraaaaaaah
# cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verdealeseed '[119,"10"]' -p useraaaaaaab
sleep 3s
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verserveseed '[119,"704"]' -p useraaaaaaah
cleos get table useraaaaaaaa useraaaaaaaa tablesinfo -L 119 -U 119
sleep 3s

#token test

cleos --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaaa
cleos --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaab
cleos --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaac
cleos --wallet-url http://127.0.0.1:6666 get currency balance eosio.token useraaaaaaad

cleos --wallet-url http://127.0.0.1:6666 push action eosio.token transfer '["useraaaaaaab","useraaaaaaaa","5.0000 SYS","test"]' -p useraaaaaaab

#(dealer)useraaaaaaab transfer to self(useraaaaaaaa)
cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaab active '{"threshold":1,"keys":[{"key":"EOS7yBtksm8Kkg85r4in4uCbfN77uRwe82apM8jjbhFVDgEgz3w8S","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaa","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaab
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa newtable '[useraaaaaaab,"20.0000 SYS"]' -p useraaaaaaab
cleos get table useraaaaaaaa useraaaaaaaa tablesinfoar

cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa dealerseed '[12,4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa serverseed '[12,e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah

#(player)useraaaaaaac transfer to self(useraaaaaaaa)
cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaac active '{"threshold":1,"keys":[{"key":"EOS7WnhaKwHpbSidYuh2DF1qAExTRUtPEdZCaZqt75cKcixuQUtdA","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaa","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaac
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[12,6,useraaaaaaac,"3.0000 SYS"]' -p useraaaaaaac
cleos get table useraaaaaaaa useraaaaaaaa tablesinfoas -L 119 -U 119

#(player)useraaaaaaad transfer to self(useraaaaaaaa)
cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaad active '{"threshold":1,"keys":[{"key":"EOS7Bn1YDeZ18w2N9DU4KAJxZDt6hk3L7eUwFRAc1hb5bp6xJwxNV","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaa","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaad
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[12,2,useraaaaaaad,"3.0000 SYS"]' -p useraaaaaaad

#(player)useraaaaaaae transfer to self(useraaaaaaaa)
cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaae active '{"threshold":1,"keys":[{"key":"EOS7Bn1YDeZ18w2N9DU4KAJxZDt6hk3L7eUwFRAc1hb5bp6xJwxNV","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaa","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaae
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa playerbet '[12,2,useraaaaaaae,"3.0000 SYS"]' -p useraaaaaaae

sleep 36s
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa endbet '[12]' -p useraaaaaaah
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verdealeseed '[12,10]' -p useraaaaaaab
sleep 3s
#(self)useraaaaaaaa transfer to (useraaaaaaaa@eosio.code)
cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaaa active '{"threshold":1,"keys":[{"key":"EOS69X3383RzBZj41k73CSjUNXM5MYGpnDxyPnWUKPEtYQmTBWz4D","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaa","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaaa
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaa verserveseed '[12,704]' -p useraaaaaaah
cleos get table useraaaaaaaa useraaaaaaaa tablesinfoas -L 119 -U 119





