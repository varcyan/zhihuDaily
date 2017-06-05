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
      // DOM 渲染完成后执行 better scroll
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
  #wrap-scroll {
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
  }
  .content {
    padding-top: 4.1rem;
  }
</style>
