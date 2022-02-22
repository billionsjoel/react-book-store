import { createStore, combineReducers, applyMiddleware } from 'react-redux';
import logger from 'redux-logger';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(logger));