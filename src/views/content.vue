<template>
  <section>
    <custom-show></custom-show> 
    <custom-list></custom-list>
  </section>
</template>

<script>
import Show from './content/show'
import List from './content/list'

export default {
  name: 'content',
  components:{
    'custom-show':Show,
    'custom-list':List
  },
  data () {
    return {
      msg: 'varcyan'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>
