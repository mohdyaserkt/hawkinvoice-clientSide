import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state

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
  
   value:authState

}

// Define the initial state using that type
const initialState = {
  value: {
    email: "",
    id: "",
    isGoogle: false,
    password: "",
    profile: "",
    status: true,
    verified: true,
  } as authState,
} as InitialState;

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    logOut: (state) => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string|boolean>) => {
      return {
        value: {
            email: action.payload,
            id: action.payload,
            isGoogle: action.payload,
            password: action.payload,
            profile: action.payload,
            status: action.payload,
            verified: action.payload,
        } as unknown as authState,
      };
    },
  },
});

export const { logOut, logIn } = authSlice.actions; // Fix action names

// Other code such as selectors can use the imported `RootState` type
// export const selectAuth = (state: RootState) => state.auth.value; // Adjust the selector

export default authSlice.reducer;
