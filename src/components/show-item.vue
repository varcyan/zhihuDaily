<template>
  <li class="s-item">
    <a href="">
      <img src="" alt="">
    </a>
    <div class="s-info">{{item.info}}</div>
  </li>
</template>

<script>
export default {
  props: ['item'],
  name: 'showItem',
  data () {
    return {
      msg: 'varcyan'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .s-item {
    flex: 1;
    position: relative;
    width: 27rem;
    height: 16.875rem;
    background-color: #eee;
    color: #fff;
  }
  .s-item .s-info {
    position: absolute;
    bottom: .75rem;
    font-size: 1.5rem;
    padding-left: 52px;
    padding-right: 100px;
  }
</style>
