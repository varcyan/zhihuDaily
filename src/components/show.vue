<template>
  <div class="show">
    <div class="s-wrap clearfix">
      <custom-show-item v-for="item,index in items" :item="item"></custom-show-item>
    </div>
  </div>
</template>

<script>
import ShowItem from './show-item'
export default {
  name: 'show',
  components: {
    'custom-show-item': ShowItem
  },
  data () {
    return {
      msg: 'varcyan',
      items: [
        {
          img: '第一张图片',
          info: '1美国电影赚劳动人民的钱，法国电影赚艺术人士的钱，看看戛纳你就懂了'
        },
        {
          img: '第二张图片',
          info: '2美国电影赚劳动人民的钱，法国电影赚艺术人士的钱，看看戛纳你就懂了'
        },
        {
          img: '第三张图片',
          info: '3美国电影赚劳动人民的钱，法国电影赚艺术人士的钱，看看戛纳你就懂了'
        },
        {
          img: '第四张图片',
          info: '4美国电影赚劳动人民的钱，法国电影赚艺术人士的钱，看看戛纳你就懂了'
        },
        {
          img: '第五张图片',
          info: '5美国电影赚劳动人民的钱，法国电影赚艺术人士的钱，看看戛纳你就懂了'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .s-wrap {
    display: flex;
    width: 135rem;
  }
</style>
