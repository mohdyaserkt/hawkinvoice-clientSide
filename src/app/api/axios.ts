import axios,{AxiosError, AxiosInstance} from "axios"
const  axiosInstance : AxiosInstance= axios.create({
    baseURL : "https://hai.hawkinvoice.com"
  })

  axiosInstance.interceptors.request.use(
    (config) => {
        const User =JSON.parse(localStorage.getItem("user") as string )
        if(User) {
        const AccessToken =User.AccessToken
        console.log(AccessToken);
        if(AccessToken){
            config.headers["Authorization"] = `Bearer ${AccessToken}`;
        }
    }
    
    
     return config
    },
    (error:AxiosError)=>{
        return Promise.reject(error)
    }
);

export { axiosInstance };
  
  
  export default axiosInstance