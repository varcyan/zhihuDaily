<template>
  <header class="head">
    <div class="hd-left fl">
       <div class="el-icon el-icon-minus"></div>
       <h3>首页</h3>
    </div>
   <div class="hd-right fr">
      <div class="el-icon el-icon-information"></div>
      <div class="el-icon el-icon-more">
        <div class="view-type">
            <div>日间模式</div>
            <div>夜间模式</div>
        </div>
      </div>
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
  .view-type {
    width: 12rem;
    display: none;
    position: absolute;
    right: .5rem;
    top: 1.2rem;
    background-color: #fff;
    box-shadow: 0 3px 3px #eee;
    border-radius: .2rem;
    padding: .4rem 0;
  }
  .view-type div {
    line-height: 1.5rem;
    font-size: 1.1rem;
    padding: .4rem 1.4rem;
    color: #333;
  }
</style>
