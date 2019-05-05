function baseTr(){
  const basetr = {
    expiration: '',
    ref_block_num: '',
    ref_block_prefix: '',
    max_net_usage_words: 0,
    max_cpu_usage_ms: 0,
    delay_sec: 0,
    context_free_actions: [],
      actions: [
        ],
    transaction_extensions: [],
};
return basetr;
}

module.exports = baseTr