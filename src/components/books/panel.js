import './css/panel.scss';
import React from 'react';

function panel() {
  return (
    <div className="panel-container">
      <div className="details">
        <div className="heading">
          <div className="genre">Action</div>
          <div className="title">The Hunger Games</div>
          <div className="name">Suzzanne Collins</div>
        </div>
        <div className="buttons">
          <ul>
            <li>Comments</li>
            <li>| &nbsp; Remove &nbsp; |</li>
            <li>Edit</li>
          </ul>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress">
          <div className="chart" data-percent="64" />
        </div>
        <div className="percentage">
          <span className="score">64%</span>
          <span className="completed">completed</span>
        </div>
      </div>

      <div className="chapter">
        <h3>CURRENT CHAPTER</h3>
        <h4>CHAPTER 17</h4>
        <button type="button" className="btn">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

export default panel;
