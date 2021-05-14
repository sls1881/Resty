import React from 'react';
import PropTypes from 'prop-types';

function Controls({ onSubmit, onChange, url }) {
  return (
    <div className="form-display">
      <form onSubmit={onSubmit}>
        <section className="url-search">
          <input type="url" name="url" value={url} onChange={onChange} />
        </section>
        <main className="buttons">
          <label for="get">
            GET
            <input
              type="radio"
              id="get"
              name="fetchMethod"
              value="get"
              onChange={onChange}
            />
          </label>
          <label for="post">
            POST
            <input
              type="radio"
              id="post"
              name="fetchMethod"
              value="post"
              onChange={onChange}
            />
          </label>
          <label for="put">
            PUT
            <input
              type="radio"
              id="put"
              name="fetchMethod"
              value="put"
              onChange={onChange}
            />
          </label>
          <label for="delete">
            DELETE
            <input
              type="radio"
              id="delete"
              name="fetchMethod"
              value="delete"
              onChange={onChange}
            />
          </label>
          <button className="fetch">Fetch</button>
        </main>
        <section className="json-input">
          <textarea
            rows="4"
            columns="50"
            name="text"
            onChange={onChange}
          ></textarea>
        </section>
      </form>
    </div>
  );
}

Controls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default Controls;
