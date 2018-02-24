<template>
  <div class="tabheader">
    <ul class="tab-head">
      <li  v-for="(course,index) in coursedata.coursetype" :class="{act:index===0}"><a href="javascript:void(0)">{{course.title}}</a></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'tabheader',
      props: ['coursedata']
    };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .tab-head
    display flex
    border 1px solid #f0f0f0
    border-width 1px 0
    background #f9f9f9
    font-size 16px
    color #444
    li
      width 10%
      text-align center
      a
        display block
        color #5c5c5c
        padding 22px 0
    .act
      border-top 2px solid #15c288
      border-right 1px solid #f0f0f0
      border-left 1px solid #f0f0f0
      background #fff
</style>
