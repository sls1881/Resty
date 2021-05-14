import React, { Component } from 'react';
import Controls from '../components/platform/Controls';
import Display from '../components/platform/Display';
import { getData } from '../service/ApiFetch';

export default class ApiPlatform extends Component {
  state = {
    url: '',
    fetchMethod: 'GET',
    text: '',
    display: [],
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

    const display = await getData({ url, fetchMethod, text });

    this.setState({
      display,
    });
  };

  render() {
    const { url, radio, display } = this.state;
    return (
      <div>
        <Controls
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          url={url}
          radio={radio}
        />
        <Display display={display} />
      </div>
    );
  }
}
