#!/bin/bash
cat result.txt |awk -F ' ' '{print $5}'|awk -F '"' '{print $2}'|grep .>test_result.txt
count=1
lineNum=`cat test_result.txt|wc -l`
echo "lineNum=$lineNum"

bankerWin=0
playerWin=0
tieWin=0
Bpair=0
Ppair=0

while read line
do
   # echo $line count=$count

    if [ $line -eq 10000 ];then
          let bankerWin++
    elif [ $line -eq 10001 ];then
          let bankerWin++
          let Ppair++
    elif [ $line -eq 10010 ];then
          let bankerWin++
          let Bpair++
    elif [ $line -eq 10011 ];then
          let bankerWin++
          let Ppair++
          let Bpair++
    elif [ $line -eq 1000 ];then
          let playerWin++
    elif [ $line -eq 1010 ];then
          let playerWin++
          let Bpair++
    elif [ $line -eq 1001 ];then
          let playerWin++
          let Ppair++
    elif [ $line -eq 1011 ];then
          let playerWin++
          let Bpair++
          let Ppair++
    elif [ $line -eq 100 ];then
          let tieWin++
    elif [ $line -eq 110 ];then
          let tieWin++
          let Bpair++
    elif [ $line -eq 101 ];then
          let tieWin++
          let Ppair++
    elif [ $line -eq 111 ];then
          let tieWin++
          let Bpair++
          let Ppair++
    else
        echo "error result $line"
    fi

    let count++
done < test_result.txt

echo "
    bankerWin=$bankerWin
    playerWin=$playerWin
    tieWin=$tieWin
    Bpair=$Bpair
    Ppair=$Ppair"
