import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index/index';

import Course from '@/components/course/course';
import Theme from '@/components/theme/theme';
import Class from '@/components/class/class';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/theme',
      name: 'Theme',
      component: Theme
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    }
  ]
});
