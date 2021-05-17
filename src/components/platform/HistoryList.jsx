import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

function HistoryList({ history }) {
  return (
    <ul aria-label="history">
      {history.map((item) => (
        <li key={item.fetchMethod}>
          <HistoryItem fetchMethod={item.fetchMethod} url={item.url} />
        </li>
      ))}
    </ul>
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
