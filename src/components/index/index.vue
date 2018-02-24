<template>
    <div class="index">
      <Banner :banner="banner"></Banner>
      <Container></Container>
    </div>
</template>

<script type="text/ecmascript-6">
import Banner from './banner/banner';
import Container from './container/container';
export default {
  name: 'index',
  data() {
    return {
      banner: {
        imagesurl: [
          {imgurl: '../../../static/images/ban-1.jpg'},
          {imgurl: '../../../static/images/ban-2.jpg'},
          {imgurl: '../../../static/images/ban-3.jpg'},
          {imgurl: '../../../static/images/ban-4.jpg'},
          {imgurl: '../../../static/images/ban-5.jpg'}
        ]
      }
    };
  },
  components: {
    Banner,
    Container
  }
};
</script>

<style lang='stylus' rel="stylesheet/stylus">

</style>
