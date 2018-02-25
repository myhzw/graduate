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
            <a @click="modallogin">登录</a>
          </div>
          <div class="login-list">
            <a @click="modalregister">注册</a>
          </div>
        </div>
        <form class="search-form" >
          <div class="search">
            <input class="search-int" autocomplete="off" placeholder="输入要查找的内容" type="text">
            <div class="search-btn">
              <i class="search-icon ivu-icon ivu-icon-search"></i>
            </div>
          </div>
        </form>
      </div>
    </div>
    <Modal class="modal-login" v-model="modalcard" width="360">
      <div class="modal-head">
        <span :class="{modalHeadActive : modalnumber === 1}" @click="modallogin">登录</span>
        <span :class="{modalHeadActive : modalnumber === 2}" @click="modalregister">注册</span>
      </div>
      <div class="modal-body" v-show="modalnumber === 1">
        <div>
          <i-input placeholder="请输入登录邮箱/手机号"></i-input>
          <p></p>
        </div>
        <div>
          <i-input placeholder="6-16位密码，区分大小写，不能用空格"></i-input>
          <p></p>
        </div>
        <div>
          <label for="remember-accounts">
            <input type="checkbox" class="remember-accounts">
            记住登录帐号
          </label>
          <a style="float: right" href="">忘记密码</a>
        </div>
      </div>
      <div class="modal-body" v-show="modalnumber === 2">
        <div>
          <i-input placeholder="请输入注册邮箱/手机号"></i-input>
          <p></p>
        </div>
        <div>
          <Row>
            <i-col span="12">
              <i-input placeholder="请输入验证码"></i-input>
            </i-col>
          </Row>
          <p></p>
        </div>
        <div>
          <label for="remember-accounts">
            <input type="checkbox" class="remember-accounts">
            同意谦学网注册协议
          </label>
        </div>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="del">登录</Button>
      </div>
    </Modal>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'Header',
    data () {
      return {
        modalcard: false,
        modalnumber: 1
      };
    },
    props: {
      head: {
        type: Object
      }
    },
    components: {
    },
    methods: {
      modallogin: function () {
        this.modalcard = true;
        this.modalnumber = 1;
      },
      modalregister: function () {
        this.modalcard = true;
        this.modalnumber = 2;
      },
      del: function () {
      }
    }
  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .header
    box-shadow 1.5px 2.598px 9px 0 rgba(0,0,0,0.054)
    .const
      display flex
      flex-direction row
      justify-content space-between
      margin 0 auto
      width 1060px
      .head-left
        .title
          float: left
          margin: 15px 0
          padding: 0 15px
          h2
            font-size 32px
            color #15c288
            font-family "华文琥珀", Helvetica, Arial, sans-serif
            font-weight bold
          a
            font-size: 12px
        .nav
          float left
          .nav-list
            float left
          a
            padding 30px 25px
            line-height 78px
            font-size 14px
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
  .modal-login
    .modal-head
      height 49px
      border-bottom 1px solid #d0d6d9
      span
        float left
        font-size 16px
        width 80px
        text-align center
        height 49px
        line-height 49px
        cursor pointer
        &:hover
          border-bottom: 1px solid #f01400;
          color: #f01400;
      .modalHeadActive
        border-bottom: 1px solid #f01400;
        color: #f01400;
    .modal-body
      padding-top 30px
      p
        height 20px
      .remember-accounts
        vertical-align: middle;
</style>
