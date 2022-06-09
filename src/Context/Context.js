import React, {createContext, useContext, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  api_url,
  getError,
  _httpGetResponse,
  _httpPostRequest,
} from '../../master.service';
import { ACCEPTCOMPLAINTS, GET_PROFILE, NEWCOMPLAINTS, SOLVECOMPLAINTS } from '../redux/UserSlice';

export const AdminContext = createContext();

export const ContextState = ({children}) => {
  const dispatch = useDispatch();
  const [complainSection, setComplainSection] = useState({
    screen: false,
    data: {},
  });

  // PROFILE API
  const ProfileApi = () => {
    // MainProfileApi();
    _httpGetResponse(api_url.getUserProfile, '')
      .then(res => {
        console.log('Enter Get Profile');
        dispatch(GET_PROFILE({...res?.data}));
        // dispatch(GET_PACKAGE({...res?.data?.packageId}));
        // getBannerApi();
      })
      .catch(err => {
        console.log({err});
        getError(err, 'Get Profile');
      });
  };

  const GetNewComplaintApi = () => {
    _httpGetResponse(api_url.newComplaint, '')
      .then(res => {
        // console.log('Enter Get GetNewComplaintApi',res.data);
        // dispatch(GET_PROFILE({...res?.data?.userId}));
        dispatch(NEWCOMPLAINTS(res.data));
        // getBannerApi();
      })
      .catch(err => {
        console.log({err});
        getError(err, 'Get GetNewComplaintApi');
      });
  };

  const GetAcceptComplaintApi = () => {
    _httpGetResponse(api_url.acceptedComplaint, '')
      .then(res => {
        // console.log('Enter Get GetAcceptComplaintApi');
        // dispatch(GET_PROFILE({...res?.data?.userId}));
        dispatch(ACCEPTCOMPLAINTS(res.data?.reverse()));
        // getBannerApi();
      })
      .catch(err => {
        console.log({err});
        getError(err, 'Get GetNewComplaintApi');
      });
  };
  const GetSolveComplaintApi = () => {
    _httpGetResponse(api_url.solvedComplaint, '')
      .then(res => {
        // console.log('Enter Get GetAcceptComplaintApi');
        // dispatch(GET_PROFILE({...res?.data?.userId}));
        dispatch(SOLVECOMPLAINTS(res.data?.reverse()));
        // getBannerApi();
      })
      .catch(err => {
        console.log({err});
        getError(err, 'Get GetNewComplaintApi');
      });
  };

  const AcceptComplaint = (id) => {
    console.log({id},"gfchvbj");
    _httpGetResponse(api_url.acceptComplaint, id)
      .then(res => {
        console.log('Enter Get AcceptComplaint',res);
        GetNewComplaintApi()
        GetAcceptComplaintApi()
        // dispatch(GET_PROFILE({...res?.data?.userId}));
        // getBannerApi();
      })
      .catch(err => {
        console.log({err});
        getError(err, 'Get GetNewComplaintApi');
      });
  };
  const SolveComplaint = (id) => {
    console.log({id},"gfchvbj");
    _httpGetResponse(api_url.solveComplaint, id)
      .then(res => {
        console.log('Enter Get SolveComplaint',res);
        // GetNewComplaintApi()
        GetAcceptComplaintApi()
        GetSolveComplaintApi()
        // dispatch(GET_PROFILE({...res?.data?.userId}));
        // getBannerApi();
      })
      .catch(err => {
        console.log({err});
        getError(err, 'Get GetNewComplaintApi');
      });
  };

  return (
    <AdminContext.Provider
      value={{
        ProfileApi,
        GetNewComplaintApi,
        GetAcceptComplaintApi,
        GetSolveComplaintApi,
        SolveComplaint,
        AcceptComplaint,
      }}>
      {children}
    </AdminContext.Provider>
  );
};

const Context = () => useContext(AdminContext);

export default Context;
