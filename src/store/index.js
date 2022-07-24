import { legacy_createStore, compose, applyMiddleware } from "redux";
import reducer from './reducer.js';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(reducer, composeEnhancers(
    applyMiddleware(thunk),
));

export default store;