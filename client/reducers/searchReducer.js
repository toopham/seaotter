import * as types from '../constants/actionTypes';

const initialState = {query: '', lang: 'any', sort: 'stars', order: 'desc', page: 1, perpage: 30, results: [], total: 0, error: ''};


const searchReducer = (state = initialState, action) => {
  switch (action.type){
    case types.UPDATE_LANG:
      return {...state, lang: action.payload};
    case types.UPDATE_SORT:
      return {...state, sort: action.payload};
    case types.UPDATE_ORDER:
      return {...state, order: action.payload};
    case types.UPDATE_PAGE:
      return {...state, page: action.payload};
    case types.UPDATE_PERPAGE:
      return {...state, perpage: action.payload}; 
    case types.UPDATE_SEARCH:
      return {...state, query: action.payload};
      case types.SET_TOTALS:
        return {...state, total: action.payload};
    case types.SET_RESULTS:
      return {...state, results: action.results};
    case types.SET_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
}

export default searchReducer;