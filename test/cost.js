const assert = require('assert')
const util = require('util')
const { analyzeCosts } = require('../lib/index')
const test = require('eater/runner').test;

// for debug
const dump = (obj) => {
  console.log(util.inspect(obj, { depth : 2, colors: true, breakLength: 90}))
}

const filter = (items) => {
  return items.map( (item) => ({
    cost: item.cost,
    edge_cost: item.edge_cost,
    shortest_cost: item.edge_cost
  }))
}

const testing = (word, expect) => {
  test(`test: ${word}`, () => {
    analyzeCosts(word).then( result => {
      try{
        // let filterdExpect = filter(expect)
        // let filterdResult = filter(result)
        // assert.deepEqual(filterdExpect, filterdResult)
        assert.deepEqual(expect, result)
      }catch(e){
        // dump(result)
        // dump(expect)
        throw e
      }
    })
  })
}

testing('日本テレビ東京', [ { word_id: -1, surface_form: '', cost: 0, edge_cost: 0, shortest_cost: 0 },
  { word_id: 1397360, surface_form: '日本テレビ', cost: 2362, edge_cost: -978, shortest_cost: 1384 },
  { word_id: 3029410, surface_form: '東京', cost: 3003, edge_cost: -583, shortest_cost: 3804 },
  { word_id: -1, surface_form: '', cost: 0, edge_cost: -770, shortest_cost: 3034 }
])

testing('すもももももももものうち', [
  { word_id: -1, surface_form: '', cost: 0, edge_cost: 0, shortest_cost: 0 },
  { word_id: 415760, surface_form: 'すもも', cost: 7546, edge_cost: -283, shortest_cost: 7263 },
  { word_id: 93220, surface_form: 'も', cost: 4669, edge_cost: -4158, shortest_cost: 7774 },
  { word_id: 1614710, surface_form: 'もも', cost: 7219, edge_cost: 17, shortest_cost: 15010 },
  { word_id: 93220, surface_form: 'も', cost: 4669, edge_cost: -4158, shortest_cost: 15521 },
  { word_id: 1614710, surface_form: 'もも', cost: 7219, edge_cost: 17, shortest_cost: 22757 },
  { word_id: 93100, surface_form: 'の', cost: 4816, edge_cost: -4442, shortest_cost: 23131 },
  { word_id: 62510, surface_form: 'うち', cost: 5796, edge_cost: -5198, shortest_cost: 23729 },
  { word_id: -1, surface_form: '', cost: 0, edge_cost: -2484, shortest_cost: 21245 }
])

testing('庭には、二羽鶏がいる', [ { word_id: -1, surface_form: '', cost: 0, edge_cost: 0, shortest_cost: 0 },
  { word_id: 253810, surface_form: '庭', cost: 6218, edge_cost: -283, shortest_cost: 5935 },
  { word_id: 92030, surface_form: 'に', cost: 4304, edge_cost: -4457, shortest_cost: 5782 },
  { word_id: 93010, surface_form: 'は', cost: 3865, edge_cost: -3643, shortest_cost: 6004 },
  { word_id: 51340, surface_form: '、', cost: 9558, edge_cost: 366, shortest_cost: 15928 },
  { word_id: 51690, surface_form: '二', cost: 2914, edge_cost: -3266, shortest_cost: 15576 },
  { word_id: 82670, surface_form: '羽', cost: 10133, edge_cost: -10731, shortest_cost: 14978 },
  { word_id: 1529690, surface_form: '鶏', cost: 3986, edge_cost: 811, shortest_cost: 19775 },
  { word_id: 92920, surface_form: 'が', cost: 3866, edge_cost: -4721, shortest_cost: 18920 },
  { word_id: 3491600, surface_form: 'いる', cost: 9109, edge_cost: -6680, shortest_cost: 21349 },
  { word_id: -1, surface_form: '', cost: 0, edge_cost: 7, shortest_cost: 21356 } 
])
