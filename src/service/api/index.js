import { request } from '../request/index';

// 请求本地文件
function getData() {
  return request.get('./user.json');
}

export { getData };
