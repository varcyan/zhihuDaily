<template>
  <header class="head">
    <div class="hd-left fl">
       <div class="el-icon el-icon-minus"></div>
       <h3>首页</h3>
    </div>
   <div class="hd-right fr">
      <div class="el-icon el-icon-information"></div>
      <div class="el-icon el-icon-more"></div>
   </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .head, .head .hd-left, .head .hd-right {
    display: flex;
    align-items: center;
  }
  .head .hd-left, .head .hd-right {
    height: 100%;
  }
  .head {
    height: 4.1rem;
    background-color: #00a2ea;
    justify-content: space-between;
    color: #fff;
  }
  .head h3, .head .el-icon {
    line-height: 4.1rem;
  }
  .head h3 {
    font-size: 1.25rem;
    text-indent: 1.4rem;
    height: 100%;
  }
  .head .el-icon {
    font-size: 1.4rem;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    height: 100%;
  }
  .head .el-icon-minus {
    width: 1.4rem;
    font-weight: normal;
  }
  .el-icon-minus:before {
      content: "\E619
      \E619
      \E619";
      display: block;
      line-height: .5rem;
      padding-top: 1.25rem;
  }
</style>
