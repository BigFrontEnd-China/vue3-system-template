/**
 *@Description:描述
 *@Author: Jackson
 *@CreateTime: 2023年03月13日 09:52:50
 *@UpdateTime:
 **/

import axios from 'axios';
// import qs from 'qs';
import { getToken } from '@/tools/cache';
//服务请求公共配置
const request = axios.create({
  baseURL: '',
  timeout: 5000,
  withCredentials: true
});
// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token !== null) {
      config.headers['token'] = token; // 请求头携带 token
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (res) => {
    if (res.data.code === 401) {
      //TODO跳转到登录
    } else {
      let data = res.data;
      // 处理自己的业务逻辑，比如判断 token 是否过期等等
      // 代码块
      // blob类型返回res
      if (data instanceof Blob) return res;
      else return data;
    }
  },
  (error) => {
    let message = '';
    if (error && error.response) {
      switch (error.response.status) {
        case 302:
          message = '接口重定向了！';
          break;
        case 400:
          message = '参数不正确！';
          break;
        case 401:
          //TODO跳转到登录
          message = '您未登录，或者登录已经超时，请先登录！';
          break;
        case 403:
          message = '您没有权限操作！';
          break;
        case 404:
          message = `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          message = '请求超时！';
          break;
        case 409:
          message = '系统已存在相同数据！';
          break;
        case 500:
          message = '服务器内部错误！';
          break;
        case 501:
          message = '服务未实现！';
          break;
        case 502:
          message = '网关错误！';
          break;
        case 503:
          message = '服务不可用！';
          break;
        case 504:
          message = '服务暂时无法访问，请稍后再试！';
          break;
        case 505:
          message = 'HTTP 版本不受支持！';
          break;
        default:
          message = '异常问题，请联系管理员！';
          break;
      }
    }
    return Promise.reject(message);
  }
);

const CancelToken = axios.CancelToken;
export { request, CancelToken };
