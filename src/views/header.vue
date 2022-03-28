<template>
  <div id="header">
    <com-time></com-time>
    <com-intro></com-intro>
  </div>
</template>

<script>
import comTime from '@/components/time.vue'
import comIntro from '@/components/intro.vue'
export default {
  components:{
    comTime,
    comIntro,
  },
  data(){
    return {

    }
  },
}
</script>

<style lang="less">
#header{
  background-image: linear-gradient(to right top,  #000 20%,#480048);
  height:30vh;
  color:#fff;
}
</style>