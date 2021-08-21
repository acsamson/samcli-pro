export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/demo',
    name: 'demo',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/demo', redirect: '/demo/list' },
      {
        path: '/demo/list',
        name: 'list.table-list',
        icon: 'table',
        component: './TableList',
      },
    ],
  },
  {
    path: '/',
    layout: false,
    component: './Home',
  },
  {
    component: './404',
  },
];
