import axios,{AxiosInstance} from "axios"
const  axiosInstance : AxiosInstance= axios.create({
    baseURL : "https://hai.hawkinvoice.com"
  })
  
  
  export default axiosInstance