import api from '@/service/api/index';

const state = {
  userInfo: null
};

const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo;
  }
};

const actions = {
  // get user info
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .getUser()
        .then((res) => {
          const data = res.data;
          if (!data) {
            reject('验证失败，请重新登录！');
          }
          commit('SET_USERINFO', data);
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
