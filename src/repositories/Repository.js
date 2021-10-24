import axios from 'axios';
import Swal from 'sweetalert2'

const provider = axios.create({ baseURL: process.env.REACT_APP_URL_BACKEND });

let auth = JSON.parse(localStorage.getItem('auth'));

if (auth) {
//   const token = JSON.parse(auth)?.token;
  provider.defaults.headers.common['Authorization'] = `Bearer ${auth.access_token}`;
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
    Swal.fire({
      title: 'Error!',
      text: error.response.data.message,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    return Promise.reject(error);
  },
);

export default provider;