import React from 'react';
import PropTypes from 'prop-types';

function Controls({ onSubmit, onChange, url, text }) {
  return (
    <div className="form-display">
      <form onSubmit={onSubmit}>
        <section className="url-search">
          <input type="url" name="url" value={url} onChange={onChange} />
        </section>
        <main className="buttons">
          <label htmlFor="get">
            GET
            <input
              type="radio"
              id="get"
              name="fetchMethod"
              value="GET"
              onChange={onChange}
            />
          </label>
          <label htmlFor="post">
            POST
            <input
              type="radio"
              id="post"
              name="fetchMethod"
              value="POST"
              onChange={onChange}
            />
          </label>
          <label htmlFor="put">
            PUT
            <input
              type="radio"
              id="put"
              name="fetchMethod"
              value="PUT"
              onChange={onChange}
            />
          </label>
          <label htmlFor="delete">
            DELETE
            <input
              type="radio"
              id="delete"
              name="fetchMethod"
              value="DELETE"
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
            value={text}
            onChange={onChange}
          ></textarea>
        </section>
      </form>
    </div>
  );
}

Controls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default Controls;
