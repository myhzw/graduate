<template>
  <div class="banner">
    <div class="swiper-container" @mouseenter="stoptimer" @mouseleave="starttimer">
      <div class="swiper-wrapper">
        <transition-group
          name="fade"
          tag="ul"
        >
          <li class="swiper-slide" v-for="(imgurl,index) in banner.imagesurl"  :key="index"  v-if="index===inx"
              :style="{backgroundImage:'url('+imgurl.imgurl+')'}">
          </li>
        </transition-group>
      </div>
      <div class="swiper-button">
        <i class="fa fa-angle-left" @click="btnLeft"></i>
        <i class="fa fa-angle-right ret" @click="btnRight"></i>
      </div>
      <div class="swiper-pager">
        <span class="swiper-pager-switch" @click="switcsh(index)" v-for="(imgurl,index) in banner.imagesurl" :key="index" :class="{switch:index===inx}"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Banner',
    props: {
      banner: {
        type: Object
      }
    },
    data() {
      return {
        inx: 0,
        timer: null,
        settime: null
      };
    },
    methods: {
      stoptimer: function () {
        clearInterval(this.timer);
      },
      starttimer: function () {
        this.timer = setInterval(() => {
          this.inx = this.inx === 4 ? 0 : ++this.inx;
        }, 6000);
      },
      banners: function() {
        this.timer = setInterval(() => {
          this.inx = this.inx === 4 ? 0 : ++this.inx;
        }, 6000);
      },
      btnLeft: function() {
        clearTimeout(this.settime);
        this.settime = setTimeout(() => {
          this.inx = this.inx === 0 ? 4 : --this.inx;
        }, 300);
      },
      btnRight: function() {
        clearTimeout(this.settime);
        this.settime = setTimeout(() => {
          this.inx = this.inx === 4 ? 0 : ++this.inx;
        }, 300);
      },
      switcsh: function(index) {
        this.inx = index;
      }
    },
    mounted() {
      this.banners();
    }
  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .banner
    position relative
    background #fff
    margin 0 auto
    max-height 600px
    .swiper-button
      position absolute
      width 1200px
      top 50%
      left 50%
      margin-left -580px
      margin-top -43px
      font-size 86px
      color #fff
      cursor pointer
      .ret
        float right
    .swiper-container
      margin 0 auto
      height 420px
      overflow hidden
      cursor pointer
      .swiper-wrapper
        background-color #000
        width 100%
        height 420px
        .swiper-slide
          position absolute
          width 100%
          height 420px
          background no-repeat center
      .swiper-pager
        position absolute
        left 50%
        bottom 15px
        margin-left -100px
        font-size 0
        .swiper-pager-switch
          margin: 0 10px;
          width: 12px;
          height: 12px;
          display: inline-block;
          border-radius: 50%;
          border: 2px solid #fff;
        .switch
          background-color #fff
  .fade-enter-active,.fade-leave-active{
    filter opacity(100%)
    transition: all 2s;
  }
  .fade-enter,.fade-leave-to/* .fade-leave-active below version 2.1.8 */
  {
    filter opacity(0%)
  }

</style>
