<template>
  <div class="choice">
    <h2>精选好课</h2>
    <div class="course">
      <div class="courseLeft" v-for="(images,index) in choice.imagesurl" :key="index" v-if="index===choiceinx">
        <img :src="images.imgurl" alt="">
      </div>
      <div class="courseRight">
        <div class="time-axis"></div>
        <transition-group
          name="slipeactive"
          tag="ul"
        >
          <li @mouseenter="slide(index)" :class="{courseactive:index===courinx}" class="course-item" v-for="(course,index) in choice.course" :key="index">
            <span >{{course.title}}</span>
            <div :class="{pointactive:index===courinx}" class="item-point"></div>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      choice: {
        type: Object
      }
    },
    data() {
      return {
        choiceinx: 0,
        courinx: 0
      };
    },
    methods: {
      slide: function(index) {
        this.courinx = index;
        this.choiceinx = index;
      }
    }
  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .choice
    width 100%
    margin-bottom 55px
    h2
      color #000
      font-size 30px
      line-height 30px
      text-align center
    .course
      display flex
      width 100%
      margin-top 30px
      .courseLeft
        position relative
        width 600px
        height 348px
        img
         width 600px
         height 352px
      .courseRight
        position relative
        width 600px
        height 350px
        background-color #f4f4f4
        border 1px solid #eee
        border-left 0
        cursor pointer
        .time-axis
          position absolute
          border-left 2px dotted #e8e8e8
          height 100%
          left 43px
          z-index 1
        .course-item
          position relative
          color #333
          height 50px
          line-height 50px
          padding 0 90px
          font-size 16px
          span
            display block
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            word-wrap normal
          .item-point
            width 6px
            height 6px
            background #ccc
            border 1px solid #ccc
            border-radius 100%
            position absolute
            left 40px
            top 20px
            z-index 2
          .pointactive
            background-color #23b8ff
            border-color #23b8ff
        .courseactive
          color #23b8ff
          background-color #fff
        .courseactive:after
            content ''
            position absolute
            width 5px
            height 100%
            background-color #23b8ff
            left 0
            top 0

</style>
