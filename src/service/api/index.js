import { request } from '../request/index';
const baseUrl = process.env.VUE_APP_BASE_API;

export default {
  getUser: () => {
    return request({
      method: 'GET',
      url: `${baseUrl}/v1.0/xxx/getUser`
    });
  },
  addObject: (data) => {
    return request({ method: 'POST', url: `${baseUrl}/v1.0/xxx`, data: data });
  },
  updateObject: (data) => {
    return request({ method: 'POST', url: `${baseUrl}/v1.0/xxx`, data: data });
  },
  delObject: (params) => {
    return request({
      method: 'DELETE',
      url: `${baseUrl}/v1.0/xxx`,
      params: params
    });
  },
  getxxxList: (params) => {
    return request({
      method: 'GET',
      url: `${baseUrl}/v1.0/xxx`,
      params: params
    });
  }
};
