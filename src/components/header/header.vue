<template>
  <div class="header">
    <div class="const">
      <div class="head-left">
        <div class="title">
          <router-link to="/">
            <h2>{{head.title}}</h2>
            <a href="javascript:void(0)">{{head.url}}</a>
          </router-link>
        </div>
        <div class="nav">
          <div class="nav-list" v-for="topic in head.topic">
           <router-link :to="topic.url">{{topic.top}}</router-link>
          </div>
        </div>
      </div>
      <div class="head-right">
        <div class="head-login">
          <div class="login-list">
            <a href="javascript:void(0)">登录</a>
          </div>
          <div class="login-list">
            <a href="javascript:void(0)">注册</a>
          </div>
        </div>
        <form class="search-form" action="">
          <div class="search">
            <input class="search-int" autocomplete="off" placeholder="输入要查找的内容" type="text">
            <div class="search-btn">
              <i class="search-icon ivu-icon ivu-icon-search"></i>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'Header',
    props: {
      head: {
        type: Object
      }
    }
  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .header
    box-shadow: 1.5px 2.598px 9px 0 rgba(0,0,0,0.054)
    .const
      display flex
      flex-direction row
      justify-content space-between
      margin 0 auto
      width 1200px
      .head-left
        .title
          float: left
          margin: 15px 0
          padding: 0 15px
          h2
            font-size: 32px
            color: #15c288
            font-family: "华文琥珀", Helvetica, Arial, sans-serif
            font-weight: bold
          a
            font-size: 12px
        .nav
          float: left
          .nav-list
            float: left
          a
            padding: 30px 25px
            line-height: 78px
            font-size: 14px
            color #5c5c5c
      .head-right
        line-height 78px
        .head-login
          float right
          .login-list
            float left
          a
            padding 0 10px !important
            color #15c288
        .search-form
          float right
          margin-top 22px
          .search
            line-height 35px
            border-left 1px solid #f0f0f0
            border-right 1px solid #f0f0f0
            .search-int
              outline none
              width 115px
              height 35px
              line-height 35px
              border 0
              margin 0
              padding 0 0 0 15px
              color #616161
              font-size 12px
            .search-btn
              float right
              margin-top 4px
              margin-right 25px
              i
                margin-left 10px
                cursor pointer
                font-size 18px
                color #15c288
</style>
