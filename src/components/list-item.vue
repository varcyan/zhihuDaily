<template>
  <li class="list-item">
    <div class="l-item-info">{{data.item.title}}</div>
    <div class="l-item-img">
      <img :src="data.item.images[0]" alt="">
    </div>
  </li>
</template>

<script>

export default {
  props: ['data'],
  name: 'listItem',
  props: ['data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .list-item {
    display: flex;
    width: 23.45rem;
    height: 5.45rem;
    padding: .9rem 1.2rem 1.05rem 1.15rem;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: .35rem;
    margin-bottom: .575rem;
    box-shadow: 0 3px 3px #cfcfcf;
  }
  .list-item .l-item-info {
    width: 16.6rem;
    font-size: 1.2rem;
    color: #747474;
  }
  .list-item .l-item-img {
    width: 6.15rem;
    height: 5.4rem;
    overflow: hidden;
  }
  .l-item-img img {
    width: 100%;
  }
  .list-item:last-child {
    margin-bottom: 0;
  }
</style>
