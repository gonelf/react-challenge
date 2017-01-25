import React, { Component } from 'react'
import { Flex, Box } from 'reflexbox'
import { connect } from 'react-redux';
import { setSearchTerm } from '../actions/index';

import './Search.css'

class Search extends Component {

  onInputChange(e) {
    this.props.setSearchTerm(e.target.value)
  }

  render() {
    return (
      <Flex wrap>
        <Box col={12} className='inputbox'>
          <input onChange={this.onInputChange.bind(this)}/>
        </Box>
      </Flex>
    )
  }
}

export default connect(null, {setSearchTerm})(Search)
