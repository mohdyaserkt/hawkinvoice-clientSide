import axios, { AxiosError, AxiosInstance } from "axios";
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://hai.hawkinvoice.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const User = JSON.parse(localStorage.getItem("AccessToken") as string);
    if (User) {
      const AccessToken = User;
      if (AccessToken) {
        config.headers["Authorization"] = `Bearer ${AccessToken}`;
      }
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
