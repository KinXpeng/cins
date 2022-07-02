<template>
  <div id="time">
    <div class="date">
      <p class="last-date" ref="lastDate">Last Time&nbsp;<span class="time"></span></p>
      <p class="last-date" ref="nowDate">Now&nbsp;<span class="time now-time"></span></p>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  
  data(){
    return {

    }
  },
  methods:{
    ...mapMutations({
      getDate:'getDate',
    }),
    // 获取时间
    getDate(){
      let date = new Date(),
          Y = date.getFullYear() + '-',
          M = this.formatDate(date.getMonth()+1) + '-',
          D = this.formatDate(date.getDate()) + ' ',
          h = this.formatDate(date.getHours()) + ':',
          m = this.formatDate(date.getMinutes()) + ':',
          s = this.formatDate(date.getSeconds()); 
      return Y+M+D+h+m+s;
    },
    // 日期格式化
    formatDate(n){
     return n<10?'0'+n:n;
    },
    // 设置cookie
    setCookie(cname,cvalue,exdays){
      let d = new Date();
      d.setTime(d.getTime()+(exdays*24*60*60*1000));
      let expires = "expires="+d.toGMTString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    getCookie(cname){
      let name = cname + "=";
      let ca = document.cookie.split(';');
      for(let i=0; i<ca.length; i++){
        let c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
      }
      return "";
    },
    checkCookie(){
      let time=this.getCookie("lastTime");
      let lastTime = this.$refs.lastDate.children[0];
      if (time!=""){
        lastTime.innerHTML = time;
      }else {
        time = this.getDate();
        if (time!="" && time!=null){
          this.setCookie("lastTime",time,365);
          this.$refs.lastDate.innerHTML = '欢迎访问！';
        }
      }
    },
    beforeunloadHandler(e) {
      e = e || window.event;
      if (e) {
        this.setCookie("lastTime",this.getDate(),365);
        e.returnValue = "您是否确认离开此页面";
      }
      this.setCookie("lastTime",this.getDate(),365);
      return "您是否确认离开此页面";
    },
  },
  mounted(){
    this.getDate();
    let nowTime = this.$refs.nowDate.children[0];
    let lastDate = this.$refs.lastDate;
    // 检查cookie
    this.checkCookie();
    window.addEventListener("beforeunload", e => {
      this.beforeunloadHandler(e);
    });
    let This = this;
    setInterval(function(){
      nowTime.innerHTML = This.getDate();
    },1000)
    setTimeout(function(){
      lastDate.style.width = '0';
    },5000);
    setTimeout(function(){
      lastDate.style.lineHeight = '0';
      lastDate.style.height = '0';
      This.$refs.nowDate.style.marginTop = '-15px';
    },7000);
  },
  destroyed(){
    //this.setCookie("lastTime",this.getDate(),365);
    window.removeEventListener("beforeunload", e => {
      this.beforeunloadHandler(e);
    });
  },
}
</script>

<style lang="less">
#time{
  .date{
    width:75%;
    height:auto;
   // border:1px solid red;
    font-size: 40px;
    //padding-top:20px;
    padding:30px 0 10px;
    margin:0 auto;
    text-align: center;
    .last-date{
      overflow: hidden;
      //line-height: 25px;
      text-indent: 20px;
      line-height:40px;
      font-weight: 300;
      transition: 2s;
      .time{
        font-weight:normal;
        background-image: linear-gradient(to right, #f3cd13, #f35858, #6c6ae2,#f3cd13, #f35858,#dd5e89, #f7bb97,#4cb8c4, #3cd3ad,#4776e6, #8e54e9,#c04848, #480048);
        background-clip:text;
        color:transparent;
      }
      .now-time{
        background-image: linear-gradient(to right, #4776e6, #8e54e9, #6c6ae2,#f3cd13, #f35858,#dd5e89, #f7bb97,#4cb8c4, #3cd3ad,#4776e6, #8e54e9,#c04848, #480048);
      }
    }
    .last-date:nth-child(1){
      //width:300px;
      overflow: hidden;
      width:100%;
      //height:25px;
      height:40px;
      margin-bottom:10px;
    }
  }
  @media (max-width:500px){
    .date{
      text-align: center;
      font-size: 20px;
      padding:10px 0;
      .last-date:nth-child(1){
        width:100%;
        // max-height:80px;
      }
    }
  }
}
</style>