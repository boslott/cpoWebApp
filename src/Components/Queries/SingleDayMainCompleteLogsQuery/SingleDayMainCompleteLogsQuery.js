import React from 'react';
import { PacmanLoader } from 'react-spinners';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import MainCompleteLogViewPanel from '../../MainCompleteLogViewPanel/MainCompleteLogViewPanel';

const GET_MAINPOOL_COMPLETE_LOGS = gql`
  query allMainPoolCompleteLogs($completedOn: DateTime) {
    allMainPoolCompleteLogs(filter: { completedOn: $completedOn }) {
      cac
      ch
      clVolume
      completedOn
      createdOn
      cya
      fac
      filterPressure1
      filterPressure2
      filterPressure3
      filterPressure4
      flowRate
      id
      orp
      phController
      phMan
      ta
      waterLevel
      whoChecked
    }
  }
`;

const SingleDayMainCompleteLogsQuery = ({ completedOn }) => (
  <Query query={GET_MAINPOOL_COMPLETE_LOGS} variables={{ completedOn }}>
    {({ loading, error, data }) => {
      if (loading) return <PacmanLoader />;
      if (error) return `Error: ${error}`;

      return data.allMainPoolCompleteLogs.map( logData => (
        <MainCompleteLogViewPanel key={logData.id} logData={logData} />
      ));
    }}
  </Query>
);

export default SingleDayMainCompleteLogsQuery;