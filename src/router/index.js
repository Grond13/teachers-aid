import { createRouter, createWebHistory } from 'vue-router';
import Initial from '../components/Initial.vue';
import Main from '../components/Main.vue';
//import { navigateToMain } from './routerFunctions.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'initial',
      component: () => import(/* webpackChunkName: "initial" */ '../components/Initial.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import(/* webpackChunkName: "main" */ '../components/Main.vue')
    },
    {
      path: '/classroom',
      name: 'classroom',
      component: () => import(/* webpackChunkName: "ClassRoomDesigner" */ '../components/ClassroomDesigner.vue')
    },
    {
      path: '/session',
      name: 'session',
      component: () => import(/* webpackChunkName: "TeachingSession" */ '../components/TeachingSession.vue')
    }
  ]
});

//router.navigate = navigateToMain;

export default router;