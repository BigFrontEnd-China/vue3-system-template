import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '@/components/MainPage.vue';

import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';
NProgress.configure({
  showSpinner: false
});

const routes = [
  { path: '/', isHidden: true, redirect: '/Home/index' },
  {
    path: '/Home',
    name: 'Home',
    component: MainPage,
    redirect: '/Home/index',
    meta: {
      icon: 'el-icon-user',
      title: '首页'
    },
    children: [
      {
        path: '/Home/index',
        name: 'HomeIndex',
        component: () => import('@/views/Home/HomeIndex.vue'),
        meta: {
          title: 'HomeIndex',
          isHidden: true
        }
      },
      {
        path: '/Home/main',
        name: 'HomeMain',
        component: () => import('@/views/Home/HomeMain.vue'),
        meta: {
          title: 'HomeMain'
        }
      }
    ]
  },
  {
    path: '/Test',
    name: 'Test',
    component: MainPage,
    redirect: '/Test/index',
    meta: {
      icon: 'el-icon-user',
      title: 'Test'
    },
    children: [
      {
        path: '/Test/index',
        name: 'TestIndex',
        component: () => import('@/views/Test/TestIndex.vue'),
        meta: {
          title: 'TestIndex'
        }
      },
      {
        path: '/Test/TestMain',
        name: 'TestMain',
        component: () => import('@/views/Test/TestMain.vue'),
        meta: {
          title: 'TestMain'
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
