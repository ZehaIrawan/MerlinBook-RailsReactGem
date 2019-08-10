import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { id, title, author, percentage, category, deleteBook } = props;
  const percentageToDegrees = Math.round(percentage * 1.8);
  const percentageStyle = {
    transform: `rotate(${percentageToDegrees}deg)`,
  };
  return (
    <tr>
      <td className="details-container">
        <h4 className="book-category">{category}</h4>
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <div className="action-buttons">
          <button type="button" className="action-button no-click" disabled>
            Comments
          </button>
          {' | '}
          <button
            className="action-button"
            type="button"
            onClick={() => {
              deleteBook(id);
            }}
          >
            Remove
          </button>
          {' | '}
          <button
            className="action-button no-click"
            type="button"
            href="#"
            disabled
          >
            Edit
          </button>
        </div>
      </td>
      <td className="progress-container">
        <div className="circle">
          <div className="circle-wrap">
            <div className="circle">
              <div className="mask" style={percentageStyle}>
                <div
                  className={percentage === '0' ? '' : 'fill'}
                  style={percentageStyle}
                />
              </div>
              <div className="mask half">
                <div
                  className={percentage === '0' ? '' : 'fill'}
                  style={percentageStyle}
                />
              </div>
              <div className="inside-circle" />
            </div>
          </div>
        </div>
        <div className="percentage-completed">
          <h1>{`${percentage}%`}</h1>
          <p>Completed</p>
        </div>
      </td>
      <td className="update-progress-container">
        <button className="blue-button update-button light" type="button">
          Update Progress
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default Book;
