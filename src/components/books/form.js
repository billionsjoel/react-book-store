import './css/form.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../../redux/books/books';

function form() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const length = useSelector(({ booksReducer }) => booksReducer.length);
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: `item${length + 1}`,
        title,
        category,
      }),
    );

    setTitle('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <div className="form">
        <form onSubmit={submitBookToStore}>
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
