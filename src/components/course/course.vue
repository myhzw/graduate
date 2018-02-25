<template>
  <div class="course">
    <Tabheader :coursedata="coursedata"/>
    <div class="content">
      <Contentleft :coursedata="coursedata"/>
      <Contentright :coursedata="coursedata"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tabheader from './tabhead/tabheader';
  import Contentleft from './contentleft/contentleft';
  import Contentright from './contentright/contentright';
  export default {
    name: 'course',
    data() {
      return {
        coursedata: {
          coursetype: [
            {title: '全部'},
            {title: '摄影课堂'},
            {title: '创意设计'},
            {title: '声乐器乐'},
            {title: '运动健身'},
            {title: 'IT互联网'},
            {title: '兴趣爱好'},
            {title: '语言学习'},
            {title: '职场技能'},
            {title: '公开课'}
          ],
          menu: ['综合排序', '最新', '最热', '推荐'],
          coursecard: [
            {
              imgurl: 'static/images/coursetp-1.jpg',
              title: 'sai基础教程',
              tatal: 118,
              score: 4.5,
              teacher: '木桃',
              price: '免费'
            },
            {
              imgurl: 'static/images/coursetp-2.jpg',
              title: 'Lightroom基础教程',
              tatal: 118,
              score: 4.5,
              teacher: '小段录像',
              price: '免费'
            },
            {
              imgurl: 'static/images/coursetp-3.jpg',
              title: '人影摄像高级教程',
              tatal: 30118,
              score: 4.5,
              teacher: '杨最醉',
              price: '免费'
            },
            {
              imgurl: 'static/images/coursetp-4.jpg',
              title: '吉他自学教程-弹唱教学最系统的教程',
              tatal: 30118,
              score: 4.5,
              teacher: '爱弹吉他学院',
              price: '免费'
            },
            {
              imgurl: 'static/images/coursetp-5.jpg',
              title: '零基础学唱歌教程及唱歌技巧',
              tatal: 30118,
              score: 4.5,
              teacher: '小飞飞机',
              price: '免费'
            },
            {
              imgurl: 'static/images/coursetp-6.jpg',
              title: 'Mark Crilley漫画教程合集',
              tatal: 30118,
              score: 4.5,
              teacher: '木桃',
              price: '免费'
            }

          ],
          recommend: [
            {
              imgurl: 'static/images/coursetp-7.jpg',
              title: '互联网营销入门',
              teacher: '暖石',
              price: '免费'
            },
            {
              imgurl: 'static/images/coursetp-8.jpg',
              title: '【图文详解】微信公众平台开发',
              teacher: '暖石',
              price: '免费'
            }
          ]
        }
      };
    },
    components: {
      Tabheader,
      Contentleft,
      Contentright
    }
  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .course
    margin 30px auto
    min-height 400px
    width 1060px
    .content
      display flex
      justify-content space-between
      font-size 14px
      margin-top 20px
  a:hover
    color: #15c288
</style>
