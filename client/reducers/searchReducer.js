import * as types from '../constants/actionTypes';

const initialState = {query: '', lang: ['js', 'ts', 'py'], results: []};


const searchReducer = (state = initialState, action) => {
  switch (action.type){
    case types.UPDATE_LANG:
      return {...state, lang: action.payload};

    case types.UPDATE_SEARCH:
      return {...state, query: action.payload};
    
    case types.UPDATE_RESULTS:
      return {...state, results: action.payload};
    default:
      return state;
  }
}

export default searchReducer;