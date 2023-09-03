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

      const currentCompany = localStorage.getItem("currentCompany");
      console.log("this is my current company id ",currentCompany);
      

      if (currentCompany) {
        config.headers["current-company"] = currentCompany;
      }
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
