import React, { PropTypes } from 'react'
import View from 'react-flexbox'

import './Search.css'

var Search = ({onChange}) => {
  return (
    <View column auto>
      <div className='inputbox'>
        <input onChange={onChange}/>
      </div>
    </View>
  )
}

Search.propTypes = {
   searchValue: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
}

export default Search
