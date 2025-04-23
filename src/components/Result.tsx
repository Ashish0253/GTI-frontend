
const Result = ({ driverData, uuid, children }) => {
  // Helper function to format date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Date(date).toLocaleDateString(undefined, options);
  };


  return (
    <div className="m-2">

      <h1 className="text-2xl m-0"> Driver ID - <p className="text-lg">{ uuid }</p> </h1>
    <div className="flex flex-col justify-center">
      
        {/* Display Driver Details */}
        {driverData && driverData.data.driver_details ? (
          <div className="flex flex-col justify-center m-4">
            <h2 className="text-2xl m-4">Driver Details</h2>
            <div className="overflow-x-auto">
            <table 
              className="min-w-full table-auto border-collapse bg-white shadow-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-center text-sm font-medium 
                    text-gray-600 uppercase tracking-wider">
                      Attribute
                  </th>
                  <th className="px-4 py-2 text-center text-sm font-medium 
                    text-gray-600 uppercase tracking-wider">
                      Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(driverData.data.driver_details).map(([key, value]) => (
                  <tr key={key}
                    className={`${
                      key % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      border-b hover:bg-gray-100`
                    }>
                    <td className="px-4 py-2 text-sm text-gray-700">{key}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        ) : (
            <p>No driver data available</p>
          )}

      {/* Display Recent Rides */}
      {driverData && driverData.data.recent_rides && driverData.data.recent_rides.length > 0 ? (
        <div className="overflow-x-scroll">
          <h2 className="text-2xl">Recent Rides</h2>
          <table border="1" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Date and Time</th>
                <th>Uber Balance</th>
                <th>GTI %</th>
                <th>Earnings</th>
                <th>Cash Collected</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {driverData.data.recent_rides.map((ride, index) => (
                <tr key={index}>
                  <td>{formatDate(ride['Date And Time'])}</td>
                  <td>{ride['uber_balance']}</td>
                  <td>{ride['gti_percentage']}</td>
                  <td>{ride['earnings']}</td>
                  <td>{ride['cash_collected']}</td>
                  <td>{ride['remarks']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No recent rides data available</p>
      )}
    </div>

    </div>
  )
}

export default Result;
