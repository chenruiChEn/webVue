import {webRequest} from './axios'

const getdata = function (obj) {
  let config = {
    url:'/fsdf',
    method:'GET',
    params:obj,
  }
  return webRequest(config)
}

module.exports ={

}
