import React, { PropTypes } from 'react'
import View from 'react-flexbox'

import './SelectedList.css'

function renderText({id, text}) {
  return <View row key={id}><div className='item'>{text}</div></View>;
}

function filterText(searchValue) {
  return function (e) {
    return e.text.indexOf(searchValue) === 0;
  }
}

var SelectedList = ({ searchValue, list }) => {
  return (
    <View row auto>
          {list
            .filter(filterText(searchValue))
            .map(renderText)}
    </View>
  )
}

SelectedList.propTypes = {
   searchValue: PropTypes.string.isRequired,
   list: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.number.isRequired,
     text: PropTypes.string.isRequired,
   })).isRequired,
}

export default SelectedList
