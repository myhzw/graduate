<template>
    <div class="theme-right">
      <div class="theme-search">
        <i-input placeholder="搜索热门话题">
          <span class="search-append" slot="append">
            <Icon type="ios-search-strong"></Icon>
          </span>
        </i-input>
       </div>
      <Row shadow style="padding: 10px">
        <i-col span="24">
          <Card :bordered="false">
            <p slot="title">热门标签</p>
            <p class="tag-line">
              <Tag class="tag-hot">摄影</Tag>
              <Tag class="tag-hot">前端</Tag>
            </p>
            <p class="tag-line">
              <Tag class="tag-hot">摄影</Tag>
              <Tag class="tag-hot">前端</Tag>
            </p>
            <p class="tag-line">
              <Tag class="tag-hot">摄影</Tag>
              <Tag class="tag-hot">前端</Tag>
            </p>
          </Card>
        </i-col>
      </Row>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'theme-right'
  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .theme-right
    margin-left 20px
    width 240px
    .theme-search
      margin-bottom 20px
      .search-append:hover
        cursor pointer
    .tag-line
      margin-bottom 10px
      .tag-hot
        line-height 25px
        height 25px
        padding 0 20px
        &:hover
          background-color #15c288
        &:hover  span
          color #fff
</style>
