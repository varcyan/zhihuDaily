<template>
  <section class="list">
    <div class="list-class">
      <h3 class="cl-title">今日</h3>
      <ul class="cl-list">
        <custom-list-item v-for="item,index in list" :item="item"></custom-list-item>
      </ul>
    </div>
  </section>
</template>

<script>
import ListItem from './list-item'
export default {
  name: 'list',
  components: {
    'custom-list-item': ListItem
  },
  data () {
    return {
      msg: 'varcyan',
      list: [
        {
          "info": '1草莓不是红的呢！相机告诉你真相真相啊啊啊啊啊啊啊'
        },
        {
          "info": '2草莓不是红的呢！相机告诉你真相真相啊啊啊啊啊啊啊'
        },
        {
          "info": '3草莓不是红的呢！相机告诉你真相真相啊啊啊啊啊啊啊'
        },
        {
          "info": '2草莓不是红的呢！相机告诉你真相真相啊啊啊啊啊啊啊'
        },
        {
          "info": '3草莓不是红的呢！相机告诉你真相真相啊啊啊啊啊啊啊'
        },
        {
          "info": '2草莓不是红的呢！相机告诉你真相真相啊啊啊啊啊啊啊'
        },
        {
          "info": '3草莓不是红的呢！相机告诉你真相真相啊啊啊啊啊啊啊'
        },
        {
          "info": '2草莓不是红的呢！相机告诉你真相真相啊啊啊啊啊啊啊'
        },
        {
          "info": '3草莓不是红的呢！相机告诉你真相真相啊啊啊啊啊啊啊'
        },
        {
          "info": '2草莓不是红的呢！相机告诉你真相真相啊啊啊啊啊啊啊'
        },
        {
          "info": '3草莓不是红的呢！相机告诉你真相真相啊啊啊啊啊啊啊'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .list {
    background-color: #f3f3f3;
    padding: 0 .575rem 1.5rem;
  }
  .cl-title {
    font-size: .95rem;
    color: #6e6e6e;
    padding-top: 1.325rem;
    padding-bottom: 1.575rem;
    text-indent: .7rem;
  }
  .cl-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
