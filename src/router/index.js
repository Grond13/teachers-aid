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
      component: Initial
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
});

//router.navigate = navigateToMain;

export default router;