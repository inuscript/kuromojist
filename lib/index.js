const calcCost = require('./cost')
const { getTokenizer } = require('kuromojin')

const _analyzeCosts = (text, options = undefined) => {
  return getTokenizer(options).then(tokenizer => {
    const lattice = tokenizer.getLattice(text) 
    const bestPath = tokenizer.viterbi_searcher.search(lattice);
    return { tokenizer, lattice, bestPath }
  })
}

module.exports.analyzeCosts = (str, options = undefined) => {
  return _analyzeCosts(str, options).then( ({bestPath}) => {
    return bestPath.map( node => calcCost(node) )
  })
}