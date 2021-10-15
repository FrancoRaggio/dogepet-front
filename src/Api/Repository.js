import axios from 'axios';

const provider = axios.create({ baseURL: process.env.REACT_APP_URL_BACKEND });

let auth = localStorage.getItem('token');

if (auth) {
//   const token = JSON.parse(auth)?.token;
//   provider.defaults.headers.common['Authorization'] = `Bearer ${token}`;
} else {
  delete provider.defaults.headers.common['Authorization'];
}

provider.interceptors.request.use(
  function (config) {
    if (config.data instanceof FormData) {
      config.headers.common['Content-Type'] = "multipart/form-data";
    }
    // console.log('Request: ', config);
    return config;
  },
  function (error) {
    // console.log('Request error: ', error);
    return Promise.reject(error);
  },
);

provider.interceptors.response.use(
  function (response) {
    console.log('Response: ', response);
    return response.data.data;
  },
  function (error) {
    console.log('Response error: ', error.response.data);
    alert(error.response.data.message)
    return Promise.reject(error);
  },
);

export default provider;