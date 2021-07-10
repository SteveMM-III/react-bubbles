import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer } from './reducers';

const store = createStore( reducer, composeWithDevTools( applyMiddleware( thunk, logger ) ) );

ReactDOM.render( <Provider store={ store }><App /></Provider>, document.getElementById( 'root' ) );