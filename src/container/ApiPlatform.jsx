import React, { Component } from 'react';
import Controls from '../components/platform/Controls';
import Display from '../components/platform/Display';
import HistoryList from '../components/platform/HistoryList';
import { getData } from '../service/ApiFetch';
import styles from '../components/app/App.css';
import ReactJson from 'react-json-view'

export default class ApiPlatform extends Component {
  state = {
    url: '',
    fetchMethod: 'GET',
    text: '',
    display: null,
    history: [],
  };

  //Handle URL change
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  //Handle Submit
  handleSubmit = async (e) => {
    e.preventDefault();

    const { url, fetchMethod, text } = this.state;

    const res = await getData({ url, fetchMethod, text });

    const historyDisplay = { fetchMethod, url };

    this.setState({
      display: { display: res },
      history: [...this.state.history, historyDisplay],
    });
  };

  render() {
    const { url, display, history, text } = this.state;

    return (
      <>
        <header>
          <h1>RESTy API Fetch</h1>
        </header>
        <div className={styles.entireContainer}>
          <aside>
            <h2>History</h2>
            <HistoryList history={history} />
          </aside>
          <main>
            <div className={styles.controlsContainer}>
              <h2>Search an Endpoint</h2>
              <Controls
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                url={url}
                text={text}
              />
            </div>
            <div className={styles.displayContainer}>
              <h2>Results</h2>
              {display ? <ReactJson src={display} /> : <div></div>}
              
            </div>
          </main>
        </div>
      </>
    );
  }
}
