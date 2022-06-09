import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { env } from './env';
var headers = {};

const axiosBaseUrl = axios.create({
  
  baseURL: env.baseUrl, //aws uri http://13.235.92.159:3006/api/private
  //  baseURL: "http://192.168.68.140:8080/",  //local ip
  // baseURL:'https://b581-122-160-47-222.ngrok.io/',  // ng rok
  headers,
});

// Add a request interceptor
axiosBaseUrl.interceptors.request.use(
  async function (config) {
    // Do something before request is sent

    try {
      const user = await AsyncStorage.getItem('userToken');

      // console.log("USER IN INTERCEPTOR", user)
      // Object.assign(config.headers, {Authorization: "Bearer " + user})

      if (user !== null) {
        console.log('HERE IN AXIOS BASE URL: ', user);

        Object.assign(config.headers, {Authorization: 'Bearer ' + user});
      }
    } catch (err) {
      // error reading value
      console.log('Err while fetching: ', err);
    }

    // console.log(config.headers)

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosBaseUrl.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log({data: response?.data});
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log({error});
    return Promise.reject(error);
  },
);

export default axiosBaseUrl;
