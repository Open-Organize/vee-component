<template>
  <div>

    <h2>日历组件</h2>
    <vee-calendar></vee-calendar>

  </div>
</template>
<script>
import Vue from "vue";
import { veeCalendar } from "vee-component";

Vue.use(veeCalendar);
</script>