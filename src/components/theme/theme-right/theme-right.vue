<template>
    <div class="theme-right">
      <div class="theme-search">
        <Input placeholder="搜索热门话题">
          <span class="search-append" slot="append">
            <Icon type="ios-search-strong"></Icon>
          </span>
        </Input>
       </div>
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
    width 280px
</style>
