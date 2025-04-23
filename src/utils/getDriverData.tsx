
import axios from "axios"

const getDriverData = async (uuid) => {

  try {
    const response = await axios.post("http://127.0.0.1:3001/get-driver-data", {
      uuid: uuid
    });

    console.log(response);

    return { success: true, data: response.data.data };
  } catch (error) {

    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        return { success: false, status: error.response.status, data: error.response.data };
      } else if (error.request) {
        // Request was made but no response received
        return { success: false, message: "No Response from Server", request: error.request };
      } else {
        // Something happened in setting up the request
        return { success: false, message: "Request Error", details: error.message };
      }
    } else {
      // Handle non-Axios errors
      return { success: false, message: "Unexpected Error", error: error };
    }
  }
};



export default getDriverData

