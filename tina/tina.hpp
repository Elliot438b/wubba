#pragma once

#include "eosio.token.hpp"
#include <eosiolib/crypto.hpp>

using namespace eosio;
using std::string;

CONTRACT tina : public contract
{
public:
  using contract::contract;

  TABLE tina_info
  {
    uint64_t id;
    asset balance;
    asset supply;
    asset supply1;
    uint64_t primary_key() const { return id; }
    EOSLIB_SERIALIZE(tina_info, (id)(balance)(supply)(supply1))
  };
  tina(name receiver, name code, datastream<const char *> ds)
      : contract(receiver, code, ds), tinatable(receiver, receiver.value) {}

  typedef eosio::multi_index<"tina"_n, tina::tina_info> single_t;
  std::string to_hex(const char *d, uint32_t s)
  {
    std::string r;
    const char *to_hex = "0123456789abcdef";
    uint8_t *c = (uint8_t *)d;
    for (uint32_t i = 0; i < s; ++i)
      (r += to_hex[(c[i] >> 4)]) += to_hex[(c[i] & 0x0f)];
    return r;
  }
  ACTION erasingdata(uint64_t key);
  ACTION testmultidex(asset money); // asset in multi_index demo
  ACTION testdispatch();            // asset demo / Sc-> account
  ACTION testtransfer(asset money); // Sc-> account
  ACTION testreverse(asset money);  // accounta-> SC
  ACTION testaccount(asset money);  // accounta-> accountb
  using erasingdata_action = action_wrapper<"erasingdata"_n, &tina::erasingdata>;
  using testmultidex_action = action_wrapper<"testmultidex"_n, &tina::testmultidex>;
  using testtransfer_action = action_wrapper<"testtransfer"_n, &tina::testtransfer>;
  using testreverse_action = action_wrapper<"testreverse"_n, &tina::testtransfer>;
  using testaccount_action = action_wrapper<"testaccount"_n, &tina::testtransfer>;
  using testdispatch_action = action_wrapper<"testdispatch"_n, &tina::testtransfer>;

  name accounta = "useraaaaaaai"_n;
  name accountb = "useraaaaaaah"_n;
  name owner = "useraaaaaaaj"_n;
  single_t tinatable;
};
