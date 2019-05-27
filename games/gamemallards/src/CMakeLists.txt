project(gamemallards)

set(EOSIO_WASM_OLD_BEHAVIOR "Off")
find_package(eosio.cdt)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/../../bin)

add_contract( gamemallards gamemallards gamemallards.cpp )
target_include_directories( gamemallards PUBLIC ${CMAKE_SOURCE_DIR}/../include )
target_include_directories( gamemallards PUBLIC ${CMAKE_SOURCE_DIR}/../../../library )
target_ricardian_directory( gamemallards ${CMAKE_SOURCE_DIR}/../ricardian )