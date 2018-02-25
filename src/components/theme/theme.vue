<template>
  <div class="group">
    <div class="theme">
      <ThemeContent :theme="theme"></ThemeContent>
      <ThemeRight :theme="theme"></ThemeRight>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ThemeContent from './theme-content/theme-content';
  import ThemeRight from './theme-right/theme-right';
  export default {
    name: 'theme',
    data() {
      return {
        theme: {
          nav: [
            {title: '推荐'},
            {title: '前端'},
            {title: 'Android'},
            {title: '后端'},
            {title: '摄影'},
            {title: '数据库'},
            {title: '人工智能'}
          ],
          entry: [
            {
              title: '这11张照片讲述了摄影演变史',
              type: '摄影',
              author: '曹佳佳的熊猫眼',
              time: '1天前',
              counts: '51'
            },
            {
              title: '学习bind源代码，比较bind的方式绑定函数在在内存使用上优于箭头函数',
              type: '前端',
              author: 'Jayden.李',
              time: '1天前',
              counts: '281'
            },
            {
              title: '这11张照片讲述了摄影演变史',
              type: '摄影',
              author: '曹佳佳的熊猫眼',
              time: '1天前',
              counts: '51'
            },
            {
              title: '学习bind源代码，比较bind的方式绑定函数在在内存使用上优于箭头函数',
              type: '前端',
              author: 'Jayden.李',
              time: '1天前',
              counts: '281'
            },
            {
              title: '这11张照片讲述了摄影演变史',
              type: '摄影',
              author: '曹佳佳的熊猫眼',
              time: '1天前',
              counts: '51'
            },
            {
              title: '学习bind源代码，比较bind的方式绑定函数在在内存使用上优于箭头函数',
              type: '前端',
              author: 'Jayden.李',
              time: '1天前',
              counts: '281'
            }
          ]
        }
      };
    },
    components: {
      ThemeContent,
      ThemeRight
    }
  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .group
    padding-top 20px
    background-color: #f4f5f5;
    .theme
      display flex
      margin 0 auto
      width 1060px

</style>
