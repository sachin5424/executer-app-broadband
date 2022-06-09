import {createSlice} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'user',

  initialState: {
    userToken: null,
    newComplainData: [],
    acceptComplainData: [],
    solveComplainData: [],
    profileData: {}
  },

  reducers: {
    USERTOKEN: (state, action) => {
      state.userToken = action.payload.userToken;
    },
    NEWCOMPLAINTS: (state, action) => {
      state.newComplainData = action.payload;
    },
    ACCEPTCOMPLAINTS: (state, action) => {
      state.acceptComplainData = action.payload;
    },
    SOLVECOMPLAINTS: (state, action) => {
      state.solveComplainData = action.payload;
    },
    GET_PROFILE: (state, action) => {
      state.profileData = action.payload;
    },
  },
});

export const {USERTOKEN, NEWCOMPLAINTS, ACCEPTCOMPLAINTS, GET_PROFILE, SOLVECOMPLAINTS} =
  UserSlice.actions;

// Selector
export const selectUserToken = state => state.user.userToken;
export const selectNewComplainData = state => state.user.newComplainData;
export const selectAcceptComplainData = state => state.user.acceptComplainData;
export const selectSolveComplainData = state => state.user.solveComplainData;
export const selectProfile = state => state.user.profileData;

export default UserSlice.reducer;
