<template>
  <div id="contact">
    <div class="netchat con-item">
      <p class="con-title ">
        社交网络
      </p>
      <ul>
        <li
          v-for="(item,index) in this.netData"
          :key="index"
        >
          <a
            :href="item.url"
            target="_blank"
          >{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div class="music con-item">
      <p class="con-title">
        音悦视听
      </p>
      <div class="music-info">
        <!-- <el-image
          :src="require('../assets/images/music.jpg')"
          @click="musicPlay"
          fit="fill">
        </el-image> -->
        <div
          @click="musicPlay"
          class="music-play"
        />
        <p>也许每个骑士，都要学会等候。</p>
      </div>
      <p class="music-list">
        尽享视听：<span>Ease Music</span> | <span>QQ Music</span>
      </p>
    </div>
    <div class="wechat con-item">
      <p class="con-title">
        更多资讯
      </p>
      <div class="chat-code">
        <el-image
          style="width: 80px; height: 80px"
          :src="require('../assets/images/wecode.jpeg')"
          fit="cover"
        />
        <p>交流互动与更多资讯</p>
      </div>
      <div class="chat-code">
        <el-image
          style="width: 80px; height: 80px"
          :src="require('../assets/images/qrcode.jpg')"
          fit="cover"
        />
        <p>关注最新推送动态</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      netData:[
        {
          name:'GitHub@KinXpeng',
          url:'https://github.com/'
        },
        {
          name:'网易云@KinXpeng',
          url:'https://music.163.com/#'
        },
        {
          name:'微博@倾倾倾风_',
          url:'https://weibo.com/u/5123434857/home?wvr=5'
        },
        {
          name:'bilibili@倾倾倾风311',
          url:'https://www.bilibili.com/'
        },
        {
          name:'抖音@倾倾倾风',
          url:'#'
        },
      ]
    }
  },
  methods:{
    musicPlay:function(){
      window.open('https://music.163.com/#/song?id=238640&userid=116809620');
    },
  },
  created(){

  },
}
</script>

<style lang="less">
#contact{
   .con-item{
    width:33.3%;
    border-right:1px solid #eee;
  }
  .con-title{
    width:100%;
    height:50px;
    text-indent: 20px;
    line-height:50px;
    font-size:26px;
    font-family: 'hanti';
    cursor: default;
  }
  // 社交网络
  .netchat{
    ul{
      margin-top:40px;
    }
    li{
      width:auto;
      height:50px;
      border-bottom:1px solid #eee;
      margin:0 20px;
      line-height: 50px;
      font-size: 18px;
      font-weight:300;
      cursor: pointer;
      transition: .5s;
      a{
        color:#000;
      }
    }
    li:last-child{
      border-bottom:none;
    }
    li:hover{
      text-indent: 15px;
      box-shadow: 5px 5px 20px #ccc;;
    }
  }
  // 音悦视听
  .music{
    .music-info{
      width:100%;
      height:0;
      padding-bottom: 60.6%;
      margin-top:20px; 
      .music-play{
        width:90%;
        height:0;
        padding-bottom: 56.7%;
        margin:0 5%;
        border-radius: 5px;
        transition: .5s;
        background: url('../assets/images/music.jpg') center/cover;
        cursor: pointer;
      }
      .music-play:hover{
        box-shadow: 5px 5px 20px #ccc;
      }
      p{
        margin:10px 20px;
        color:#333;
        font-weight: 300;
        white-space: nowrap;
      }
    }
    .music-list{
      margin-left:20px;
      color:#333;
      font-weight:300;
      line-height: 60px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span{
        cursor: default;
      }
    }
  }
  // 更多资讯
  .wechat{
    border-right:none;
    .chat-code{
      width:100%;
      height:150px;
      .el-image{
        margin:10px 0 0 20px;
        border:1px solid #fff;
      }
      p{
        text-indent:20px;
        line-height:30px;
        font-weight: 300;
      }
    }
  }

  @media (max-width:500px){
    .con-item{
      width:100%;
      border-right:none;
    }
    .con-title{
      font-size: 20px;
      height:30px;
      text-align:center;
      text-indent: 0;
      line-height: 30px;
      font-family: "plantc", "Source Han Serif", serif;
    }
    .netchat{
      ul{
        margin-top:6px;
        li{
          font-size: 14px;
          height:40px;
          line-height: 40px;
          &:last-child{
            border-bottom:1px solid #eee;
            margin-bottom: 10px;
          }
        }
      }
    }
    .wechat{
      .chat-code{
        height:120px;
        text-align: center;
        .el-image{
          margin:10px auto;
          border:1px solid #fff;
        }
        p{
          text-indent:0;
        }
      }
    }
  }
}

</style>