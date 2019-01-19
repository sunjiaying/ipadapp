import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    component: () => import('./view/Home'),
    meta: {
      title: '首页',
      requiresAuth: true,
      keepAlive: true
    }
  },
  {
    name: 'page1',
    component: () => import('./view/Page1'),
    meta: {
      title: 'Page1',
      requiresAuth: true,
      keepAlive: true
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

export { router };
