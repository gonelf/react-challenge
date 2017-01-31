import React from 'react';
import connect from './connect'
import {compose, withState, withHandlers} from 'recompose'

import {
  Search,
  SelectedList
}
from './components'

import './App.css';

const enhance = compose(
  connect(props => ({
    list : {
      method: 'GET',
      url: `https://restcountries.eu/rest/v1/all`,
    }
  })),
  withState('searchValue','setSearchValue', ''),
  withHandlers({
    onInputChange: props => e => {
      props.setSearchValue(e.target.value)
    }
  })
)

const App = enhance( ({ list, searchValue, setSearchValue, onInputChange}) =>
    <div className="App">
      <Search onInputChange={onInputChange} searchValue={searchValue} />
      <SelectedList list={list} searchValue={searchValue} />
    </div>
)

export default App;
