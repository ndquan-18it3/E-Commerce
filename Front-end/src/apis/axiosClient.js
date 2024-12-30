import axios from 'axios';
import queryString from 'query-string';

//get env mode
const env = process.env.NODE_ENV;
// const baseURL = process.env.REACT_APP_API_URL;
const baseURL = "https://e-commerce-be-yrdc.onrender.com";

//Set up default config for http request
// Tao ra 1 object dung chung cho moi noi can import no
const axiosClient = axios.create({
  baseURL: baseURL + '/apis',
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
  //query string dung de parse url thanh json thay cho axios (tranh tuong hop null url)
  paramsSerializer: (params) => queryString.stringify(params),
});

//handle request
axiosClient.interceptors.request.use(
  (config) => {
    console.log("baseURL", baseURL)
    return config;
  },
  (error) => {
    throw error;
  },
);

//handle response
axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    throw error;
  },
);

export default axiosClient;
