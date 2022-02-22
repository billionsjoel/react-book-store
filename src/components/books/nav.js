import './css/nav.css';
import React from 'react';

function nav() {
  return (
    <div className="nav-container">
      <div>Bookstore CMS</div>
      <div className="menu">
        <ul>
          <li>Books</li>
          <li>CATEGORIES</li>
        </ul>
      </div>
    </div>
  );
}

export default nav;
