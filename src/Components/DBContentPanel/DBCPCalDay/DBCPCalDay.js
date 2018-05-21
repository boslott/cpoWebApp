import React, { Component } from 'react';

import '../../../Sass/index.css';

export default class DBCPCalDay extends Component {
  render() {
    console.log(this.props);
    return (
      <a className='dbcp-log-calendar__day'>
        <h3 className='dbcp-log-calendar__days-text'>
          {`${this.props.month} ${this.props.day}`}
        </h3>
      </a>
    );
  }
}