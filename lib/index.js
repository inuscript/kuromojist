const analyse = require('./analyse')
const calcCost = require('./cost')

module.exports = (str) => {
  return analyse(str).then( ({bestPath}) => {
    return bestPath.map( node => calcCost(node) )
  })
}