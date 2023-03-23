/**
 *@Description:描述
 *@Author: Jackson
 *@CreateTime: 2023年03月23日 15:43:50
 *@UpdateTime:
 **/

import svgIcon from './svgIcon.vue';

const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context('./src', false, /\.svg$/);

requireAll(req);

const install = (Vue) => {
  Vue.component('SvgIcon', svgIcon);
};

export default install;
