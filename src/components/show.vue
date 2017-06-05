<template>
    <swipe :auto="4000" class="s-wrap clearfix">
      <swipe-item v-for="item in data" :key="item.id">
        <custom-show-item :data="item"></custom-show-item>
      </swipe-item>  
    </swipe>
</template>

<script>
import ShowItem from './show-item'
import {Swipe, SwipeItem} from 'mint-ui'
export default {
  props: ['data'],
  name: 'show',
  components: {
    Swipe,
    SwipeItem,
    'custom-show-item': ShowItem
  },
  data () {
    return {
      msg: 'varcyan',
      items: [
        {
          img: '第一张图片',
          info: '1.美国电影赚劳动人民的钱，法国电影赚艺术人士的钱，看看戛纳你就懂了'
        },
        {
          img: '第二张图片',
          info: '2.美国电影赚劳动人民的钱，法国电影赚艺术人士的钱，看看戛纳你就懂了'
        },
        {
          img: '第三张图片',
          info: '3.美国电影赚劳动人民的钱，法国电影赚艺术人士的钱，看看戛纳你就懂了'
        },
        {
          img: '第四张图片',
          info: '4.美国电影赚劳动人民的钱，法国电影赚艺术人士的钱，看看戛纳你就懂了'
        },
        {
          img: '第五张图片',
          info: '5.美国电影赚劳动人民的钱，法国电影赚艺术人士的钱，看看戛纳你就懂了'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .s-wrap {
    width: 135rem;
    height: 16.875rem;
    overflow: hidden;
    position: relative;
  }
  .mint-swipe-items-wrap {
    height: 16.875rem;
    overflow: hidden;
  }
  .mint-swipe-item {
    position: absolute;
    left: 0;
    top: 0;
    width: 27rem;
    height: 16.875rem;
    background-color: #eee;
    color: #fff;
    display: none;
  }
  .mint-swipe-item.is-active {
    display: block;
  }
  .mint-swipe-indicators {
    position: absolute;
    bottom: .5rem;
    display: flex;
    width: 27rem;
    justify-content: center;
  }
  .mint-swipe-indicators div {
    width: .65rem;
    height: .65rem;
    margin: .25rem;
    border-radius: .7rem;
    background-color: rgba(255,255,255,.4);
  }
  .mint-swipe-indicators div.is-active {
    background-color: rgba(255,255,255,1);
  }
</style>
