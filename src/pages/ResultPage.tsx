import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Result from '@/components/ResultTabs'

const ResultPage = () => {
  const { uuid } = useParams();
  const location = useLocation();
  const { driverData } = location.state; // Access the result from state
  
  //console.log(location.state)

  if (!driverData.success) {
    return <div>
      <h2>Driver Data:</h2>
      <pre>{JSON.stringify(driverData, null, 2)}</pre>
    </div>;
  }



  return <Result driverData={driverData.data} uuid={uuid} />
};

export default ResultPage;
