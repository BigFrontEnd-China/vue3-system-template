import { httpXhr } from '../xhr/index';

// 请求本地文件
function getData() {
  return httpXhr.get('./test.json');
}

export { getData };
