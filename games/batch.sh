#!/bin/bash

GM_DIR=`pwd`

if [ ! -d $GM_DIR/game12lizard/build  ];then
  mkdir $GM_DIR/game12lizard/build
fi
cd $GM_DIR/game12lizard/build/
cmake ..
make

if [ ! -d $GM_DIR/gamemallards/build  ];then
  mkdir $GM_DIR/gamemallards/build
fi
cd $GM_DIR/gamemallards/build/
cmake ..
make

cd $GM_DIR/bin/
ls -la
