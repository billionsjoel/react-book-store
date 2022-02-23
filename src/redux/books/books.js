/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const ENDPOINT =	'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZmlftpRIaWh7RCcDK6RR/books';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const apiData = () => (dispatch) => fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((book) => {
      dispatch({
        type: ADD_BOOK,
        payload: {
          item_id: book,
          ...data[book][0],
        },
      });
    });
  });

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default reducer;
