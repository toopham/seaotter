import "regenerator-runtime/runtime";
import { call, put, select } from 'redux-saga/effects';
import { requestGetResults } from '../requests/search';
import { setResultsActionCreator } from '../../actions/actions';

export function* handleGetResults(action) {
  try {
    const state = yield select();
    const body = {query: state.search.query, lang: state.search.lang};
    const response = yield call(requestGetResults, body);
    const { data } = response;
    yield put(setResultsActionCreator(data.items));
  } catch (error) {
    console.log('ERROR : ', error);
  }
};