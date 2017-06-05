<template>
  <section class="detail">
    <custom-header />
    <section id="wrap-scroll-d">
      <custom-content />
    </section>
    
  </section>
</template>

<script>
import Header from '../components/header-detail'
import Content from '../components/content-detail'
import BScroll from 'better-scroll'


export default {
  name: 'index',
  components:{
    'custom-header':Header,
    'custom-content':Content
  },
  data () {
    return {
      msg: 'varcyan'
    }
  },
  mounted () {
    let scroll = new BScroll(document.getElementById('wrap-scroll-d'),{
      snap: true
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #wrap-scroll-d {
    height: 48rem;
    background-color: #f9f9f9;
  }
</style>
