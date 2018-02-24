<template>
  <div id="app">
    <Header :head="head"/>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from './components/header/header';
  export default {
    name: 'app',
    data() {
      return {
        head: {
          title: '谦学',
          url: 'qianxue.com',
          topic: [
            {top: '学习中心', url: '/study'},
            {top: '课程', url: '/course'},
            {top: '班级', url: '/class'},
            {top: '话题', url: '/theme'}
          ]
        }
      };
    },
    components: {
      Header
    }
  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  #app
    min-width 1160px
    font-size 14px
  a:hover
    color #15c288
</style>
