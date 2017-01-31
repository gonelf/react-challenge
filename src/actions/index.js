import axios from 'axios';

export const FETCH_CITIES = "FETCH_CITIES";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

const ROOT_URL = "https://restcountries.eu/rest/v1/all";

export function fetchCities(data = null) {

  if (!data) {
    const request = axios.get(`${ROOT_URL}`);

    return (dispatch) => {
      request.then(({data}) => {
        console.log('data', data);
        dispatch({
          type: FETCH_CITIES,
          payload: data
        })
      })
    }
  }
  else {
    return {
      type: FETCH_CITIES,
      payload: data
    }
  }
}

export function setSearchTerm(term) {
  return {
    type: SET_SEARCH_TERM,
    payload: term
  }
}
