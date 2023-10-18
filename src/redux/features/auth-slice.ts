import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface authState {
  email: string;
  id: string;
  isGoogle: boolean;
  password: string;
  profile: string;
  status: boolean;
  verified: boolean;
}

export interface InitialState {
  value: authState;
}

const initialState: InitialState = {
  value: {
    email: "",
    id: "",
    isGoogle: false,
    password: "",
    profile: "",
    status: true,
    verified: true,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<Partial<authState>>) => {
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
  },
});

export const { logOut, logIn } = authSlice.actions;

export default authSlice.reducer;
