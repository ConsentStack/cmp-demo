import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage';
import DemoPage from '../components/DemoPage';
import StagingPage from '../components/StagingPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/demo',
      name: 'Demo',
      component: DemoPage,
    },
    {
      path: '/staging',
      name: 'Staging',
      component: StagingPage,
    }
  ]
});
