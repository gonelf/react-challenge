import React from 'react';

import {
  Search,
  SelectedList
}
from './components'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Search  />
      <SelectedList />
    </div>
  );
}


export default App;
