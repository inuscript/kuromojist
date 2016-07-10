const { getTokenizer } = require('kuromojin')

module.exports = (text) => {
  return getTokenizer().then(tokenizer => {
    const lattice = tokenizer.getLattice(text) 
    const bestPath = tokenizer.viterbi_searcher.search(lattice);
    return { tokenizer, lattice, bestPath }
  })
}
