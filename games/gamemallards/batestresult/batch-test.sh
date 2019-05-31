#!/bin/bash
rm result.txt
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards newtable '['$1',useraaaaaaab,"4000.0000 TES", 1,"useraaaaaaaj","TES", "0.005", "0.002", "5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES","5.0000 TES","1.0000 TES"]' -p useraaaaaaab useraaaaaaah
cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$1']' -p useraaaaaaah

#parase seed
count=1
lineNum=`cat serverseed.txt|wc -l`
echo "lineNum=$lineNum"

while [ $count -le $lineNum ]
do
    echo "count=$count"
    lineserver=`cat serverseed.txt|head -$count|tail -1`
    linedealer=`cat dealerseed.txt|head -$count|tail -1`
    echo "lineserver=$lineserver linedealer=$linedealer"
    
    if [ ! -n "$linedealer" ]; then
        echo "dealer seed is empty"
    else
        dealerseedhash=`echo -n $linedealer | sha256sum | awk '{print $1}'`
        cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards dealerseed '['$1','$dealerseedhash']' -p useraaaaaaab useraaaaaaah
    fi
    serverseedhash=`echo -n $lineserver | sha256sum | awk '{print $1}'`
    cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards serverseed '['$1','$serverseedhash']' -p useraaaaaaah
    sleep 1s
    
    cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards endbet '['$1']' -p useraaaaaaah
    cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verdealeseed '['$1','$linedealer']' -p useraaaaaaab useraaaaaaah
    cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards verserveseed '['$1','$lineserver', 0]' -p useraaaaaaah
    
    #if status=6,shuffle
    status_result=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $1 -U $1 |grep tableStatus |awk -F ':' '{print $2}'|awk -F ',' '{print $1}'|awk -F ' ' '{print $1}'`
    if [ "$status_result" -eq 6 ];then
        cleos --url http://127.0.0.1:51043 --wallet-url http://127.0.0.1:6666 push action gamemallards shuffle '['$1']' -p useraaaaaaah
    fi
    
    #grep data and save to file
    start_num=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $1 -U $1|grep -n roundResult|awk -F ':' '{print $1}'`
    total_num=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $1 -U $1|wc -l`
    i=`expr $total_num - $start_num`
    result_num=`expr $i + 1`
    
    result=`cleos --url http://127.0.0.1:51043 get table gamemallards gamemallards tablesinfo -L $1 -U $1 |tail -$result_num`
    echo "result is $result"
    echo "dealerSeed=$linedealer serverSeed=$lineserver" revealresult=$result>> result.txt
    echo \\n >> result.txt
    
    let count++
done
cat result.txt