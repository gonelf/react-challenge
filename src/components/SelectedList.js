import React, { PropTypes } from 'react'

import './SelectedList.css'

function renderText({id, text}) {
  return <li key={id}>{text}</li>;
}

function filterText(searchValue) {
  return function (e) {
    return e.text.indexOf(searchValue) === 0;
  }
}

var SelectedList = ({ searchValue, list }) => {
  return (
    <ul>
      {list
        .filter(filterText(searchValue))
        .map(renderText)}
    </ul>
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
