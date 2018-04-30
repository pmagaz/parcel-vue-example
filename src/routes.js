import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const HomeComponent = () => import('./containers/home/home.vue');

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent,
    },
    
  ],
});