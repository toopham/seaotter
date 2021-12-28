import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducers, middleware, sagaMiddleWare} from './reducers/index';
import { watcherSaga } from './sagas/rootSaga';

const mystore = createStore(
	reducers,
	composeWithDevTools(),
  applyMiddleware(...middleware)
);

sagaMiddleWare.run(watcherSaga);

export default mystore;