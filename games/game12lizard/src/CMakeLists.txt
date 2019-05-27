project(game12lizard)

set(EOSIO_WASM_OLD_BEHAVIOR "Off")
find_package(eosio.cdt)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/../../bin)

add_contract( game12lizard game12lizard game12lizard.cpp )
target_include_directories( game12lizard PUBLIC ${CMAKE_SOURCE_DIR}/../include )
target_include_directories( game12lizard PUBLIC ${CMAKE_SOURCE_DIR}/../../../library )
target_ricardian_directory( game12lizard ${CMAKE_SOURCE_DIR}/../ricardian )