import React, { Component } from 'react';

import {
  Search,
  SelectedList
}
from './components'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchValue: ''
    }
  }

  /* auto biding */
  onChange = (e) => {
    const searchValue = e.target.value
    this.setState({ searchValue })
  }

  get list(){
    return [
      {id: 0, text: 'react'},
      {id: 1, text: 'css'},
      {id: 2, text: 'html'},
      {id: 3, text: 'fetch'},
    ]
  }

  render() {
    const { searchValue } = this.state

    return (
      <div className="App">
        <Search searchValue={searchValue} onChange={this.onChange} />
        <SelectedList searchValue={searchValue} list={this.list} />
      </div>
    );
  }
}


export default App;
