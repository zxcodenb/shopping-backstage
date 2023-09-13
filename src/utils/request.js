import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:8080/', 
 
  timeout: 5000 
})


// 请求拦截器
// request interceptor
service.interceptors.request.use(
  config => {
   

  
    return config;
  }
  
)
// 响应拦截器
// response interceptor
service.interceptors.response.use(
  
  response => {
   

    return response.data;

   
   
  }

)

export default service
