import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface InitialState {
  value: ICompanyData;
}

const initialState: InitialState = {
  value: {
    email: "",
    id: "",
    annualRevenue: "",
    businessName: "",
    createdDate: new Date(),
    NoOfEmployees: "",
    phoneNumber: 0,
    profile: "",
    typeOfBusiness: "",
    userId: "",
  },
};

export const orgSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    rm_Org: (state) => {
      return initialState;
    },
    save_Org: (state, action: PayloadAction<Partial<ICompanyData>>) => {
      state.value = {
        ...state.value,
        ...action.payload,
      };
    },
  },
});

export const { rm_Org, save_Org } = orgSlice.actions;

export default orgSlice.reducer;
