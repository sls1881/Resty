import React from 'react';
import PropTypes from 'prop-types';

function HistoryItem({ fetchMethod, url }) {
  return (
    <div>
      <p>{fetchMethod}</p>
      <p>{url}</p>
    </div>
  );
}

HistoryItem.propTypes = {
  fetchMethod: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default HistoryItem;
