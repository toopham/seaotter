/* Redux actions to reducer*/
import * as types from '../constants/actionTypes';

export const updateLangActionCreator = (lang) => ({
  type: types.UPDATE_LANG,
  payload: lang,
});

export const updateSortActionCreator = (sort) => ({
  type: types.UPDATE_SORT,
  payload: sort,
});

export const updateOrderActionCreator = (order) => ({
  type: types.UPDATE_ORDER,
  payload: order,
});

export const updatePageActionCreator = (page) => ({
  type: types.UPDATE_PAGE,
  payload: page,
});

export const updatePerPageActionCreator = (perpage) => ({
  type: types.UPDATE_PERPAGE,
  payload: perpage,
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

export const setTotalsActionCreator = (total) => ({
  type: types.SET_TOTALS,
  payload: total,
})

export const setErrorActionCreator = (err) => ({
  type: types.SET_ERROR,
  payload: err,
})
