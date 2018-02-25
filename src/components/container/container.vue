<template>
  <div class="container">
    <Choice :choice="choice"/>
    <Coursetype :coursetype="coursetype"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Choice from './choice/choice';
  import Coursetype from './coursetype/coursetype';
  export default {
    name: 'container',
    data() {
      return {
        choice: {
          imagesurl: [
            {imgurl: '../../../static/images/choice-1.jpg'},
            {imgurl: '../../../static/images/choice-2.jpg'},
            {imgurl: '../../../static/images/choice-3.jpg'},
            {imgurl: '../../../static/images/choice-4.jpg'},
            {imgurl: '../../../static/images/choice-2.jpg'},
            {imgurl: '../../../static/images/choice-3.jpg'},
            {imgurl: '../../../static/images/choice-4.jpg'}
          ],
          course: [
            {title: '暗色系海报讲解思路'},
            {title: '【齐论】手淘个性化玩法，轻松访客破万'},
            {title: '电商黄金展位“钻展海报”设计好=转化倍增'},
            {title: 'BootStrap响应式布局导航'},
            {title: '【齐论】手淘数据模型卡位，新品流量暴增'},
            {title: '超实用海报设计技巧'},
            {title: '【齐论】手淘个性化玩法，轻松访客破万'}
          ]
        },
        coursetype: {
          type: [
            {
              typ: '语言留学',
              content: [
                {
                  imgurl: '../../../static/images/course-1.jpg',
                  title: '2018年雅思变题季首考揭秘-环球颜王团带你冲7分！',
                  presenter: '环球教育在线',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-2.jpg',
                  title: '雅思提分技巧预测公益课',
                  presenter: '达人帮',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-3.png',
                  title: '外朗托福名师堂 · 100+提分季',
                  presenter: '外朗教育',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-4.jpg',
                  title: '托福提分-环球颜王团名师公益课 【1.3-1.31】',
                  presenter: '环球教育在线',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-5.png',
                  title: '【录播】新概念英语第一册，你的选择不会错--Wendy老师主讲',
                  presenter: 'e学苑互动网校',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-6.png',
                  title: '【直播】英语语法知识学习-跟海斌老师学语法 免费直播公开课',
                  presenter: 'e学苑互动网校',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-7.png',
                  title: '哈佛MIT学长带你搞定留学申请（院校选择+推荐信写作）',
                  presenter: '募格学术',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-8.png',
                  title: '【每日更新】英语口语发音练习   每日免费更新并予以纠正发音',
                  presenter: 'e学苑互动网校',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-9.jpg',
                  title: '【精品】英语发音基础班【入门】',
                  presenter: '蓝轨迹',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-10.jpg',
                  title: '【精华】英语口语工厂，跟我一起变流利-每日更新',
                  presenter: '洋葱教育',
                  price: '免费'
                }
              ]
            },
            {
              typ: '升学考研',
              content: [
                {
                  imgurl: '../../../static/images/course-11.png',
                  title: '2019考研英语寒假复习全攻略',
                  presenter: '抢分教育',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-12.jpg',
                  title: '2019考研英语核心词汇先行班（英一、二通用）',
                  presenter: '研播网教育',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-13.jpg',
                  title: '肖凝精讲2019考研核心词汇',
                  presenter: '研途考研VIP',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-14.jpg',
                  title: '十三大学科门类解读',
                  presenter: '研途考研VIP',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-15.jpg',
                  title: '2018高考数学秋季系统拔高班',
                  presenter: '晨露课堂',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-16.jpg',
                  title: '2018高考英语阅读完型技巧班',
                  presenter: '晨露课堂',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-17.jpg',
                  title: '高考数学一轮复习2018年【完整全套】',
                  presenter: '数学帝',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-18.jpg',
                  title: '高考语文一轮复习下•博知致用班',
                  presenter: '杨洋',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-19.jpg',
                  title: '化学反应原理全解',
                  presenter: '祝鑫',
                  price: '免费'
                },
                {
                  imgurl: '../../../static/images/course-20.jpg',
                  title: '【系统班】2018周芳煜高考生物一轮（必修二）',
                  presenter: '晨露课堂',
                  price: '免费'
                }
              ]
            }
          ]
        }
      };
    },
    components: {
      Choice,
      Coursetype
    }
  };
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .container
    width 1060px
    margin 0 auto
    margin-top 55px
</style>
