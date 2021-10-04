import { Enums } from '../models/enum.defination';

const pageChildrenRoutes = [
  {
    path: '',
    name: 'page-root',
    component: () => import('../pages/DemoView.vue'),
  },
];

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/LoginView/LoginView.vue'),
    meta: {
      template: Enums.LayoutTemplate.Default,
      requiresAuth: false,
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/HomeView/HomeView.vue'),
    meta: {
      template: Enums.LayoutTemplate.Default,
      requiresAuth: false,
    },
  },
  {
    path: '/pages',
    component: () => import('../layout/AuthedLayout.vue'),
    children: pageChildrenRoutes,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/pages',
  },
];

export default routes;
