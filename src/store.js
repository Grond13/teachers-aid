import { createApp } from 'vue';
const Vue = createApp({});

import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    editedClass: null,
    idLesson: null,
    idLessonTime: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setIdLessonAndTime(state, { idLesson, idLessonTime }) {
      state.idLesson = idLesson;
      state.idLessonTime = idLessonTime;
    }
  },
  actions: {
    saveToken({ commit }, token) {
      commit('setToken', token);
    },
    updateIdLessonAndTime({ commit }, { idLesson, idLessonTime }) {
      commit('setIdLessonAndTime', { idLesson, idLessonTime });
    },
  },
  getters: {
    getToken: state => state.token,
    getIdLesson: state => state.idLesson,
    getIdLessonTime: state => state.idLessonTime,
  }
});
