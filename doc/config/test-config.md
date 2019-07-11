> gamemallards:    
owner   
Private key: 5J4ZiJ2rYeziyzi2PQfPLXgHHra5rBaxxYYgBEWTRY6JPrnviZu   
Public key: EOS5uenwn1i3UXTrxnpnsjAGz7NWjMeW3e9XQ2sKqyvFgfCWUEfam   
active   
Private key: 5K6LU8aVpBq9vJsnpCvaHCcyYwzPPKXfDdyefYyAMMs3Qy42fUr   
Public key: EOS7WnhaKwHpbSidYuh2DF1qAExTRUtPEdZCaZqt75cKcixuQUtdA   
jungle-chainid:e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473   

> game12lizard:   

Private key: 5KYDF8GUdxD5MBexhMrvMWEJkRheSgJRrR6iZ7MDjTUhK68XouK   
Public key: EOS5cnHuRqC6rjLZsSwVEoz2fCDmeXVpyiCAdfisWPeC5L2m4aG1b   

> test accounts:   

账户: usereeeeeeeh   
私钥: 5JMQ7Q5oiMbsacxS5NevNq3eRHbodSZcaTqtrGfHsbwofrqpyTG   
公钥: EOS8jfRjerUzm3VweXPKfXnJ9LuWd1zF66CPkS1d54JWnwPyJbaQa   

账户: usereeeeeeei   
私钥: 5JTWxfTYww2jfkGeuuJgCqmigAkvxT4z6wbSgvvovd291GASBqE   
公钥: EOS8EzpbznNP1t2Rho5XExwM34EbSrJNQeaYEZG3eNioCoKbwjkEv   
   
账户: usereeeeeeej   
私钥: 5K2AVHLSvYTMPwz9fzFWR8BQuXwyAMRwfaCWbjwn81MoNyHuPNv   
公钥: EOS5nJogs6CxLaGdJwqiVTo6gqWREwyzTpPQfyszRgarCNkSEizdc   

账户: usereeeeeeek   
私钥: 5KTkd1bBeJDpAmL9fQsWGYmKg26jqmZHeZgaNnzq5H4XaLcuShF   
公钥: EOS5Cq5qYbbZTsKFZEJGoNUtu5BzyBF24spBg9dFim6dRuAaeVQCB   


部署jungle测试网命令：

cleos --url http://jungle2.cryptolions.io --wallet-url http://127.0.0.1:6666 set contract gamemallards ./ gamemallards.wasm gamemallards.abi

jungle测试网部署完毕测试：

cleos --url http://jungle2.cryptolions.io --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '[16,useraaaaaaab,"4000.0000 EOS", 1,0,"useraaaaaaai","EOS", "0.001", "0", "0.0005","25.0000 EOS","1.0000 EOS","10.0000 EOS","1.0000 EOS","10.0000 EOS","1.0000 EOS"]' -p useraaaaaaab useraaaaaaah

tableid=`cleos --url http://jungle2.cryptolions.io get table gamemallards gamemallards tablesinfo -l 100|grep tableId|awk -F' ' 'END {print $NF}' |awk -F ',' '{print $1}'`

cleos --url http://jungle2.cryptolions.io --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$tableid']' -p useraaaaaaah

cleos --url http://jungle2.cryptolions.io get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid

cleos --url http://jungle2.cryptolions.io --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$tableid',4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5]' -p useraaaaaaab useraaaaaaah

cleos --url http://jungle2.cryptolions.io --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$tableid',e4e549408422875958476160732390defefcac7c2bd8353d918fe452d20de2a6]' -p useraaaaaaah

cleos --url http://jungle2.cryptolions.io --wallet-url http://127.0.0.1:6666 push action gamemallards playerbet '['$tableid',useraaaaaaac,"10.0000 EOS","10.0000 EOS","10.0000 EOS","10.0000 EOS","10.0000 EOS", "useraaaaaaab","useraaaaaaad","小明"]' -p useraaaaaaac useraaaaaaah

cleos --url http://jungle2.cryptolions.io --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$tableid']' -p useraaaaaaah

cleos --url http://jungle2.cryptolions.io --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$tableid',10]' -p useraaaaaaab useraaaaaaah

cleos --url http://jungle2.cryptolions.io --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$tableid',704,1]' -p useraaaaaaah

cleos --url http://jungle2.cryptolions.io get table gamemallards gamemallards tablesinfo -L $tableid -U $tableid
