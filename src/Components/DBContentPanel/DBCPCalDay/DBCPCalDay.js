import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../Sass/index.css';

export default class DBCPCalDay extends Component {
  render() {
    const date = `${this.props.month}-${this.props.day}-${this.props.year}`;
    const link = `/view-logs/${date}`;
    return (
      <Link to={link} className='dbcp-log-calendar__day'>
        <h3 className='dbcp-log-calendar__days-text'>
          {`${this.props.month} ${this.props.day}`}
        </h3>
      </Link>
    );
  }
}