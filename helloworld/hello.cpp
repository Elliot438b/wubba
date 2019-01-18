#include "hello.hpp"
ACTION hello::hi( name nm ) {
   print_f("namea123 : %\n", nm);
}

ACTION hello::check( name nm ) {
   print_f("TEST : %\n", nm);
   eosio::check(nm == "hello"_n, "check name not equal to `hello`");
}

EOSIO_DISPATCH( hello, (hi)(check) )
