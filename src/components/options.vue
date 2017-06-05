<template>
  <section id="options" class="active">
    <section>
      <header class="opt-header">
        <div class="opt-user">
          <div class="opt-head">
            <img src="" alt="">
          </div>
          <span class="login-info">请登录</span>
        </div>
        <div class="user-coll">
          <div class="el-icon el-icon-star-on">我的收藏</div>
          <div class="el-icon el-icon-menu">离线下载</div>
        </div>
      </header>
      <div class="opt-list">
        <div class="opt-list-item item-index" :class="data.sel==='首页'?'active': ''">首页</div>
        <div class="opt-list-item">日常心理学</div>
        <div class="opt-list-item">用户推荐日报</div>
        <div class="opt-list-item">电影日报</div>
        <div class="opt-list-item">不许无聊</div>
        <div class="opt-list-item">设计日报</div>
        <div class="opt-list-item">大公司日报</div>
        <div class="opt-list-item">财经日报</div>
        <div class="opt-list-item">互联网安全</div>
        <div class="opt-list-item">开始游戏</div>
        <div class="opt-list-item">音乐日报</div>
        <div class="opt-list-item">动漫日报</div>
        <div class="opt-list-item">体育日报</div>
      </div>
    </section>
  </section>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        data: {
          sel: '首页'
        }
      }
    },
    mounted () {
      let bsEle = document.getElementById('options')
      let scroll = new BScroll(bsEle, {
        snap: true,
        bounce: false
      })
    }
  }
</script>
<style>
  #options.active {
    animation: 1.5s optmove;
  }
  @keyframes optmove {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  #options {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    height: 100%;
    color: red; 
    z-index: 3;
    width: 22.85rem;
  }
  #options .opt-header {
    padding: .725rem 0;
    height: 6.775rem;
    background-color: #00a2ea;
    color: #fff;/*test*/
    line-height: 2.5rem;
  }
  .opt-header .opt-user {
     display: flex;
     margin-bottom: 2rem;
     padding-left: 1.2rem;
  }
  .opt-header .opt-head {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 1.25rem;
    background-color: #eee;
    margin-right: .875rem;
  }
  .opt-header .user-coll {
    display: flex;
  }
  .user-coll .el-icon {
    font-size: 1.1rem;
    color: #fff;
    margin: 0 1.75rem;
    line-height: 2.3rem;
  }
  .user-coll .el-icon::before {
    margin-right: 1.75rem;
  }
  #options .opt-list {
    color: #000;
    font-size: 1.1rem;
  }
  .opt-list .opt-list-item {
    height: 3.8rem;
    line-height: 3.8rem;
    text-indent: 1.4rem;
  }
  .opt-list .opt-list-item.active {
    background-color: #f0f0f0;
  }
  .opt-list .item-index {
    color: #00a2ea;
  }
</style>