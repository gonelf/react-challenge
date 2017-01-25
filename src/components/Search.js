import React, { Component } from 'react'
import View from 'react-flexbox'
import { connect } from 'react-redux';
import { setSearchTerm } from '../actions/index';

import './Search.css'

class Search extends Component {

  onInputChange(e) {
    this.props.setSearchTerm(e.target.value)
  }

  render() {
    return (
      <View column auto>
        <div className='inputbox'>
          <input onChange={this.onInputChange.bind(this)}/>
        </div>
      </View>
    )
  }
}

export default connect(null, {setSearchTerm})(Search)
