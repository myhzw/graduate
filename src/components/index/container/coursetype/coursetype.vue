<template>
  <div class="coursetype">
    <div class="type" v-for="type in coursetype.type">
      <h2>{{type.typ}}</h2>
      <div class="custom">
        <ul class="list-card">
          <li class="item-card" v-for="content in type.content">
            <a href="javascript:void(0)">
              <img :src="content.imgurl" alt="">
            </a>
            <h4 class="title"><a href="javascript:void(0)">{{content.title}}</a></h4>
            <div class="item-line">
              <span class="item-price">{{content.price}}</span>
              <span class="item-source">
                <a href="javascript:void(0)">{{content.presenter}}</a>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      coursetype: {
        type: Object
      }
    }
  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .coursetype
    width 100%
    .type
      margin-bottom 55px
      h2
        font-size 30px
        line-height 30px
        text-align center
      .custom
        min-height 231px
        margin-top 13px
        .list-card
          display flex
          margin-left -25px
          flex-wrap  wrap
          font-size 14px
          .item-card
            margin-left 25px
            margin-top 20px
            width 190px
            a
              display: block;
              margin-bottom: 6px;
              img
                width 190px
                height 124px
                cursor pointer
          .title
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            height 40px
            font-size 14px
            margin-bottom 8px
            line-height 1.5
            a
              color #333
              word-wrap break-word
              white-space pre-wrap
          .item-line
            height 24px
            line-height 24px
            font-size 12px
            .item-price
              color #5fb41b
            .item-source
              float right
              color #999
          a:hover
            color #62b4f7
</style>
