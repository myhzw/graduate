<template>
  <div class="person-count">
    <div class="count">
      <ul>
        <li>
          <router-link to="/person/teach">0</router-link>
          <span>在教</span>
        </li>
        <li class="line"></li>
        <li>
          <router-link to="/person/course">0</router-link>
          <span>课程</span>
        </li>
        <li class="line"></li>
        <li>
          <router-link to="/person/message">0</router-link>
          <span>笔记</span>
        </li>
        <li class="line"></li>
        <li>
          <router-link to="/person/response">0</router-link>
          <span>回答</span>
        </li>
      </ul>
    </div>
    <div class="person-info flat">
      <ul>
        <li>
          <span class="first">昵称:</span>
          <span> XXX </span>
        </li>
        <li>
          <span class="first">来自:</span>
          <span></span>
        </li>
        <li>
          <span class="first">简介:</span>
          <span></span>
        </li>
      </ul>
      <div class="more">
        <router-link to="/setting">
            编辑个人资料 <Icon size="12" type="chevron-right"></Icon>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'person-count'
};
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .person-count
    margin-left 20px
    width 240px
    .count
      background url('../../../../../static/images/popularity_bg.png')
      margin-bottom 12px
      ul
        display flex
        padding 26px 0 29px 27px
        li
          a
            font-size 18px
            width 32px
            height 25px
            display inline-block
            overflow hidden
            text-align center
          span
            font-size 12px
            display block
            text-align center
        .line
          height 33px
          width 1px
          background #eee
          padding 0
          margin 0 10px
    .person-info
      color #444
      ul
        padding 20px 20px 0
        li
          padding 7px
          border-bottom 1px dashed #eee
          .first
            color #999
      .more
        height 46px
        line-height 46px
        text-align center
        border-top 1px solid #eee
        color #999
    .flat
      margin-bottom 20px
      box-shadow 1px 1.732px 1px rgba(0,0,0,0.06), inset 0 0 0 rgba(0,0,0,0.05)
      background #fff
      border-radius 2px

</style>
