import React from 'react'
import { Flex, Box } from 'reflexbox'

import './Search.css'

const Search = ({searchValue, onInputChange}) =>
(
  <Flex wrap className='Search'>
    <Box col={12} className='inputbox'>
      <input onChange={onInputChange} value={searchValue} />
    </Box>
  </Flex>
)

export default Search
