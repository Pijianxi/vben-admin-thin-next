import type { AppRouteModule ,AppRouteRecordRaw} from '/@/router/types';

import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const main: AppRouteRecordRaw = {
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
      path: 'import',
      name: 'MrDataImport',
      // component: () => import('/@/views/dataimport/import/index.vue'),
      // component: () => import('/@/views/reports/profit/index.vue'),
       component: () => import('/@/views/dataimport/import/components/FormTable.vue'),
       meta: {
        icon: 'mdi:database-search',
        title: '数据导入',
        isShown: true,
        hideChildrenInMenu: true,
        
      },
       children: [
        {
          path: 'import_detail/:id',
          name: 'importDetail',
         
           component: () => import('/@/views/dataimport/import/components/BcnAdjust.vue'),
          
          meta: {
            icon:'mdi:database-search',
            title: '明细查询',
            hideMenu: true,
          }
        },
       ],
     
     
       
    },
  

    {
      path: 'admin',
      name: 'MrDataAdmin',
      component: () => import('/@/views/dataimport/dataadmin/components/FormTable.vue'),
      meta: {
        icon: 'fa6-solid:gear',
        title: '模板管理',
        hideChildrenInMenu: true,
      },
      children: [
        {
          path: 'edit_template_cloumn/:id',
          name: 'editTemplateColumn',
         
          component: () => import('/@/views/dataimport/dataadmin/components/TemplateColEdit.vue'),
          
          meta: {
            icon:'mdi:database-search',
            title: '明细',
            hideMenu: true,
            hideChildrenInMenu: true,
          }
        },
      ]
    },
    
  
  ],
};

export default main;
