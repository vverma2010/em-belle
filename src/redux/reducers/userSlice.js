import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    token: "",
    isLoading: false,
    isError: false,
    errorMessage: "",
    isLoggedIn: false,
  },
  reducers: {
    loginRequested(state, action) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    loginSuccessful(state, action) {
      state.isLoading = false;
      state.errorMessage = "";
      state.isError = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userData = action.payload.userData;
    },
    loginFailed(state, action) {
      state.isLoading = true;
      state.isError = true;
      state.errorMessage = action.payload.errorMessage;
    },
  },
});

export const { loginRequested, loginSuccessful, loginFailed } =
  userSlice.actions;

export const loginRequest = ({ payload }) => {
  return async (dispatch, getState) => {
    dispatch(loginRequested());
    try {
    } catch (e) {}
  };
};

export default userSlice.reducer;
