<template>
  <div class="contentright">
    <h3>强烈推荐</h3>
    <ul class="courser">
      <li class="courseitem item" v-for="(card,index) in coursedata.recommend">
        <div class="courseimg">
          <a href="javascript:void(0)">
            <img :src="card.imgurl" alt="">
          </a>
          <div class="tag">
            <span>推荐</span>
          </div>
        </div>
        <div class="courseinfo">
          <h4>{{card.title}}</h4>
          <div class="teacher">
            <a href="javascript:void(0)">{{card.teacher}}</a>
            <span class="price">{{card.price}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'contentright',
    props: {
      coursedata: {
        type: Object
      }
    }
  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .contentright
    width 270px
    border 1px solid #f0f0f0
    background #f9f9f9
    padding 13px
    h3
      height 30px
      line-height 30px
      margin 0 0 13px 0
      font-size 16px
      font-weight normal
    .item
      width 100%
      .courseimg
        position relative
        .tag
          position absolute
          top 0
          left 0
          width 70px
          height 50px
          color #fff
          padding 5px 0 0 6px
          overflow hidden
          span
            position relative
            z-index 2
            top 5px
        .tag:after
          content ''
          display inline-block
          border 8px solid transparent
          position absolute
          border-width 50px
          border-left 70px solid #12c888
          left 0
          top -50px
    .courseitem
      margin-bottom 15px
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
