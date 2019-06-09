import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers';

import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
