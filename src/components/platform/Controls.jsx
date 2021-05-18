import React from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';

function Controls({ onSubmit, onChange, url, text }) {
  return (
    <div className={styles.formDisplay}>
      <form onSubmit={onSubmit}>
        <section className="url-search">
          <input
            type="url"
            name="url"
            placeholder="URL"
            value={url}
            onChange={onChange}
          />
        </section>
        <main className={styles.buttons}>
          <input
            className={styles.rb}
            type="radio"
            id="get"
            name="fetchMethod"
            value="GET"
            onChange={onChange}
          />
          <label htmlFor="get">GET</label>
          <input
            className={styles.rb}
            type="radio"
            id="post"
            name="fetchMethod"
            value="POST"
            onChange={onChange}
          />
          <label htmlFor="post">POST</label>

          <input
            className={styles.rb}
            type="radio"
            id="put"
            name="fetchMethod"
            value="PUT"
            onChange={onChange}
          />
          <label htmlFor="put">PUT</label>

          <input
            className={styles.rb}
            type="radio"
            id="delete"
            name="fetchMethod"
            value="DELETE"
            onChange={onChange}
          />
          <label htmlFor="delete">DELETE</label>
          <button className={styles.fetch}>Fetch</button>
        </main>
        <section className={styles.jsonInput}>
          <textarea
            rows="4"
            columns="50"
            name="text"
            placeholder="raw json"
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
