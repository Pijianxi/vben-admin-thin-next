import type { AppRouteModule } from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const main: AppRouteModule = {
  path: '/data-import',
  name: 'MrDataImport',
  component: LAYOUT,
  // redirect: '/comp/reports',
  meta: {
    orderNo: 3,
    icon: 'mdi:database-cog',
    title: '数据导入平台',
  },

  children: [
    {
      path: 'mrdataimport',
      name: 'MrDataImport',
      component: () => import('/@/views/dataimport/import/index.vue'),
      // component: () => import('/@/views/reports/profit/index.vue'),
      meta: {
        icon: 'mdi:database-search',
        title: '数据导入',
      },
    },
    {
      path: 'mrdataadmin',
      name: 'MrDataAdmin',
      component: () => import('/@/views/dataimport/dataadmin/index.vue'),
      meta: {
        icon: 'fa6-solid:gear',
        title: '模板管理',
      },
    },
  ],
};

export default main;
