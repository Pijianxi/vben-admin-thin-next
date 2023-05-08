import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/reports',
  name: 'Reports',
  component: LAYOUT,
  // redirect: '/reports/index',
  meta: {
    orderNo: 1,
    icon: 'fa6-solid:folder',
    title: t('报表平台'),
  },
  children: [
    {
      path: 'profit',
      name: 'ReportsProfit',
      component: () => import('/@/views/reports/profit/index.vue'),
      meta: {
        icon: 'fa6-solid:coins',
        title: '损益主题',
      },
    },
    {
      path: 'expense',
      name: 'ReportsExpense',
      component: () => import('/@/views/reports/expense/index.vue'),
      meta: {
        icon: 'fa6-solid:wallet',
        title: '费用主题',
      },
    },

    {
      path: 'inventory',
      name: 'ReportsInventory',
      component: () => import('/@/views/reports/inventory/index.vue'),
      meta: {
        icon: 'fa6-solid:dolly',
        title: '库存主题',
      },
    },
  ],
};

export default dashboard;
