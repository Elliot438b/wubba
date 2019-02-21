eosio-cpp -abigen tina.cpp -o tina.wasm
cleos --wallet-url http://127.0.0.1:6666 system buyram useraaaaaaag useraaaaaaaj "10 SYS"
cleos --wallet-url http://127.0.0.1:6666 set contract useraaaaaaaj ./ tina.wasm tina.abi
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj testcardobta '[]' -p useraaaaaaaj
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj erasingdata '[-1]' -p useraaaaaaaj

cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaaj active '{"threshold":1,"keys":[{"key":"EOS8FdMPpPxpG5QAqGLncY5kBrEQ9NXPKCKnLH6oWDMPR8q8BrEmT","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaj","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaaj
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj testmultidex '["100.0000 SYS"]' -p useraaaaaaaj

cleos get table useraaaaaaaj useraaaaaaaj tina

cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj testdispatch '[]' -p useraaaaaaaj
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj testtransfer '["1.0000 SYS"]' -p useraaaaaaaj

cleos --wallet-url http://127.0.0.1:6666 set account permission useraaaaaaai active '{"threshold":1,"keys":[{"key":"EOS5dt9CWCKM1scrWpFsRbzY71Up9UYFmJs1ySFKLJDGdYJmgEH3f","weight":1}],"accounts":[{"permission":{"actor":"useraaaaaaaj","permission":"eosio.code"},"weight":1}]}' owner -p useraaaaaaai
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj testreverse '["1.0000 SYS"]' -p useraaaaaaaj
cleos --wallet-url http://127.0.0.1:6666 push action useraaaaaaaj testaccount '["1.0000 SYS"]' -p useraaaaaaaj

