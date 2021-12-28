import * as types from '../constants/actionTypes';

export const updateLangActionCreator = (lang) => ({
  type: types.UPDATE_LANG,
  payload: lang,
});

export const updateSearchActionCreator = (query) => ({
  type: types.UPDATE_SEARCH,
  payload: query
});

export const getResultsActionCreator = () => ({
  type: types.GET_RESULTS,
})

export const setResultsActionCreator = (results) => ({
  type: types.SET_RESULTS,
  results: results,
})
