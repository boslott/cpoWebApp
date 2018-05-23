import React from 'react';
import { PacmanLoader } from 'react-spinners';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import WadingCompleteLogViewPanel from '../../WadingCompleteLogViewPanel/WadingCompleteLogViewPanel';

const GET_WADINGPOOL_COMPLETE_LOGS = gql`
  query allWadingPoolCompleteLogs($completedOn: DateTime) {
    allWadingPoolCompleteLogs(filter: { completedOn: $completedOn }) {
      cac
      ch
      completedOn
      createdOn
      cya
      fac
      filterPressure1
      flowRate
      id
      ph
      ta
      waterLevel
      whoChecked
    }
  }
`;

const SingleDayWadingCompleteLogsQuery = ({ completedOn }) => (
  <Query query={GET_WADINGPOOL_COMPLETE_LOGS} variables={{ completedOn }}>
    {({ loading, error, data }) => {
      if (loading) return <PacmanLoader />;
      if (error) return `Error: ${error}`;
      
      return data.allWadingPoolCompleteLogs.map( logData => (
        <WadingCompleteLogViewPanel key={logData.id} logData={logData} />
      ));
    }}
  </Query>
);

export default SingleDayWadingCompleteLogsQuery;