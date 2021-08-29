import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'samcli-docs',
  mode: 'site',
  navs: {
    // 多语言 key 值需与 locales 配置中的 key 一致
    'en-US': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      // {
      //   title: 'GitHub',
      //   path: '/',
      // },
    ],
    'zh-CN': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      // {
      //   title: 'GitHub',
      //   path: '/',
      // },
    ],
  },
  qiankun: {
    slave: { }
  },
  webpack5: { },
  // more config: https://d.umijs.org/config
});
