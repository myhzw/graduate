<template>
  <div class="contentleft">
    <ul class="tab-menu">
      <li v-for="(course,index) in coursedata.menu" ><a :class="{act:index===0}" href="javascript:void(0)">{{course}}</a></li>
    </ul>
    <div class="courselist">
      <div class="courseitem" v-for="(card,index) in coursedata.coursecard">
        <div class="courseimg">
          <a href="javascript:void(0)">
            <img :src="card.imgurl" alt="">
          </a>
        </div>
        <div class="courseinfo">
          <h4>{{card.title}}</h4>
          <div class="metas">
            <span>{{card.tatal}}学员 / </span>
            <span>{{card.score}}评分</span>
          </div>
          <div class="teacher">
            <a href="javascript:void(0)">{{card.teacher}}</a>
            <span class="price">{{card.price}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'contentleft',
    props: {
      coursedata: {
        type: Object
      }
    }

  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .contentleft
    width 900px
    .tab-menu
      display flex
      background #f9f9f9
      border 1px solid #f0f0f0
      margin-bottom 20px
      .act
        background #fff
        color #15c288
      a
        color #5c5c5c
        display block
        padding 13px 25px
    .courselist
      display flex
      justify-content space-between
      flex-wrap wrap
      .courseitem
        margin-bottom: 15px
        width 285px
        .courseimg
          height 160px
          width 285px
          img
            width 100%
        .courseinfo
          padding 12px 5px
          h4
            height 20px
            color #000
            margin-bottom 10px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          .metas
            font-size 12px
            line-height 20px
            margin-bottom 10px
            color #c6d0d8

          .teacher
            position relative
            span
              float right
              color #15c288

</style>
