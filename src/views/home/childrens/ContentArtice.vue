<template>
  <div class="content" @click="todetail">
      <ul>
          <li v-for="item in 10">
              <div class="description">
                  <h3 class="item">{{blog.title}}</h3>
                  <p class="item">{{blog.description}}</p>
              </div>
              <div class="about">
                  <img style="width:100%" src="https://tse1-mm.cn.bing.net/th/id/OIP-C.BbsuQQefhm7hnuyW7bXCAgAAAA?w=209&h=209&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="">
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            blog: {
                id:'',
                title:'vue项目',
                description: 'vue个人博客项目'
            },
            
        }
    },
    methods: {
      todetail(){
          this.$router.push({name:'blogdetail'})
      }
    }
}
</script>

<style scoped>
    ul li {
        height: 200px;
        margin-bottom: 20px;
        border-radius: 20px;
        background: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        transition: all .5s;
    }
    li:hover {
        background: #ccc;
        cursor: pointer;
    }
    .description {
        float: left;
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 100%;
        /* background: turquoise; */
    }
    .about {
        float: left;
        padding: 20px;
        width: 20%;
        overflow: hidden;
    }
    .about img {
        width: 100%;
    }
    .item {
        flex: 1;
    }
</style>