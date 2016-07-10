
// recalculate edge_cost from ViterbiNode
module.exports = (node) => {
  if(node === undefined || node === null){
    return node
  }
  const prevShortestCost = node.prev ? node.prev.shortest_cost : 0
  const edgeCost = node.shortest_cost - node.cost - prevShortestCost
  return {
    word_id: node.name,
    surface_form: node.surface_form,
    cost: node.cost,
    edge_cost: edgeCost,
    shortest_cost: node.shortest_cost
  }
}