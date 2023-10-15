import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface authState {
  value: {
    email: string; 
    id: string;
    isGoogle: boolean;
    password: string; 
    profile: string; 
    status: boolean; 
    verified: boolean; 
  };
}

// Define the initial state using that type
const initialState: authState = {
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
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logOut: (state) => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string | boolean>) => {
      return {
        value: {
          email: typeof action.payload === "string" ? action.payload : state.value.email,
          id: typeof action.payload === "string" ? action.payload : state.value.id,
          isGoogle: typeof action.payload === "boolean" ? action.payload : state.value.isGoogle,
          password: typeof action.payload === "string" ? action.payload : state.value.password,
          profile: typeof action.payload === "string" ? action.payload : state.value.profile,
          status: typeof action.payload === "boolean" ? action.payload : state.value.status,
          verified: typeof action.payload === "boolean" ? action.payload : state.value.verified,
        },
      };
    },
  },
});

export const { logOut, logIn } = authSlice.actions; // Fix action names

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth.value; // Adjust the selector

export default authSlice.reducer;
