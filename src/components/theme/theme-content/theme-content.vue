<template>
  <div class="theme-content">
    <div class="theme-nav">
      <h4>热门话题</h4>
      <ul class="nav-list">
        <li v-for="(nav,index) in theme.nav" :class="{act:index===0}" class="nav-item">
          <a href="">{{nav.title}}</a>
        </li>
      </ul>
    </div>
    <ul class="entry-list">
      <li v-for="(entry,index) in theme.entry" class="entry-item">
        <a href="">
          <div class="info-box">
            <div class="info-row">
              <h3>{{entry.title}}</h3>
            </div>
            <div class="meta-row">
              <span class="category-title">{{entry.type}}</span>
              <span>{{entry.author}}</span>
              <span> · </span>
              <span>{{entry.time}}</span>
              <span> · </span>
              <span>{{entry.counts}} 次阅读</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'theme-content',
    props: {
      theme: {
        type: Object
      }
    }
  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .theme-content
    background-color: #fff;
    width 900px
    .theme-nav
      display flex
      justify-content space-between
      padding 18px 24px
      border-bottom 1px solid rgba(178,186,194,.15)
      h4
        font-size 16px
      .nav-list
        display flex
        .nav-item
          margin-right 20px
        .act
          a
            color #15c288
    .entry-list
      .entry-item
        border-bottom 1px solid rgba(178,186,194,.15)
        .info-box
          padding 20px 24px
          .info-row
            margin: 6px 0 10px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            h3
              font-size 16px
              font-weight 600
              line-height 1.2
              color #2e3135
          .meta-row
            font-size 12px
            color #8f969c
            align-items baseline
            white-space nowrap
            .category-title
              display: inline-block;
              margin-right: 14px;
              padding: 5px 0;
              min-width: 54px;
              text-align: center;
              line-height: 1;
              color: #fff;
              background-color: #c69f42;
              border-radius: 2px;
</style>
