<template>
  <el-carousel :interval="2000" arrow="hover" height="450px">
    <el-carousel-item v-for="item in img" >
      <el-image :src="item.url" style="width: 100%"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    data() {
        return {
            img: [
                {
                    url:'https://img0.baidu.com/it/u=1724880235,389842664&fm=224&fmt=auto&gp=0.jpg'
                },
                {
                    url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F13%2F20160313163729_Rwktv.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637931066&t=d39e99f2fa79141677563c1fc0088d47'
                },
                {
                    url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10%2F224%2Fw640h384%2F20180929%2Fd5c5-hhuhisn5120773.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637931067&t=3bf58b842be82e1b96bc4d0bbef68e6c'
                },
                {
                    url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F1efdb5a74f1b6d22732f8f810c1eee1fa0b8675c.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637931067&t=65355cb02dcaf0fedb2add54af0121bc'
                },
            ]
        }
    },
}
</script>

<style scoped>

</style>