import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式

Vue.config.productionTip = false;
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
