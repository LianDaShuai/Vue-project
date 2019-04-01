<template>
  <div class="banner">
    <div class="banner-content">
      <el-carousel trigger="click" height="100%">
        <el-carousel-item v-for="(item,index) in list" :key="index">
            <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [
        "https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide1.jpg?raw=true",
        "https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide2.jpg?raw=true",
        "https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide3.jpg?raw=true",
        "https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/slide4.jpg?raw=true"
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner,.banner-content,.el-carousel,.el-carousel-item,.el-carousel__container{
    height: 100%;
  }
  img{
    width: 100%;
    height:100%;
  }
</style>
