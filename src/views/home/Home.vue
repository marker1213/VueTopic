<template>
  <div class="home w">

    <transition name="animate__animated animate__bounce" 
    enter-active-class="animate__fadeIn"
       leave-active-class="animate__fadeOut">
    <!-- 遮罩层 -->
    <div class="mask" v-show="$store.state.loginView.loginShow"></div>
    </transition>

    <el-row :gutter="20">
      <!-- 首页左边部分 -->
      <el-col :span="18">
        <slide class="slide"></slide>
        <hot-article class="hot-article"></hot-article>
        </el-col>

      <el-col :span="6">
        <user-message></user-message>
        <h2>{{$store.state.userState}}</h2>
        <guess-your-like></guess-your-like>
        <topic></topic>
      </el-col>
    </el-row>

    <transition 
     name="animate__animated animate__bounce"
      enter-active-class="animate__fadeIn"
       leave-active-class="animate__bounceOutUp">
      <login v-show="$store.state.loginView.loginShow"></login>
    </transition>

    <pagination class="pageination"></pagination>
    
  </div>
</template>

<script>
//引入动画库
import 'animate.css'

import Login from '../../components/content/Login.vue';
import HotArticle from './childrens/HotArticle.vue';
import Slide from "./childrens/Slide.vue";
import UserMessage from './childrens/UserMessage.vue';
import GuessYourLike from './childrens/GuessYourLike.vue';
import Pagination from '../../components/common/Pagination.vue';
import Topic from './childrens/Topic.vue';

export default {
  name: "Home",
  components: {
    Slide,
    UserMessage,
    HotArticle,
    Login,
    GuessYourLike,
    Pagination,
    Topic,
  },
  data() {
    return {
      article: {
        upload: {page:'',list:[]},
        browse: {page:'',list:[]},
        like:{page:'',list:[]}
      },
      isShow: false
    }
  },
};
</script>

<style scoped>
.home {
  position: relative;
}
.mask {
  position: absolute;
  background: rgba(0, 0, 0, .5);
  top: -50px;
  left: -170px;
  width: 1700px;
  height: 100%;
  z-index: 111;
  overflow: -moz-scrollbars-none;
}


.slide {
  margin-top: 40px;
  border-radius: 10px;
}
.hot-article {
  margin-top: 20px;
}

.pageination {
  text-align: center;
}
</style>
