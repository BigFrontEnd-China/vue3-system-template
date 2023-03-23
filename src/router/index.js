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
      icon: 'icon iconfont icon-cangchucangku',
      title: '首页',
      onlyShowChild: true
    },
    children: [
      {
        path: '/Home/index',
        name: 'HomeIndex',
        component: () => import('@/views/Home/HomeIndex.vue'),
        meta: {
          title: '首页',
          icon: 'icon iconfont icon-dicengjiagou'
        }
      },
      {
        path: '/Home/index/main',
        name: 'HomeMain',
        component: () => import('@/views/Home/HomeMain.vue'),
        meta: {
          title: '详情',
          icon: 'icon iconfont icon-cangchucangku',
          isActiveParent: true,
          isHidden: true
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
      icon: 'icon iconfont icon-gongchang',
      title: '测试'
    },
    children: [
      {
        path: '/Test/index',
        name: 'TestIndex',
        component: () => import('@/views/Test/TestIndex.vue'),
        meta: {
          title: '测试',
          icon: 'icon iconfont icon-jishufuwu',
          isHidden: true
        }
      },
      {
        path: '/Test/TestMain',
        name: 'TestMain',
        component: () => import('@/views/Test/TestMain.vue'),
        meta: {
          title: '测试1',
          icon: 'icon iconfont icon-dingdan'
        }
      }
    ]
  }
];
if (process.env.NODE_ENV === 'development') {
  routes.push({
    path: '/SvgView',
    name: 'SvgView',
    meta: {
      title: 'SvgView',
      onlyShowChild: true,
      isHidden: true
    },
    component: () => import('@/views/SvgView/index.vue')
  });
}
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
