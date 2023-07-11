import axios from 'axios'

const baseURL = 'http://localhost:8000'


export const getEmployee = async (email, password) => {
    try {
        return axios.post(`${baseURL}/auth/login`, {
            email, password
        })
    } catch(e) {
        console.log(`Error detected: ${e}`);
        throw e;
    }
}

export const authenticate = async (token) => {
    try {
      const response = await axios.get(`${baseURL}/auth/test_token`, {
        headers: {
          Authorization: `Token ${token}`, // Include the token in the Authorization header
        },
      });
      console.log('new response' + response)
      return response; // Return the response data
    } catch (error) {
      console.log(`Error detected: ${error}`);
      throw error;
    }
  };
  
  export const getCloudServices = async (id) => {
    try {
        return axios.get(`${baseURL}/IdleResources/employeeAuthorizedBU`, {
            params: { id }  // Pass the ID as a query parameter
        });
    } catch (e) {
        console.log(`Error detected: ${e}`);
        throw e;
    }
};