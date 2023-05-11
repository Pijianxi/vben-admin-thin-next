<template>
  <BasicTable @register="registerTable"  @edit-change="onEditChange">
    <template #form-custom> custom-slot </template>
    <!-- <template #headerTop>
      <a-alert type="info" show-icon>
        <template #message>
          <template v-if="checkedKeys.length > 0">
            <span>已选中{{ checkedKeys.length }}条记录(可跨页)</span>
            <a-button type="link" @click="checkedKeys = []" size="small">清空</a-button>
          </template>
          <template v-else>
            <span>未选中任何项目</span>
          </template>
        </template>
      </a-alert>
    </template> -->
    <!-- <template #toolbar>
      <a-button type="primary" @click="getFormValues">获取表单数据</a-button>
    </template> -->
    
    <template   #action="{ record }">
        <TableAction
         
          :actions="[
            // {
            //   icon: 'clarity:info-standard-line',
            //   tooltip: '详情',
             
            //   onClick: handleView.bind(null, record),
            // //  auth: ['article:btn:detail'],
            // },
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑',
              onClick: handleEdit.bind(null, record),
              // auth: ['article:btn:edit'],
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              tooltip: '删除',
              auth: ['article:btn:delete'],
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
     
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable ,TableAction} from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './bcnAdjustTableData';
  import { Alert } from 'ant-design-vue';

  import { getBcnAdjustList } from '/@/api/report/template';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    components: { BasicTable, AAlert: Alert,TableAction },
    setup() {
      const checkedKeys = ref<Array<string | number>>([]);
      const go = useGo();
      const [registerTable, { getForm }] = useTable({
        // title: '开启搜索区域',
        api: getBcnAdjustList,
        columns: getBasicColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: true,
        rowKey: 'id',
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },


        // rowSelection: {
        //   type: 'checkbox',
        //   selectedRowKeys: checkedKeys,
        //   onSelect: onSelect,
        //   onSelectAll: onSelectAll,
        // },
      });

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }

      function onSelect(record, selected) {
        if (selected) {
          checkedKeys.value = [...checkedKeys.value, record.id];
        } else {
          checkedKeys.value = checkedKeys.value.filter((id) => id !== record.id);
        }
      }
      function onSelectAll(selected, selectedRows, changeRows) {
        const changeIds = changeRows.map((item) => item.id);
        if (selected) {
          checkedKeys.value = [...checkedKeys.value, ...changeIds];
        } else {
          checkedKeys.value = checkedKeys.value.filter((id) => {
            return !changeIds.includes(id);
          });
        }
      }
      function onEditChange({ column, value, record }) {
        // 本例
        if (column.dataIndex === 'id') {
          record.editValueRefs.name4.value = `${value}`;
        }
        console.log(column, value, record);
      }

      function handleView(record: Recordable) {
        go('/data-import/import_detail/' + record.id);
      }
      function handleEdit(record: Recordable) {
        go('/dataadmin/import/import_detail/' + record.id);
      }
      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
      }

      return {
        registerTable,
        getFormValues,
        checkedKeys,
        onSelect,
        onSelectAll,
        onEditChange,
        // createActions,
        handleView,
        handleEdit,
        handleDelete
      };
    },
  });
</script>
