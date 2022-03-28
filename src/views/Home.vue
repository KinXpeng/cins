<template>
  <div id="home">
    <!-- <header-page></header-page> -->
    <blog-page ></blog-page>
    <touch-page></touch-page>
  </div>
</template>

<script>
import blogPage from '@/views/blog'
// import headerPage from '@/views/header'
import touchPage from '@/views/touch'
export default {
  name: 'Home',
  data(){
    return {
      
    }
  },
  components: {
    blogPage,
    // headerPage,
    touchPage,
  },
  methods:{
    
  },
  mounted () {
    
  },
}
</script>
<style lang="less">
#home{
  min-width: 700px;
}
@media (max-width:500px){
  #home{
    min-width: unset;
  }
}
</style>
