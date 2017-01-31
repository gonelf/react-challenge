import React from 'react';
import connect from './connect'
import {
  Search,
  SelectedList
}
from './components'

import './App.css';

const App  = ({ list }) => {
  return (
    <div className="App">
      <Search setSearch={setSearch} searchValue={searchValue}  />
      <SelectedList list={list} searchValue={searchValue} />
    </div>
  );
}

export default connect(props => ({
  list : {
    method: 'GET',
    url: `https://restcountries.eu/rest/v1/all`,
  }
}))(App);
