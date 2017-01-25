import React, { Component } from 'react'
import View from 'react-flexbox'
import { connect } from 'react-redux'
import { fetchCities } from '../actions/index'

import './SelectedList.css'

function renderText({alpha2Code, name}) {
  return (
    <View row key={alpha2Code}>
      <View>
        <div className='item'>{name}</div>
      </View>
    </View>
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
      return <View row><div className='item'>Fetching data</div></View>
    }
    else {
      return (
        <View column auto>
          {list
            .filter(filterText(searchValue))
            .map(renderText)}
        </View>
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
