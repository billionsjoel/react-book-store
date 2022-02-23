/* eslint-disable max-len */
// ZmlftpRIaWh7RCcDK6RR - API KEY
// GET => us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZmlftpRIaWh7RCcDK6RR/books

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
