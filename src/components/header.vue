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
  name: 'header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
