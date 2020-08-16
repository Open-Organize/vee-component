import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import menu from './pages/menu.vue';

import calendar from './pages/calendar.vue';
import select from './pages/select.vue';
import swiper from './pages/swiper.vue';

export default new VueRouter({
  routes: [{
    path: '/menu',
    component: menu
  }, {
    path: "/calendar",
    component: calendar
  }, {
    path: "/select",
    component: select
  }, {
    path: "/swiper",
    component: swiper
  }, {
    path: '/*',
    redirect: '/menu'
  }]
});