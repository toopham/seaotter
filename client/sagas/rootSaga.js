import { takeLatest } from 'redux-saga/effects';
import {handleGetResults } from './handlers/results';
import { GET_RESULTS } from '../constants/actionTypes';

export function* watcherSaga() {
  yield takeLatest(GET_RESULTS, handleGetResults);
}