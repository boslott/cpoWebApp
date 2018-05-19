import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import '../../../Sass/index.css';
import DBCPCalWeek from '../DBCPCalWeek/DBCPCalWeek';

const toggleOn = {
  toggled: true,
  toggleIcon: 'minus',
}

const toggleOff = {
  toggled: false,
  toggleIcon: 'plus'
}

export default class DBCPCalMonth extends Component {

  state = {
    toggle: toggleOff
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
      <div className='dbcp-log-calendar__month'>
        <a onClick={this.toggle}>
          <FontAwesomeIcon
            icon={this.state.toggle.toggleIcon}
            size='sm'
            className='dbcp-log-calendar__month-icon'
          />
          {this.props.month}
        </a>
        {this.state.toggle.toggled ? (
          <div className='dbcp-log-calendar__weeks'>
            <DBCPCalWeek wk='1' wkNums='1 - 7' />
            <DBCPCalWeek wk='2' wkNums='8 - 14' />
            <DBCPCalWeek wk='3' wkNums='15 - 21' />
            <DBCPCalWeek wk='4' wkNums='22 - 29' />
            {this.props.month !== 'February' ? <DBCPCalWeek wk='5' wkNums='30 - 31' /> : ''}
          </div>
        ) : '' }
      </div>
    );
  }
}