import { persistStore } from "redux-persist";

import axios, { AxiosError, AxiosInstance } from "axios";
import { store } from "@/redux/store";
const persistor = persistStore(store);

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://server.hawkinvoice.online",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();

    const User = state.authReducer.value.AccessToken;
    console.log("this is my toke",User);
    
    // const User = JSON.parse(localStorage.getItem("AccessToken") as string);
    if (User) {
      const AccessToken = User;
      if (AccessToken) {
        config.headers["authorization"] = `Bearer ${AccessToken}`;
      }
      console.log("this is my current acess id ", AccessToken);

      const currentOrganization = state.orgReducer.value.id;

      console.log("this is my current company id ", currentOrganization);

      if (currentOrganization) {
        config.headers["currentOrganization"] = currentOrganization;
      }
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
