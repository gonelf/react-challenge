import React, { PropTypes } from 'react'

import './Search.css'

var Search = ({onChange}) => {
  return <div><input onChange={onChange}/></div>
}

Search.propTypes = {
   searchValue: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
}

export default Search
