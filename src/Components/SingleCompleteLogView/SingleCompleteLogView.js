import React, {Component } from 'react';
import moment from 'moment';

import '../../Sass/index.css';
import SingleDayMainCompleteLogsQuery from '../../Components/Queries/SingleDayMainCompleteLogsQuery/SingleDayMainCompleteLogsQuery';
import SingleDayWadingCompleteLogsQuery from '../../Components/Queries/SingleDayWadingCompleteLogsQuery/SingleDayWadingCompleteLogsQuery';

class SingleCompleteLogView extends Component {
  render() {
    const date = moment(this.props.date).format('YYYY-MM-DD') + 'T04:00:00.000Z';
    return (
      <div className='single-complete-log-view card w80 flex-center-all'>
        {this.props.pool === 'Main' ? (
          <SingleDayMainCompleteLogsQuery completedOn={date} />
        ) : (this.props.pool === 'Wading' ? (
          <SingleDayWadingCompleteLogsQuery completedOn={date} />
        ) : '')}
      </div>
    );
  }
}

export default SingleCompleteLogView;