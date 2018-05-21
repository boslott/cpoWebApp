import React, { Component } from 'react';
import moment from 'moment';

import '../../Sass/index.css';
import DBSidePanel from '../../Components/DBSidePanel/DBSidePanel';
import DBContentPanel from  '../../Components/DBContentPanel/DBContentPanel';

export default class SingleDayView extends Component {
  render() {
    return (
      <div className='dashboard single-day-view'>
        <DBSidePanel />
        <DBContentPanel panelType='single-day-view' panelTitle={moment(this.props.match.params.completedOn).format('MMMM DD, YYYY')} />
      </div>
    );
  }
}