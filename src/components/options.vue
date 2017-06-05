<template>
  <section id="options">
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
      
    </div>
  </section>
</template>
<script>

</script>
<style>
  #options {
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
    color: #fff;
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
</style>