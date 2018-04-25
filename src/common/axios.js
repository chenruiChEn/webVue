import axios from 'axios'
import store from '../store/index'
import { Message } from 'element-ui';
import {teacherUrl ,orgUrl} from './config.js'
//连接超时时间
axios.defaults.timeout = 5000;






const webRequest = function (config) {
      let obj = {
        url:config.url,
        method:config.method?config.method:'GET',
        // transformRequest:function (data) {return data}, //在发送请求之前对数据进行处理
        transformResponse:config.dataFilter?config.dataFilter:'',//允许在 then / catch之前对响应数据进行更改
        params:config.params,
        responseType: config.responseType?config.responseType:'json',
      }

      axios(obj).then(res=>{
        console.log(res);
        if(res.data.code == 0 ){

        }
      }).catch(res=>{

      })

}


//POST传参序列化
axios.interceptors.request.use((config) => {
    axios.defaults.headers = {
      "version":"v1.0",
      "equipType":"web",
      "equipId":"007",
      "Accept-Language":store.state.lang==='cn'?'zh-CN':'en-US',  //  zh-CN ,en-US
      "token":store.state.token
    }
    if(NODE_ENV==="production"){
      axios.defaults.baseURL =store.state.proType === 'teacher'?teacherUrl:orgUrl;
    }
  if(config.method.toLocaleUpperCase()  === 'POST'){
    config.data = JSON.stringify(config.params);
  }else if(config.method.toLocaleUpperCase()  === 'GET'){
    config.params = config.params
  }
  return config;
},(error) =>{
  return Promise.reject(error);
});


//code状态码200判断
axios.interceptors.response.use((res) =>{
  if(res.data.code != '200'){
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  return Promise.reject(error);
});



module.exports = {
  webRequest
};
