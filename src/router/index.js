import { createRouter, createWebHistory } from 'vue-router';
import Initial from '../views/InitialView.vue';
import Main from '../Main.vue';
//import { navigateToMain } from './routerFunctions.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'initial',
      component: () => import(/* webpackChunkName: "initial" */ '../views/InitialView.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import(/* webpackChunkName: "main" */ '../Main.vue')
    }
  ]
});

//router.navigate = navigateToMain;

export default router;