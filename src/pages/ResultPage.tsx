import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Result from '@/components/ResultTabs'

const ResultPage = () => {
  const { uuid } = useParams();
  const location = useLocation();
  const { driverData } = location.state; // Access the result from state
  
  //console.log(location.state)


  if (!driverData.success) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full border border-red-300">
          <div className="text-red-600 font-bold text-lg mb-2">
            ⚠️ Error {driverData.status || ""}
          </div>
          <div className="text-gray-700">
            <p className="mb-2">{driverData.data?.detail || "An unknown error occurred."}</p>
            <div className="bg-gray-100 p-3 rounded text-sm text-gray-600 overflow-x-auto">
              <pre>{JSON.stringify(driverData, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }




  return <Result driverData={driverData.data} uuid={uuid} />
};

export default ResultPage;
