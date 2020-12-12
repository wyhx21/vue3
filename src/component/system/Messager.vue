<template>
  <div class="app-messager">
    <div class="app-data-item" v-for="item of msgList" :key="item.id">
      <h4>{{item.title}}</h4>
      <p>{{item.msg}}<span class="app-link" @click="toPage(item['link'])" v-if="item['link']">点击跳转>></span></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msgList: [
        {id: 1,title: '标题1', msg: '内容1',link:'/link/aaa'},
        {id: 2,title: '标题2', msg: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2容2内容2内容2内容2内容2内容2内容2内容2内容2内容2容2内容2内容2内容2'},
        {id: 3,title: '标题3', msg: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2'},
        {id: 4,title: '标题4', msg: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2容2内容2内容2内容2内容2内容2内容2内容2内容2内容2容2内容2内容2内容2内容2',link:'/link/aaa'},
        {id: 5,title: '标题5', msg: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2容2内容2内容2内容2内容2内容2'}
      ]
    }
  },
  methods: {
    toPage(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
  @import '@style/component/system/messager.scss';
</style>