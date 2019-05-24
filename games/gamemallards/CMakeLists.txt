project(gamemallards)
cmake_minimum_required(VERSION 3.11)

SET(CMAKE_SOURCE_DIR .)
aux_source_directory(. DIR_SRCS)

find_package(eosio.cdt)

INCLUDE_DIRECTORIES(
 ${CMAKE_SOURCE_DIR}
 /usr/local/include
 ${CMAKE_SOURCE_DIR}/../../library
)


set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ../bin/)

macro(add_contract CONTRACT_NAME TARGET)
      add_executable( ${TARGET}.wasm ${ARGN} )
      target_compile_options( ${TARGET}.wasm PUBLIC -abigen )
      get_target_property(BINOUTPUT ${TARGET}.wasm BINARY_DIR)
      target_compile_options( ${TARGET}.wasm PUBLIC -abigen_output=${BINOUTPUT}/${TARGET}.abi )
      target_compile_options( ${TARGET}.wasm PUBLIC -contract ${CONTRACT_NAME} )
endmacro()

add_contract( gamemallards gamemallards gamemallards.cpp )

