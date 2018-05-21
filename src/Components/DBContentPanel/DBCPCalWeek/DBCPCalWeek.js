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
        this.setState({ week: ['1', '2', '3', '4', '5', '6', '7'] });
        break;
      case '2':
        this.setState({ week: ['8', '9', '10', '11', '12', '13', '14'] });
        break;
      case '3':
        this.setState({ week: ['15', '16', '17', '18', '19', '20', '21'] });
        break;
      case '4':
        this.setState({ week: ['22', '23', '24', '25', '26', '27', '28', '29'] });
        break;
      case '5':
        this.setState({ week: ['30', '31'] });
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
              <DBCPCalDay key={day} year={this.props.year} month={this.props.month} day={day} className='dbcp-log-calendar__day'/>
            ))}
          </div>
        ) : ''}
      </div>
    );
  }
}