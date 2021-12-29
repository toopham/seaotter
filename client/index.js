import React from 'react';
import { render } from 'react-dom';
import App from './App';
import mystore from './store';
import { Provider } from 'react-redux';

render(
  <Provider store={mystore}>
    <App />
  </Provider>, 
document.getElementById('app'));