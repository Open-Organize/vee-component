<template>
  <ul>
    <li>
      <h2>1.组件</h2>
      <router-link to="/calendar">日历</router-link>
      <router-link to="/select">单选下拉</router-link>
      <router-link to="/swiper">轮播图片</router-link>
    </li>
    <li>
      <h2>2.指令</h2>
    </li>
    <li>
      <h2>3.过滤器</h2>
    </li>
    <li>
      <h2>4.服务</h2>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
ul {
  & > li {
    margin: 30px;
    & > h2 {
      padding: 10px 0;
      font-size: 20px;
      color: red;
    }
  }
}
</style>