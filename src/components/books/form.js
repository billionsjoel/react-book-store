import './css/form.scss';
import React from 'react';
import { useDispatch } from 'react-redux';

function form() {
  return (
    <div className="form-container">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <div className="form">
        <input
          type="text"
          className="input-title"
          name=""
          id=""
          placeholder="Book title"
        />
        <select name="categories" id="category-id" className="input-categories">
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="button" value="" className="btn-submit">
          ADD BOOK
        </button>
      </div>
    </div>
  );
}

export default form;
