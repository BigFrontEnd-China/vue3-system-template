import api from '@/service/api/index';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null
  }),
  getters: {
    getUser(state) {
      return state.userInfo;
    }
  },
  actions: {
    getInfo() {
      return new Promise((resolve, reject) => {
        api
          .getUser()
          .then((res) => {
            const data = res.data;
            if (!data) {
              reject('验证失败，请重新登录！');
            }
            this.userInfo = data;
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
  }
});
