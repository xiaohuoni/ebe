import BasicLayout from '@/layouts/BasicLayout';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/ceshi1071',
        component: undefined,
      },
      {
        path: '/ssss3279',
        component: undefined,
      },
    ],
  },
];

export default routerConfig;
