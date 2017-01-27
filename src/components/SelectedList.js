import React from 'react'
import { Flex, Box } from 'reflexbox'
import { connect } from 'react-redux'
import { fetchCities } from '../actions/index'

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
  if (!props.list || props.list.length === 0) {
    props.fetchCities();
    return (
      <Flex wrap className='SelectedList'>
        <Box className='item'>Fetching data</Box>
      </Flex>
    )
  }
  else {
    var list = props.list;
    var searchValue = props.term;

    return (
      <Flex wrap className='SelectedList'>
        {list
          .filter(filterText(searchValue))
          .map(renderText)}
      </Flex>
    )
  }
}

function mapStateToProps(state) {
  return {
    term: state.data.term,
    list: state.data.cities
  }
}

export default connect (mapStateToProps, {fetchCities})(SelectedList)
