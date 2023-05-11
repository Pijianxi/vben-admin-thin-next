<template>
  <BasicTable @register="registerTable"   @edit-end="handleEditEnd"
  :beforeEditSubmit="beforeEditSubmit"
      @edit-cancel="handleEditCancel"  @edit-change="onEditChange">
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
       
            {
              icon: 'clarity:note-edit-line',
              tooltip: '编辑',
              onClick: handleEdit.bind(null, record),
              // auth: ['article:btn:edit'],
            },
            // {
            //   icon: 'ant-design:delete-outlined',
            //   color: 'error',
            //   tooltip: '删除',
            //   auth: ['article:btn:delete'],
            //   popConfirm: {
            //     title: '是否确认删除',
            //     confirm: handleDelete.bind(null, record),
            //   },
            // },
          ]"
        />
      </template>
     
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable ,TableAction} from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { Alert } from 'ant-design-vue';

  import { getTemplateList } from '/@/api/report/template';
  import { useGo } from '/@/hooks/web/usePage';
import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    components: { BasicTable, AAlert: Alert,TableAction },
    setup() {
      const checkedKeys = ref<Array<string | number>>([]);
      const go = useGo();
      const { createMessage } = useMessage();
      const [registerTable, { getForm }] = useTable({
        // title: '开启搜索区域',
        api: getTemplateList,
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
    
      function onEditChange({ column, value, record }) {
        // 本例
        if (column.dataIndex === 'id') {
          record.editValueRefs.name4.value = `${value}`;
        }
        console.log(column, value, record);
      }

      function handleView(record: Recordable) {
        go('/content/article/article_detail/' + record.id);
      }
      function handleEdit(record: Recordable) {
        go('/data-import/admin/edit_template_cloumn/' + record.id);
      }

      function handleEditEnd({ record, index, key, value }: Recordable) {
        console.log(record, index, key, value);
        return false;
      }

      function handleEditCancel() {
        console.log('cancel');
      }


      // 模拟将指定数据保存
      function feakSave({ value, key, id }) {
        createMessage.loading({
          content: `正在模拟保存${key}`,
          key: '_save_fake_data',
          duration: 0,
        });
        return new Promise((resolve) => {
          setTimeout(() => {
            if (value === '') {
              createMessage.error({
                content: '保存失败：不能为空',
                key: '_save_fake_data',
                duration: 2,
              });
              resolve(false);
            } else {
              createMessage.success({
                content: `记录${id}的${key}已保存`,
                key: '_save_fake_data',
                duration: 2,
              });
              resolve(true);
            }
          }, 2000);
        });
      }

      async function beforeEditSubmit({ record, index, key, value }) {
        console.log('单元格数据正在准备提交', { record, index, key, value });
        return await feakSave({ id: record.id, key, value });
      }
      

      return {
        registerTable,
        getFormValues,
        checkedKeys,
        onSelect,
      
        onEditChange,
        // createActions,
        handleView,
        handleEdit,
        handleEditEnd,
        handleEditCancel,
        beforeEditSubmit,
      };
    },
  });
</script>
