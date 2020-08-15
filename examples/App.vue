<template>
  <div>

    <vee-calendar></vee-calendar>

    <hr />

    <vee-select></vee-select>

    <hr />

    <vee-swiper></vee-swiper>

  </div>
</template>
<script>
import Vue from "vue";

import { veeCalendar, veeSelect, veeSwiper } from "vee-component";

Vue.use(veeCalendar);
Vue.use(veeSelect);
Vue.use(veeSwiper);

export default {};
</script>