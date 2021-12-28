import * as types from '../constants/actionTypes';
import languages from '../constants/languages';

const lang = languages.map(obj => obj.value);
const initialState = {query: '', lang: 'any', results: []};


const searchReducer = (state = initialState, action) => {
  switch (action.type){
    case types.UPDATE_LANG:
      return {...state, lang: action.payload};

    case types.UPDATE_SEARCH:
      return {...state, query: action.payload};
    case types.SET_RESULTS:
      return {...state, results: action.results};
    default:
      return state;
  }
}

export default searchReducer;