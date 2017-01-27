import { renderComponent, expect } from '../test_helper'

import Search from './Search'

describe('Search', () => {
  let component
  beforeEach(() => {
    component = renderComponent(Search)
  })

  it('has correct class', () => {
    expect(component).to.have.class('Search')
  })

  it('has input', () => {
    expect(component.find('input')).to.exist

  })

  describe('entering some text', () => {
    it('changes', () => {
      component.find('input').simulate('change', 'portugal')
      expect(component.find('input')).to.have.value('portugal')
    })
  })
})
