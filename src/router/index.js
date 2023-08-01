import { createRouter, createWebHistory } from 'vue-router';

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
    },
    {
      path: '/student',
      name: 'studentRegistration',
      component: () => import(/* webpackChunkName: "StudentRegistration" */ '../components/StudentRegistration.vue')
    },
  ]
});

//router.navigate = navigateToMain;

export default router;