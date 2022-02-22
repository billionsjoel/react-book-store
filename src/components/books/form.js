import React from 'react';

function form() {
  return (
    <div className="form-container">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <div className="form">
        <div className="form-check">
          <input
            type="text"
            className="form-check-input"
            name=""
            id=""
            placeholder="Book title"
          />
          <select name="categories" id="category-id">
            <option value="Action">Action</option>
            <option value="Fiction">Fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <button type="button" value="" className="btn">ADD BOOK</button>
        </div>
      </div>
    </div>
  );
}

export default form;
