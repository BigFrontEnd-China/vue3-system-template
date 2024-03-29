import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from '@/store';
import ArcoVue from '@arco-design/web-vue';
import '@/styles/common.less';
import '@arco-design/web-vue/dist/arco.css';
import svgIcon from './components/svgIcons';
import api from '@/service/api/index';
import filters from './filters';

const app = createApp(App);
app.config.globalProperties.$api = api;
app.config.globalProperties.$filters = filters;
app.use(ArcoVue);
app.use(svgIcon);
app.use(pinia);
app.use(router).mount('#app');
