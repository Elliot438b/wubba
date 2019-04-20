cmake_minimum_required(VERSION 3.10)
project(wubba)

set(CMAKE_CXX_STANDARD 11)

include_directories(games/lizard)
include_directories(games/mallard)
include_directories(helloworld)
include_directories(library)
include_directories(library/eosio.token)
include_directories(tina)

add_executable(wubba
    games/lizard/lizard.cpp
    games/lizard/lizard.hpp
    games/mallard/mallard.cpp
    games/mallard/mallard.hpp
    helloworld/hello.cpp
    helloworld/hello.hpp
    library/eosio.token/eosio.token.hpp
    tina/tina.cpp
    tina/tina.hpp)
