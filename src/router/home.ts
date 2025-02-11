const layoutRouter = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      icon: 'icon-Home',
      keepAlive: true,
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      title: '搜索',
      noScroll: true,
      icon: 'icon-Search',
      keepAlive: true,
    },
    component: () => import('@/views/search/index.vue'),
  },
  {
    path: '/list',
    name: 'list',
    meta: {
      title: '歌单',
      icon: 'icon-Paper',
      keepAlive: true,
    },
    component: () => import('@/views/list/index.vue'),
  },
  {
    path: '/mv',
    name: 'mv',
    meta: {
      title: 'MV',
      icon: 'icon-recordfill',
      keepAlive: true,
    },
    component: () => import('@/views/mv/index.vue'),
  },
  {
    path: '/history',
    name: 'history',
    meta: {
      title: '历史',
      icon: 'icon-a-TicketStar',
      keepAlive: true,
    },
    component: () => import('@/views/history/index.vue'),
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: () => import('@/views/favorite/index.vue'),
    meta: {
      title: '我的收藏',
      icon: 'icon-likefill',
    },
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      title: '用户',
      icon: 'icon-Profile',
      keepAlive: true,
      noScroll: true,
    },
    component: () => import('@/views/user/index.vue'),
  },
];
export default layoutRouter;
