<template>
  <section>
    <custom-header />
    <custom-content />
  </section>
</template>

<script>
import Header from '../components/header'
import Content from '../components/content'

export default {
  name: 'index',
  components:{
    'custom-header':Header,
    'custom-content':Content
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #wrap-scroll {
    width: 27rem;
    height: 48rem;
    background-color: #f3f3f3;
  }
</style>
