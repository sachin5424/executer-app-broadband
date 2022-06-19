import React, {createContext, useContext, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  api_url,
  getError,
  _httpGetResponse,
  _httpPostRequest,
  _httpPutRequest,
} from '../../master.service';
import {
  ACCEPTCOMPLAINTS,
  GET_PROFILE,
  NEWCOMPLAINTS,
  SOLVECOMPLAINTS,
} from '../redux/UserSlice';

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
        console.log('Enter Get GetNewComplaintApi',res.data?.length);
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
        console.log('Enter Get GetAcceptComplaintApi',res.data?.length);
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

  const AcceptComplaint = id => {
    console.log({id}, 'gfchvbj');
    _httpGetResponse(api_url.acceptComplaint, id)
      .then(res => {
        console.log('Enter Get AcceptComplaint', res);
        GetNewComplaintApi();
        GetAcceptComplaintApi();
        // dispatch(GET_PROFILE({...res?.data?.userId}));
        // getBannerApi();
      })
      .catch(err => {
        console.log({err});
        getError(err, 'Get GetNewComplaintApi');
      });
  };
  const ArriveComplaint = id => {
    console.log({id}, 'gfchvbj');
    _httpPutRequest(api_url.arriveComplaint, id)
      .then(res => {
        console.log('Enter Get ArriveComplaint', res);
        GetAcceptComplaintApi();
        // dispatch(GET_PROFILE({...res?.data?.userId}));
        // getBannerApi();
      })
      .catch(err => {
        console.log({err});
        getError(err, 'Get GetNewComplaintApi');
      });
  };
  const SolveComplaint = (id, arr, cb, ecb) => {
    let data = {otp: arr?.join('')};
    // console.log({otp,arr});
    // console.log({id},"gfchvbj");
    _httpPostRequest(`${api_url.solveComplaint}/${id}`, data)
      .then(res => {
        console.log('Enter Get SolveComplaint', res);
        // GetNewComplaintApi()
        GetAcceptComplaintApi();
        GetSolveComplaintApi();
        if (cb) cb();
        // dispatch(GET_PROFILE({...res?.data?.userId}));
        // getBannerApi();
      })
      .catch(err => {
        if (ecb) ecb();
        console.log({err});
        getError(err, 'Get GetNewComplaintApi');
      });
  };

  const Loder = cb => {
    console.log('loading');
    GetSolveComplaintApi();
    GetNewComplaintApi();
    GetAcceptComplaintApi();
    if (cb) cb();
  };

  return (
    <AdminContext.Provider
      value={{
        ProfileApi,
        GetNewComplaintApi,
        GetAcceptComplaintApi,
        GetSolveComplaintApi,
        SolveComplaint,
        ArriveComplaint,
        AcceptComplaint,
        Loder,
      }}>
      {children}
    </AdminContext.Provider>
  );
};

const Context = () => useContext(AdminContext);

export default Context;
