
// flatten ViterbiNode
module.exports = (node) => {
  const recursive = (node, res = []) => {
    if (node === null || node === undefined) {
      return res
    }

    res.unshift(node)
    return recursive(node.prev, res)
  }

  return recursive(node)
}
