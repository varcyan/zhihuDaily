<template>
  <section id="wrap-scroll">
    <section class="content">
      <custom-show :data="data.top_stories"></custom-show> 
      <custom-list :data="data.stories"></custom-list>
    </section>
  </section>
</template>

<script>
import Show from './show'
import List from './list'
import BScroll from 'better-scroll'


export default {
  name: 'content',
  components:{
    'custom-show':Show,
    'custom-list':List
  },
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.$http.get('/news/latest')
    .then((res)=>{
      this.data = res.data
      // console.log(JSON.stringify(data.data));
      console.log(res.data);

      this.$nextTick(()=>{
        console.log('更新');
        let contScroll = document.getElementById('wrap-scroll')
        let scroll = new BScroll(contScroll,{
          snap: true
        })
      })
    })
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .content {
    padding-top: 4.1rem;
  }
</style>
