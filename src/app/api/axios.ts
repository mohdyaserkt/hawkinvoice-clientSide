import { persistStore } from "redux-persist";

import axios, { AxiosError, AxiosInstance } from "axios";
import { store } from "@/redux/store";
const persistor = persistStore(store);
const state = store.getState();

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://server.hawkinvoice.online",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const User = state.authReducer.value.AccessToken;
    if (User) {
      const AccessToken = User;
      if (AccessToken) {
        config.headers["Authorization"] = `Bearer ${AccessToken}`;
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
