import axios from 'axios';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {showAlert} from 'react-native-customisable-alert';
import { Default } from './src/constant/COLORS';
import axiosBaseUrl from './src/baseUrl/AxsiosBaseUrl';

const api_url = {
  getBannerUrl: 'private/banner/list',
  login: 'auth/executive/login',
  getUserProfile: 'private/executive/profile',
  newComplaint: 'private/executive/compliant-list',
  acceptedComplaint: 'private/executiv/accpit/list',
  solvedComplaint: 'private/executive/compliant/solve-list',
  acceptComplaint: 'private/executive/compliant/accepted',
  arriveComplaint: 'private/executive/compliant/arrive',
  solveComplaint: 'private/executive/compliant/solve',
};

// const baseUrl = 'https://chintamani.arramton.co.in/';

const SignUpValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required')
    .oneOf([Yup.ref('confim_password'), null], 'Passwords Feilds Must Match'),
  confim_password: Yup.string()
    .min(5, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords Feilds Must Match'),
  address: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  pincode: Yup.string()
    .min(6, 'Invalid Pincode')
    .max(6, 'Invalid Pincode')
    .required('Required'),
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  work_from_time: Yup.string()
    .min(3, 'Please Enter start Time')
    .max(30, 'Please Enter Valid Input')
    .required('Required'),
  work_till_time: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  service_area: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(10, 'Invalid Mobile Number!')
    .max(10, 'Invalid Mobile Number')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required')
    .matches(
      // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Invalid email address',
    ),
});

const LoginValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(30, 'Too Long!')
    .required('This Feild is Required'),
  phone: Yup.string()
    .min(10, 'Invalid Input Feild Value!')
    .max(30, 'Invalid Input Feild Value!')
    .required('This Feild is Required'),
  // email: Yup.string()
  //   .email('Invalid email address')
  //   .required('Required')
  //   .matches(
  //     // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  //     'Invalid email address',
  //   ),
});

const getError = (e, apiFor) => {
  console.log(apiFor + ' failed with status', e?.response?.status);
  if (e?.response?.status == 422 && e.response?.data.errors?.length >= 1) {
    showAlert({
      title: 'Error',
      message: `${e.response?.data.errors[0]?.msg?.toUpperCase()}`,
      alertType: 'error',
      // onPress: () => console.log('files deleted!'),
    });

    // Toast.show({
    //   type: 'error',
    //   text1:
    //     e.response?.data.errors?.length >= 1
    //       ? e.response?.data.errors[0].param.toUpperCase() || 'Login'
    //       : apiFor,
    //   text2:
    //     e.response?.data.errors?.length >= 1
    //       ? e.response?.data.errors[0].msg.toUpperCase() ||
    //         'INTERNAL SERVER ERROR'
    //       : e?.message || 'INTERNAL SERVER ERROR',
    // });
  } else if (e?.response?.status !== 500) {
    showAlert({
      title: 'Error',
      message: `${e?.message.toUpperCase()}`,
      alertType: 'error',
      // onPress: () => console.log('files deleted!'),
    });
  } else if (e?.response?.status == 400) {
    showAlert({
      title: 'Error',
      message: `${e?.message.toUpperCase()}`,
      alertType: 'error',
      // onPress: () => console.log('files deleted!'),
    });
  } else {
    showAlert({
      title: 'Error',
      message: `Due to some technical We Can't able to Process Your Request`,
      alertType: 'error',
      // onPress: () => console.log('files deleted!'),
    });
    // Toast.show({
    //   type: 'error',
    //   text1: apiFor,
    //   text2: 'INTERNAL SERVER ERROR',
    // });
  }
};

const CustomError = (e, apiFor) => {
  console.log(apiFor);
  // if (e?.response?.status == 422 && e.response?.data.errors?.length >= 1) {
  showAlert({
    title: 'Error',
    message: `${e?.toUpperCase()}`,
    alertType: 'error',
    // onPress: () => console.log('files deleted!'),
  });
  // }
};

const getSuccess = (showMess, apiFor) => {
  console.log(apiFor);
  showAlert({
    title: `${apiFor}`,
    message: `${showMess.toUpperCase()}`,
    alertType: 'success',
  });
};

const _httpPostRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    axiosBaseUrl
      .post(url, data)
      .then(data => {
        resolve(data.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const _httpGetResponse = (url, data = '', cb) => {
  console.log({urls: url + '/' + data});
  return new Promise((resolve, reject) => {
    axiosBaseUrl
      .get(url + '/' + data)
      .then(data => {
        if (cb) cb();
        resolve(data.data);
      })
      .catch(error => {
        if (cb) cb();
        // const err = getError(error);
        reject(error);
      });
  });
};

const _httpDeleteRequest = (url, id) => {
  return new Promise((resolve, reject) => {
    axiosBaseUrl
      .delete(url + '/' + id)
      .then(data => {
        resolve(data.data);
      })
      .catch(error => {
        // const err = getError(error);
        reject(error);
      });
  });
};

const _httpPutRequest = (url, id, data = '') => {
  return new Promise((resolve, reject) => {
    axiosBaseUrl
      .put(url + '/' + id, data)
      .then(data => {
        resolve(data.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const _checkUserToken = async cb => {
  try {
    const user = await AsyncStorage.getItem('userToken');
    // console.log(user)
    if (user !== null) {
      cb();
    }
  } catch (err) {
    // error reading value
    console.log('Err while fetching: ', err);
  }
};

const checkUser = async (cb,ecb) => {
  try {
    console.log('enter chk');
    const user = await AsyncStorage.getItem('userToken');
    // const referCode = await AsyncStorage.getItem('referCode');;
    // console.log({user})
    if (user !== null) {
      
      cb(user);
    } else {
      ecb();
    }
  } catch (err) {
    ecb();
    // error reading value
    console.log('Err while fetching Token: ', err);
  }
};

export {
  _httpPostRequest,
  api_url,
  _httpGetResponse,
  _httpDeleteRequest,
  _httpPutRequest,
  SignUpValidationSchema,
  LoginValidationSchema,
  getError,
  getSuccess,
  CustomError,
  _checkUserToken,
  checkUser,
};
