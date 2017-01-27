import { renderComponent, expect } from './test_helper'
import App from './App';

describe('App', () => {

  let component

  beforeEach(() => {
    component = renderComponent(App)
  })

  it('shows search bar', () => {
    expect(component.find('.Search')).to.exist
  });

  it('shows a selected list', () => {
    expect(component.find('.SelectedList')).to.exist
  })
})
