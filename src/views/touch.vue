<template>
  <div id="touch">
    <div class="title">
      <p>想要了解更多？</p>
      <p>你需要的都在这里。</p>
    </div>
    <com-contact class="contact"></com-contact>
    <com-copyright class="beian"></com-copyright>
  </div>
</template>

<script>
import comContact from '@/components/contact.vue'
import comCopyright from '@/components/copyright.vue'
export default {
  components:{
    comContact,
    comCopyright,
  }
}
</script>

<style lang="less">
#touch{
  width:90%;
  margin:0 auto;
  background: #fff;
  .title{
    width:80%;
    height:90px;
    margin:5% auto 0;
    font-size:30px;
    text-align:center;
    line-height: 40px;
    font-family: 'hanti';
  }
  .contact{
    width:100%;
    // height:auto;
    min-height: 400px;
    display: flex;
    width:100%;
    height:400px;
    padding:40px 0;
  }
  .beian{
    width:100%;
    height:100px;
  }
}

@media (max-width:500px){
  #touch{
    .title{
      font-size: 20px;
    }
    .contact{
      display:block;
      height:auto;
      min-height:unset;
      padding:10px 0;
    }
  }
  
}
</style>