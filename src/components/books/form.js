import './css/form.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../redux/books/books';

function form() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const responseData = useSelector(({ booksReducer }) => booksReducer);
  const dispatch = useDispatch();
  const ENDPOINT = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZmlftpRIaWh7RCcDK6RR/books';

  const submitBookToStore = (e) => {
    e.preventDefault();
    const book = {
      item_id: `book_${
        responseData
          .map((book) => book.item_id.split('_')[1])
          .sort()
          .reverse()[0] + 1 || 1
      }`,
      title: title.trim(),
      category,
    };

    fetch(ENDPOINT,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      });

    dispatch(addBook(book));
    setTitle('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <div className="forms">
        <form onSubmit={submitBookToStore} className="form">
          <input
            type="text"
            className="input-title"
            value={title}
            placeholder="Book title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-categories"
          >
            <option value="" disabled>
              Category
            </option>
            <option value="Action">Action</option>
            <option value="Fiction">Fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <button type="submit" className="btn-submit">
            ADD BOOK
          </button>
        </form>
      </div>
    </div>
  );
}

export default form;
