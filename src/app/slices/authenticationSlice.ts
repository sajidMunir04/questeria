import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "../../components/authentication/authState";
import { Root } from "postcss";
import { RootState } from "../store";

export interface AuthState {
    authState : AuthenticationState
}

const initialState : AuthState = {
  authState : AuthenticationState.NotAuthorized
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers :{
    setToLoginForm: (state) => {
      state.authState = AuthenticationState.LoginForm;
    },
    setToSignupForm: (state) => {
      state.authState = AuthenticationState.SignUpForm;
    },
    setToNone: (state) => {
      state.authState = AuthenticationState.NotAuthorized;
    },
  },
})


export const { setToNone,setToLoginForm,setToSignupForm} = authenticationSlice.actions;
export const currentAuthenticationState = (state : RootState) => state.authenticationState;
export default authenticationSlice.reducer;