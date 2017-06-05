<template>
  <section id="wrap">
    <custom-header />
    <custom-content />
    <options></options>
  </section>
</template>

<script>
import Header from '../components/header'
import Content from '../components/content'
import Options from '../components/options'

export default {
  name: 'index',
  components:{
    'custom-header':Header,
    'custom-content':Content,
    Options
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #wrap {
    height: 100%;
  }
</style>
