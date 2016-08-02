const { getTokenizer } = require('kuromojin')
const flatten = require('./flatten')
const calcCost = require('./cost')

const bestLattice = (text, options = undefined) => {
  return getTokenizer(options).then(tokenizer => {
    const lattice = tokenizer.getLattice(text)
    const bestPath = tokenizer.viterbi_searcher.search(lattice) // mutate lattice ( setup node.prev )
    return { tokenizer, lattice, bestPath }
  })
}

module.exports.analyzeCosts = (str, options = undefined) => {
  return bestLattice(str, options).then(({ lattice }) => {
    const lastLattice = lattice.nodes_end_at.reverse()[0]
    const flattenNodes = flatten(lastLattice[0])

    return flattenNodes.map(node => calcCost(node))
  })
}
