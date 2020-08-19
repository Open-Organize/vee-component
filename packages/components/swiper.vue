<template>
  <!-- <pre>
   
       轮播图组件
       -------------------------
       功能描述：
       1.轮播的图片可配置
       2.轮播图上的按钮可配置
       3.轮播切换图片的间隔等可配置
     
  </pre>-->
  <div>
    <div  @dragend="drag" class="banner">
      <span class="left" @click="pre" v-show="imgbutton">&lt;</span>
      <img
        v-for="(item,index) in imgs"
        :key="index"
        :src="item"
        v-show="index == n"
      />
      <span class="right" @click="next" v-show="imgbutton">&gt;</span>
      <div class="circle" v-show="imgCircle">
        <ul>
          <li
            img
            v-for="(item,index) in imgs"
            :key="index"
            :class="index == n?'selected':'' "
            @click="n=index"
          >&nbsp;&nbsp;</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import xhtml from "../services/xhtml.js";
export default {
  props: {
    // 轮播图播放间隔时间
    interval: {
      type: Number,
      default: 3000,
    },
    //轮播图页面上面的按钮
    imgbutton: {
      type: Boolean,
      default: true,
    },
    //轮播图上面的圆圈展示
    imgCircle: {
      type: Boolean,
      default: true,
    },
    imgList:{
      type:Array,
      default:[
        require("../../docs/assets/images/swiper1.jpg"),
        require("../../docs/assets/images/swiper2.jpg"),
        require("../../docs/assets/images/swiper3.jpg"),
        require("../../docs/assets/images/swiper4.jpg"),
        require("../../docs/assets/images/swiper5.jpg"),
        require("../../docs/assets/images/swiper6.jpg"),
      ]
    }
  },
  data() {
    return {
      n: 0,
      imgs:this.imgList
     
    };
  },
  methods: {
    fun: function () {
      //设置定时器
      setInterval(this.play, this.interval);
    },
    // 移除定时器
    stopInterval(){
      window.clearInterval(this.play)
    },
    //展示图片
    play: function () {
      this.n++;
      if (this.n == this.imgs.length) {
        this.n = 0;
      }
    },
    //点击上一张
    pre() {
      if (this.n == 0) {
        this.n = this.imgs.length - 1;
      } else {
        this.n--;
      }
    },
    //点击下一张
    next() {
      if (this.n == this.imgs.length - 1) {
        this.n = 0;
      } else {
        this.n++;
      }
    },

    drag() {
      this.next()
    },


    
  },
  // 挂载之后执行
  mounted() {
    this.fun();
  },
};
</script>
<style scoped>
.banner > img {
  width: 500px;
  height: 200px;
}
.banner > img:hover {
  cursor: pointer;
}
.banner > span {
  width: 20px;
  height: 50px;
  background-color: rgba(229, 229, 229, 0.5);
  font-size: 29px;
  display: inline-block;
  line-height: 50px;
}
.banner > span:hover {
  cursor: pointer;
  background-color: rgba(229, 229, 229, 0.8);
}
.banner > .right {
  position: relative;
  left: -25px;
  top: -95px;
}
.banner > .left {
  position: relative;
  left: 25px;
  top: -95px;
}

.banner > .circle > ul > li {
  position: relative;
  left: 180px;
  top: -27px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 1px solid black;
  border-radius: 10px;
}

.banner > .circle > ul > li:hover {
  cursor: pointer;
}
.selected {
  background-color: #d2d2d2;
}
</style>
