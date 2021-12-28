import {combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import searchReducer from './searchReducer';
import { watcherSaga } from '../sagas/rootSaga';

export const reducers = combineReducers({
	search: searchReducer,

});

export const sagaMiddleWare = createSagaMiddleware();
export const middleware = [sagaMiddleWare];



