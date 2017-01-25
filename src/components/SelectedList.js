import React, { Component } from 'react'
import { Flex, Box } from 'reflexbox'
import { connect } from 'react-redux'
import { fetchCities } from '../actions/index'

import './SelectedList.css'

function renderText({alpha2Code, name}) {
  return (
    <Box col={12} sm={6} lg={3} key={alpha2Code}>
        <div className='item'>{name}</div>
    </Box>
  );
}

function filterText(searchValue) {
  return function (e) {
    return e.name.toLowerCase().indexOf(searchValue.toLowerCase()) === 0;
  }
}

class SelectedList extends Component {

  componentWillMount() {
    this.props.fetchCities();
  }

  render () {
    var list = this.props.list;
    var searchValue = this.props.term;

    if (list.length === 0) {
      return <Flex wrap><Box className='item'>Fetching data</Box></Flex>
    }
    else {
      return (
        <Flex wrap>
          {list
            .filter(filterText(searchValue))
            .map(renderText)}
        </Flex>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    term: state.data.term,
    list: state.data.cities
  }
}

export default connect (mapStateToProps, { fetchCities })(SelectedList)
