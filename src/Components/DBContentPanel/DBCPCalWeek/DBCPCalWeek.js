import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import '../../../Sass/index.css';
import DBCPCalDay from '../DBCPCalDay/DBCPCalDay';

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
    week: [],
  }

  componentDidMount() {
    this.setWeek();
  }

  setWeek = () => {
    switch (this.props.wk) {
      case '1':
        this.setState({ week: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'] });
        break;
      case '2':
        this.setState({ week: ['8th', '9th', '10th', '11th', '12th', '13th', '14th'] });
        break;
      case '3':
        this.setState({ week: ['15th', '16th', '17th', '18th', '19th', '20th', '21st'] });
        break;
      case '4':
        this.setState({ week: ['22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th'] });
        break;
      case '5':
        this.setState({ week: ['30th', '31st'] });
        break;
      default:
        break;
    }
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
        {this.state.toggle.toggled ? (
          <div className='dbcp-log-calendar__days-box'>
            {this.state.week.map(day => (
              <DBCPCalDay key={day} day={day} className='dbcp-log-calendar__day'/>
            ))}
          </div>
        ) : ''}
      </div>
    );
  }
}