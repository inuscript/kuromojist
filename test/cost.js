const assert = require('assert')
const util = require('util')
const { analyzeCosts } = require('../lib/index')
const test = require('eater/runner').test;

// for debug
const dump = (obj) => {
  console.log(util.inspect(obj, { depth : 2, colors: true, breakLength: 90}))
}

const testing = (word, expect) => {
  test(`test: ${word}`, () => {
    analyzeCosts(word).then( result => {
      try{
        assert.deepEqual(expect, result)
      }catch(e){
        dump(result)
        throw e
      }
    })
  })
}

testing('日本テレビ東京', [ 
  { word_id: 'BOS', surface_form: undefined, cost: 0, edge_cost: 0, shortest_cost: 0 },
  { word_id: 1426820, surface_form: '日本テレビ', cost: 2362, edge_cost: -978, shortest_cost: 1384 },
  { word_id: 2048330, surface_form: '東京', cost: 3003, edge_cost: -583, shortest_cost: 3804 },
  { word_id: 'EOS', surface_form: undefined, cost: 0, edge_cost: -770, shortest_cost: 3034 } 
])
// 
// testing('すもももももももものうち', [ 
//   { word_id: 'BOS', surface_form: undefined, cost: 0, edge_cost: 0, shortest_cost: 0 },
//   { word_id: 404420, surface_form: 'すもも', cost: 7546, edge_cost: -283, shortest_cost: 7263 },
//   { word_id: 2595480, surface_form: 'も', cost: 4669, edge_cost: -4158, shortest_cost: 7774 },
//   { word_id: 604730, surface_form: 'もも', cost: 7219, edge_cost: 17, shortest_cost: 15010 },
//   { word_id: 2595480, surface_form: 'も', cost: 4669, edge_cost: -4158, shortest_cost: 15521 },
//   { word_id: 604730, surface_form: 'もも', cost: 7219, edge_cost: 17, shortest_cost: 22757 },
//   { word_id: 2595360, surface_form: 'の', cost: 4816, edge_cost: -4442, shortest_cost: 23131 },
//   { word_id: 1467000, surface_form: 'うち', cost: 5796, edge_cost: -5198, shortest_cost: 23729 },
//   { word_id: 'EOS', surface_form: undefined, cost: 0, edge_cost: -2484, shortest_cost: 21245 } 
// ])
// 
// testing('庭には、二羽鶏がいる', [ 
//   { word_id: 'BOS', surface_form: undefined, cost: 0, edge_cost: 0, shortest_cost: 0 },
//   { word_id: 376430, surface_form: '庭', cost: 6218, edge_cost: -283, shortest_cost: 5935 },
//   { word_id: 2594290, surface_form: 'に', cost: 4304, edge_cost: -4457, shortest_cost: 5782 },
//   { word_id: 2595270, surface_form: 'は', cost: 3865, edge_cost: -3643, shortest_cost: 6004 },
//   { word_id: 1299820, surface_form: '、', cost: 9558, edge_cost: 366, shortest_cost: 15928 },
//   { word_id: 1300170, surface_form: '二', cost: 2914, edge_cost: -3266, shortest_cost: 15576 },
//   { word_id: 2599650, surface_form: '羽', cost: 10133, edge_cost: -10731, shortest_cost: 14978 },
//   { word_id: 589630, surface_form: '鶏', cost: 3986, edge_cost: 811, shortest_cost: 19775 },
//   { word_id: 2595180, surface_form: 'が', cost: 3866, edge_cost: -4721, shortest_cost: 18920 },
//   { word_id: 3491600, surface_form: 'いる', cost: 9109, edge_cost: -6680, shortest_cost: 21349 },
//   { word_id: 'EOS', surface_form: undefined, cost: 0, edge_cost: 7, shortest_cost: 21356 } 
// ])
