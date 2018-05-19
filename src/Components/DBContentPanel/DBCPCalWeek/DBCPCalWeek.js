import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import '../../../Sass/index.css';

const toggleOn = {
  toggled: true,
  toggleIcon: 'minus',
}

const toggleOff = {
  toggled: false,
  toggleIcon: 'plus'
}

export default class DBCPCalWeek extends Component {

  state = {
    toggle: toggleOff,
  }

  toggle = () => {
    if (this.state.toggle === toggleOff) {
      this.setState ({
        toggle: toggleOn,
      });
    } else {
      this.setState({
        toggle: toggleOff,
      });
    }
  }

  render() {
    return (
      <div className='dbcp-log-calendar__week'>
        <a onClick={this.toggle}>
          <FontAwesomeIcon
            icon={this.state.toggle.toggleIcon}
            size='sm'
            className='dbcp-log-calendar__month-icon'
          />
          <p className='dbcp-log-calendar__days-text'>
            Week {this.props.wk}: <span className='ml-2'>{this.props.wkNums}</span></p>
        </a>
      </div>
    );
  }
}