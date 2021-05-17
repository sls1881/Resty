import React, { Component } from 'react';
import Controls from '../components/platform/Controls';
import Display from '../components/platform/Display';
import HistoryList from '../components/platform/HistoryList';
import { getData } from '../service/ApiFetch';

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
      <div>
        <Controls
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          url={url}
          text={text}
        />
        {display ? <Display display={display} /> : <div></div>}
        <div>
          <h1>History</h1>
          <HistoryList history={history} />
        </div>
      </div>
    );
  }
}
