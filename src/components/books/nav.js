import './css/nav.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function nav() {
  return (
    <div className="nav-container">
      <div className="menu">
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </div>

      <div className="user">
        <svg
          height="25"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
          className="user-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default nav;
