import { lazy } from 'react';

/* istanbul ignore next */
export const AppRoutes = [
  {
    path: '/',
    exact: true,
    component: lazy(/* istanbul ignore next */ () => import('../routes/DashBoard')),
  },
  {
    path: '/blank',
    permissions: ['view:blank_page'],
    breadCrumb: 'Blank Page',
    component: lazy(/* istanbul ignore next */ () => import('../routes/Blank')),
  },
  {
    path: '/frauds/block-devices',
    permissions: ['view:blank_page'],
    breadCrumb: 'Block Devices',
    component: lazy(/* istanbul ignore next */ () => import('../routes/Frauds/BlockDevices')),
  },
  {
    path: '/404',
    component: lazy(/* istanbul ignore next */ () => import('../routes/NotFound')),
  },
];
