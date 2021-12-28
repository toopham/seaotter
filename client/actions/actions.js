import * as types from '../constants/actionTypes';

export const updateLangActionCreator = (lang) => ({
  type: types.UPDATE_LANG,
  payload: lang,
});

export const updateSearchActionCreator = (query) => ({
  type: types.UPDATE_SEARCH,
  payload: query
});

export const updateResultsActionCreator = (results) => ({
  type: types.UPDATE_RESULTS,
  payload: results
});

