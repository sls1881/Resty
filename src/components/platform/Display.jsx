import React from 'react';
import PropTypes from 'prop-types';

//Fetch results display
function Display({ display }) {
  return (
    <div className="results-display">
      <pre>{JSON.stringify(display.display, null, 2)}</pre>
    </div>
  );
}

Display.propTypes = {
  display: PropTypes.object.isRequired,
};

export default Display;
