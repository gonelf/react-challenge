import { FETCH_CITIES, SET_SEARCH_TERM } from '../actions/index'

const INITIAL_STATE = { cities: [], term: ''};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CITIES:
      return { ...state, cities: action.payload };
    case SET_SEARCH_TERM:
      return { ...state, term: action.payload };
    default:
      return state;
  }
}
