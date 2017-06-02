<template>
  <section class="content">
    <custom-show></custom-show> 
    <custom-list></custom-list>
  </section>
</template>

<script>
import Show from './show'
import List from './list'

export default {
  name: 'content',
  components:{
    'custom-show':Show,
    'custom-list':List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .content {
    padding-top: 4.1rem;
  }
</style>
