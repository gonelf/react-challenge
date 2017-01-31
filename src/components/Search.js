import React from 'react'
import { Flex, Box } from 'reflexbox'
import { connect } from 'react-redux';
import { setSearchTerm } from '../actions/index';

import './Search.css'

const Search = ({setSearchTerm}) => {
  const onInputChange = (e) => {
    //setSearchTerm(e.target.value)
    setSearchTerm(e.target.value);
  }

  return (
    <Flex wrap className='Search'>
      <Box col={12} className='inputbox'>
        <input onChange={onInputChange}/>
      </Box>
    </Flex>
  )
}

export default Search
