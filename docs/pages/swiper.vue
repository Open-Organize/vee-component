<template>
  <div>
    <h2>轮播组件</h2>
    <vee-swiper :interval="time" :imgbutton="imgbutton" :imgCircle="imgCircle"  :imgList="imgList"></vee-swiper>
  </div>
</template>
<script>
import Vue from "vue";
import { veeSwiper } from "vee-component";

Vue.use(veeSwiper);
export default {

  data(){

    return{
      //轮播时间
      time:5000,
      //是否展示图片上的按钮
      imgbutton:true,
      //是否展示图片上的圆点
      imgCircle:false,
      //展示的图片
      imgList:["http://bpic.588ku.com/back_list_pic/20/07/17/b238115c380c72afe738e7f379f3906c.jpg!/fw/640/quality/90/unsharp/true/compress/true",
               "http://bpic.588ku.com/back_pic/05/94/55/325d38732f170b8.jpg!/fw/576/quality/90/unsharp/true/compress/true",
               "http://bpic.588ku.com/back_list_pic/20/07/25/7ad06796ba0a5a92680fb0870fbc838d.jpg!/fw/640/quality/90/unsharp/true/compress/true",
               "http://bpic.588ku.com/back_pic/05/94/91/025d3ea94b629a8.jpg!/fw/769.02536715621/quality/90/unsharp/true/compress/true",
               "http://bpic.588ku.com/back_pic/05/95/51/435d649e5e6a8d8.jpg!/fw/576/quality/90/unsharp/true/compress/true",
               "http://bpic.588ku.com/back_list_pic/20/05/20/e7b42e7bdfff1501dd7dc4d34cecf508.jpg!/fw/720/quality/90/unsharp/true/compress/true"
      ]

    }
  }
};
</script>