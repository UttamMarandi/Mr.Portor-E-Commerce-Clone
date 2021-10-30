import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching(true);
    },
    loginSuccess: (state, action) => {
      state.isFetching(false); //we will carry a fetch request. after fetching we set isFetching to false
      state.currentUser(action.payload); //our user becomes the action.payload, action.payload is the res that we received from fetch
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const { loginStart, loginFailure, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
