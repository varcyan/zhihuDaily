<template>
  <section class="content">
    <custom-show :item="msg"></custom-show> 
    <custom-artical></custom-artical>
  </section>
</template>

<script>
import Show from './show-item'
import Artical from './artical'

export default {
  name: 'content',
  components:{
    'custom-show':Show,
    'custom-artical':Artical
  },
  data(){
    return {
      msg: {
        info : 'DETAIL show show show~'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>
