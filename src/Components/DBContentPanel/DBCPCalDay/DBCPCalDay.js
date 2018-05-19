import React, { Component } from 'react';

import '../../../Sass/index.css';

export default class DBCPCalDay extends Component {
  render() {
    return (
      <a className='dbcp-log-calendar__day'>
        <p className='dbcp-log-calendar__days-text'>
          {this.props.day}
        </p>
      </a>
    );
  }
}