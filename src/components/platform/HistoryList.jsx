import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from '../app/App.css';

function HistoryList({ history }) {
  return (
    <div className={styles.resultsContainer}>
      <ul aria-label="history">
        {history.map((item) => (
          <li key={item.fetchMethod}>
            <HistoryItem fetchMethod={item.fetchMethod} url={item.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}

HistoryList.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      fetchMethod: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HistoryList;
