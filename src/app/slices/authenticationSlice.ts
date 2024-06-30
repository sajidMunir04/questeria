import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "../../components/authentication/authState";
import { Root } from "postcss";
import { RootState } from "../store";

interface AuthState {
    authState : AuthenticationState
}

const initialState : AuthState = {
  authState : AuthenticationState.None
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
      state.authState = AuthenticationState.None;
    },
  },
})


export const { setToNone,setToLoginForm,setToSignupForm} = authenticationSlice.actions;
export const currentAuthenticationState = (state : RootState) => state.authState;
export default authenticationSlice.reducer;