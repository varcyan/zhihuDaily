<template>
  <header class="head">
    <div class="hd-left fl">
      <div class="el-icon el-icon-minus"></div>
      <h3>首页</h3>
    </div>
    <div class="hd-right fr">
      <div class="el-icon el-icon-information"></div>
      <div class="el-icon el-icon-more">
        <Actionsheet :actions="actions" v-model="sheetVisible" cancelText="" closeOnClickModal="true"></Actionsheet>
      </div>
    </div>
  </header>
</template>

<script>
import { Actionsheet } from 'mint-ui'
export default {
  name: 'header',
  components: {
    Actionsheet
  },
  data() {
    return {
      sheetVisible: false,
      actions: [
        {
          name: '夜间模式',
          method: () => {
            this.actions[0].name = !this.$store.state.nightStyle ? '日间模式' : '夜间模式'
            this.$store.state.nightStyle = !this.$store.state.nightStyle
          }
        },
        {
          name: '设置选项'
        }
      ]
    }
  }
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
 \E619 \E619";
 display: block;
  line-height: .5rem;
  padding-top: 1.25rem;
}

.head .el-icon-more {
  position: relative;
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

.mint-actionsheet,
.mint-actionsheet-list {
  
}

.mint-actionsheet {
  position: absolute;
  top: .75rem;
  left: -4.5rem;
  width: 14.7rem;
  height: 7.05rem;
  background-color: #fff;
  border-radius: .15rem;
  overflow: hidden;
}
.mint-actionsheet-list {

}

.mint-actionsheet-listitem {
  font-size: 1.1rem;
  line-height: 2rem;
  height: 3.5rem;
  line-height: 3.5rem;
  color: #000;
  text-indent: 1.2rem;
  text-align: left;
}

</style>
