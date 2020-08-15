import calendar from './components/calendar.vue';
import select from './components/select.vue';
import swiper from './components/swiper.vue';

let veeCalendar = { install: Vue => { Vue.component('veeCalendar', calendar) } };
let veeSelect = { install: Vue => { Vue.component('veeSelect', select) } };
let veeSwiper = { install: Vue => { Vue.component('veeSwiper', swiper) } };

export {

  /**
   * 组件部分
   */

  veeCalendar,
  veeSelect,
  veeSwiper

  /**
   * 指令部分
   */

  /**
   * 过滤器部分
   */

  /**
   * 服务部分
   */

};