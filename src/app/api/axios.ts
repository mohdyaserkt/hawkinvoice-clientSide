import axios,{AxiosInstance} from "axios"
const  axiosInstance : AxiosInstance= axios.create({
    baseURL : "helo.hawkinvoice.com"
  })
  
  
  export default axiosInstance