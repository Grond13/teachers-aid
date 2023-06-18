import { createRouter, createWebHistory } from 'vue-router';
import Initial from '../components/Initial.vue';
import Main from '../Main.vue';
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
      component: () => import(/* webpackChunkName: "main" */ '../Main.vue')
    },
    {
      path: '/classroom',
      name: 'classroom',
      component: () => import(/* webpackChunkName: "ClassRoomDesigner" */ '../components/ClassroomDesigner.vue')
    },
  ]
});

//router.navigate = navigateToMain;

export default router;