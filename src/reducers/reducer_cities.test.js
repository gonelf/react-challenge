import {expect} from '../test_helper'
import citiesReducer from './reducer_cities'
import { FETCH_CITIES, SET_SEARCH_TERM } from '../actions/index'

describe('Cities Reducer', () => {
  it('handles action with unknown type', () => {
    expect(citiesReducer(undefined, {})).to.eql({ term: '', cities: [] })
  })

  it('FETCH_CITIES', () => {
    const list = [{code:1, name:'Portugal'}, {code:2, name:'Espanha'}]
    const action = {type: FETCH_CITIES, payload: list}
    expect(citiesReducer(undefined, action))
    .to.eql({ term: '', cities: list })
  })

  it('SET_SEARCH_TERM', () => {
    const term = 'Port'
    const action = {type: SET_SEARCH_TERM, payload: term}
    expect(citiesReducer(undefined, action)).to.eql({ term:term, cities:[] })
  })
})
