import { expect } from '../test_helper'
import { FETCH_CITIES, SET_SEARCH_TERM, fetchCities, setSearchTerm } from './index'

describe('Actions', () => {
  describe('fetchCities', () => {

    let action
    const list = [{alpha2Code:1, name:'Portugal'}, {alpha2Code:2, name:'Espanha'}]
    const props = {data:{term: '', cities: list}}
    beforeEach(() => {
      action = fetchCities(props)
    })

    it('has correct type', () => {
      expect(action.type).to.equal(FETCH_CITIES)
    })

    it('has the correct payload', () => {
      expect(action.payload).to.equal(props)
    })
  })

  describe('setSearchTerm', () => {

    let action
    const term = 'Portugal'
    beforeEach(() => {
      action = setSearchTerm(term)
    })

    it('has the correct type', () => {
      expect(action.type).to.equal(SET_SEARCH_TERM)
    })

    it('has the correct payload', () => {
      expect(action.payload).to.equal(term)
    })

  })
})
