import Vue from 'vue';
import Router from 'vue-router';
import detail from './detail';
Vue.use(Router);

const router = new Router({
  base: '/',
  mode: 'history',
  linkActiveClass: 'active',
  routes: detail,
});
export default router;
