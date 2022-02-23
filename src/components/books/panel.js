import './css/panel.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

function panel({ id, title, category }) {
  const dispatch = useDispatch();
  const ENDPOINT = `'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZmlftpRIaWh7RCcDK6RR/books/${id}'`;

  const handleRemove = () => {
    fetch(ENDPOINT, {
      method: 'DELETE',
    });
    dispatch(removeBook({ id }));
  };

  return (
    <div className="panel-container">
      <div className="details">
        <div className="heading">
          <div className="genre">{category}</div>
          <div className="title">{title}</div>
          <div className="name">Suzzanne Collins</div>
        </div>
        <div className="buttons">
          <button type="button" className="button">
            Comments
          </button>
          <button type="button" className="button" onClick={handleRemove}>
            Remove
          </button>
          <button type="button" className="button">
            Edit
          </button>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ width: 60, height: 60 }}>
          <CircularProgressbar value={64} />
        </div>
        <div className="percentage">
          <span className="score">64%</span>
          <span className="completed">completed</span>
        </div>
      </div>

      <div className="chapter-container">
        <div className="chapter-title">CURRENT CHAPTER</div>
        <h4 className="chapter-number">Chapter 17</h4>
        <button type="button" className="btn">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

panel.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default panel;
