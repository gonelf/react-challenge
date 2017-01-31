import React from 'react'
import { Flex, Box } from 'reflexbox'

import './SelectedList.css'

function renderText({alpha2Code, name}) {
  return (
    <Box className='box' col={12} sm={6} lg={3} key={alpha2Code}>
        <div className='item'>{name}</div>
    </Box>
  );
}

function filterText(searchValue) {
  return function (e) {
    return e.name.toLowerCase().indexOf(searchValue.toLowerCase()) === 0;
  }
}

const SelectedList = (props) => {
  const list = props.list
  if (list.pending){
    return (
      <Flex wrap className='SelectedList'>
        <Box className='item'>Fetching data</Box>
      </Flex>
    )
  }
  else if (list.rejected){
    return (
      <Flex wrap className='SelectedList'>
        <Box className='item'>{list.reason.message}</Box>
      </Flex>
    )
  }
  else if(list.fulfilled){
    return (
      <Flex wrap className='SelectedList'>
        {list.value
          .filter(filterText(props.searchValue))
          .map(renderText)}
        </Flex>
      )
  }
}

export default SelectedList
