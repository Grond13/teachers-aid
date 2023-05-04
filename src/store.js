import { createApp } from 'vue';
const Vue = createApp({});

import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    saveToken({ commit }, token) {
      commit('setToken', token);
    }
  },
  getters: {
    getToken: state => {
      return state.token;
    }
  }
});
