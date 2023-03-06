import { createRouter, createWebHistory } from 'vue-router';
//import App from '../App.vue';
import Main from '../Main.vue';
//import { navigateToMain } from './routerFunctions.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [    
    /*{
      path: '/',
      name: 'app',
      component: App
    },*/
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
});

//router.navigate = navigateToMain;

export default router;