#pragma once

#include <eosiolib/asset.hpp>
#include <eosiolib/symbol.hpp>
#include <eosiolib/eosio.hpp>
#include <eosiolib/crypto.h>
#include <eosiolib/action.hpp>
#include <eosiolib/transaction.hpp>
#include <eosiolib/permission.hpp>
#include <eosiolib/action.hpp>
#include <string>
#include <cstdlib>

using namespace eosio;
using namespace std;
using std::string;

CONTRACT tina : public contract
{
public:
  using contract::contract;
  ACTION testdispatch();            // asset demo / Sc-> account
  ACTION testtransfer(asset money); // Sc-> account
  ACTION testreverse(asset money);  // accounta-> SC
  ACTION testaccount(asset money);  // accounta-> accountb
  using testtransfer_action = action_wrapper<"testtransfer"_n, &tina::testtransfer>;
  using testreverse_action = action_wrapper<"testreverse"_n, &tina::testtransfer>;
  using testaccount_action = action_wrapper<"testaccount"_n, &tina::testtransfer>;
  using testdispatch_action = action_wrapper<"testdispatch"_n, &tina::testtransfer>;

  name accounta = "useraaaaaaai"_n;
  name accountb = "useraaaaaaah"_n;
  name owner = "useraaaaaaaj"_n;
};
