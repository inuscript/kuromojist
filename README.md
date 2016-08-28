# kuromojist

Calculate some costs ( like Mecab, `%pw`, `%pc`, `%pC`) from [kuromoji.js](https://github.com/takuyaa/kuromoji.js) ([kuromojin](https://github.com/azu/kuromojin))

## Attention

This package use _**Unexposed**_ API 

- `Tokenizer.getLattice`
- `lattice.nodes_end_at`
- `Tokenizer.viterbi_searcher.search`

# Example

```js
const { analyzeCosts } = require('kuromojist')

analyzeCosts('すもももももももものうち').then( result => {
  console.log(result)
})
```

This result

```js
[
  { word_id: -1, surface_form: '', cost: 0, edge_cost: 0, shortest_cost: 0 },
  { word_id: 415760, surface_form: 'すもも', cost: 7546, edge_cost: -283, shortest_cost: 7263 },
  { word_id: 93220, surface_form: 'も', cost: 4669, edge_cost: -4158, shortest_cost: 7774 },
  { word_id: 1614710, surface_form: 'もも', cost: 7219, edge_cost: 17, shortest_cost: 15010 },
  { word_id: 93220, surface_form: 'も', cost: 4669, edge_cost: -4158, shortest_cost: 15521 },
  { word_id: 1614710, surface_form: 'もも', cost: 7219, edge_cost: 17, shortest_cost: 22757 },
  { word_id: 93100, surface_form: 'の', cost: 4816, edge_cost: -4442, shortest_cost: 23131 },
  { word_id: 62510, surface_form: 'うち', cost: 5796, edge_cost: -5198, shortest_cost: 23729 },
  { word_id: -1, surface_form: '', cost: 0, edge_cost: -2484, shortest_cost: 21245 }
]
```

# Result Object

- `word_id`
  - Same as `kuromoji.tokenize`
- `surface_form`
  - Same as `kuromoji.surface_form`
- `cost`
  - Word Cost
  - Mecab format: `%pw`
- `edge_cost`
  - Lattice Edge Cost
  - Mecab format:`%pC`
- `shortest_cost`
  - Minimum connection costs (accumulated)
  - Mecab format: `%pc`