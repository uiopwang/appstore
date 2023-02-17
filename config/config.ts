import { defineConfig } from 'umi';

export default defineConfig({
  // component: '../layouts',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/console/appstore', component: '@/pages/index' },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
