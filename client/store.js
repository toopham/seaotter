import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

const mystore = createStore(
	reducers,
	composeWithDevTools()
);

export default mystore;