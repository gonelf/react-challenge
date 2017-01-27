import { renderComponent, expect } from '../test_helper'
import { fetchCities } from '../actions/index'

// import Text from './Text'
import SelectedList from './SelectedList'

describe('SelectedList', () => {
  let component
  beforeEach(() => {
    const list = [{'alpha2Code':1,'name':'Portugal'},{'alpha2Code':2,'name':'Espanha'}]
    const state = {data:{term:'',cities:list}}
    component = renderComponent(SelectedList, null, state)
  })

  it('shows an Box for each city', () => {
    expect(component.find('.box').length).to.equal(2)
  })

  it('shows correct city', () => {
    expect(component).to.contain('Portugal')
    expect(component).to.contain('Espanha')
  })

})
