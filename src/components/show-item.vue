<template>
  <div class="s-item">
    <a href="">
      <img :src="data.image" alt="">
    </a>
    <div class="s-info">{{data.title}}</div>
  </div>
</template>

<script>
export default {
  props: ['data'],
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
    position: relative;
    width: 27rem;
    height: 100%;
    color: #fff;
    overflow: hidden;
  }
  .s-item img {
    width: 100%;
  }
  .s-item .s-info {
    position: absolute;
    bottom: .75rem;
    font-size: 1.5rem;
    padding-left: 52px;
    padding-right: 100px;
  }
</style>
