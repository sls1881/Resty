import React from 'react';
import PropTypes from 'prop-types';

function HistoryItem({ fetchMethod, url }) {
  return (
    <div>
      <h2>{fetchMethod}</h2>
      <p>{url}</p>
    </div>
  );
}

HistoryItem.propTypes = {
  fetchMethod: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default HistoryItem;
