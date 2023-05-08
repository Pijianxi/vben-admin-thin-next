<template>
  <PageWrapper>
    <Tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit" hideAdd>
      <TabPane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
        <template v-if="pane.key == '1'">
          <DirectoryTree
            style="margin-left: 30px"
            v-model:expandedKeys="expandedKeys"
            v-model:selectedKeys="selectedKeys"
            multiple
            :tree-data="treeData"
          />
        </template>

       <BasicTable @register="registerTable" v-if="pane.key != '1'">
          <template #bodyCell="{ column, record, text }">
            <template v-if="column.key === 'id'"> ID: {{ record.id }} </template>
            <template v-else-if="column.key === 'no'">
              <Tag color="green">
                {{ record.no }}
              </Tag>
            </template>
            <template v-else-if="column.key === 'avatar'">
              <Avatar :size="60" :src="record.avatar" />
            </template>
            <template v-else-if="column.key === 'imgArr'">
              <TableImg :size="60" :simpleShow="true" :imgList="text" />
            </template>
            <template v-else-if="column.key === 'imgs'">
              <TableImg :size="60" :imgList="text" />
            </template>

            <template v-else-if="column.key === 'category'">
              <Tag color="green">
                {{ record.no }}
              </Tag>
            </template>
          </template>
        </BasicTable> 

       

        

      </TabPane>
    </Tabs>

    <!-- <Tabs   type="editable-card" @edit="onEdit" hideAdd>
    <TabPane   :key="pane.key" :tab="pane.title" :closable="pane.closable">
      {{ pane.content }}
    </TabPane>
  </Tabs> -->
  </PageWrapper>
</template>
<script lang="ts">
  import type { TreeProps } from 'ant-design-vue';
  import { defineComponent, ref } from 'vue';
  import { Tabs, TabPane, Tag, Avatar, DirectoryTree } from 'ant-design-vue';
  import { BasicTable, useTable, BasicColumn, TableImg } from '/@/components/Table';

  import { demoListApi } from '/@/api/demo/table';
  import PageWrapper from '/@/components/Page/src/PageWrapper.vue';

  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      // slots: { customRender: 'id' },
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      width: 100,
      // slots: { customRender: 'avatar' },
    },
    {
      title: '分类',
      dataIndex: 'category',
      width: 80,
      align: 'center',
      defaultHidden: true,
      // slots: { customRender: 'category' },
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '图片列表1',
      dataIndex: 'imgArr',
      helpMessage: ['这是简单模式的图片列表', '只会显示一张在表格中', '但点击可预览多张图片'],
      width: 140,
      // slots: { customRender: 'img' },
    },
    {
      title: '照片列表2',
      dataIndex: 'imgs',
      width: 160,
      // slots: { customRender: 'imgs' },
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '编号',
      dataIndex: 'no',
      // slots: { customRender: 'no' },
    },
    {
      title: '开始时间',
      dataIndex: 'beginTime',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
    },
    {
      title: '结束时间2',
      dataIndex: 'endTime',
    },
  ];

  export default defineComponent({
    components: { TabPane, Tabs, BasicTable, TableImg, Tag, Avatar, DirectoryTree, PageWrapper },
    setup() {
      const panes = ref<
        {
          title: string;
          content: string;
          key: string;
          closable?: boolean;
        }[]
      >([
        { title: '目录', content: 'Content of Tab 1', key: '1', closable: false },
        { title: '表单-AP0001', content: 'Content of Tab 1', key: '2' },
        { title: '表单-AP0002', content: 'Content of Tab 2', key: '3' },
        { title: '表单-AP0003', content: 'Content of Tab 3', key: '4' },
      ]);
      const activeKey = ref(panes.value[0].key);
      const newTabIndex = ref(0);
      const add = () => {
        activeKey.value = `newTab${++newTabIndex.value}`;
        panes.value.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey.value });
      };
      const remove = (targetKey: string) => {
        let lastIndex = 0;
        panes.value.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        panes.value = panes.value.filter((pane) => pane.key !== targetKey);
        if (panes.value.length && activeKey.value === targetKey) {
          if (lastIndex >= 0) {
            activeKey.value = panes.value[lastIndex].key;
          } else {
            activeKey.value = panes.value[0].key;
          }
        }
      };
      const onEdit = (targetKey: string | MouseEvent, action: string) => {
        if (action === 'add') {
          add();
        } else {
          remove(targetKey as string);
        }
      };
      const [registerTable] = useTable({
        title: '自定义列内容',
        titleHelpMessage: '表格中所有头像、图片均为mock生成，仅用于演示图片占位',
        api: demoListApi,
        columns: columns,
        bordered: true,
        showTableSetting: true,
      });

      const expandedKeys = ref<string[]>(['0-0', '0-1']);
      const selectedKeys = ref<string[]>([]);
      const treeData: TreeProps['treeData'] = [
        {
          title: '文件夹A',
          key: '0-0',
          children: [
            {
              title: '表单123456',

              key: '0-0-0',
              isLeaf: true,
            },
            {
              title: '表单123456',
              key: '0-0-1',
              isLeaf: true,
            },
          ],
        },
        {
          title: '文件夹A',
          key: '0-1',
          children: [
            {
              title: '表单123456',
              key: '0-1-0',
              isLeaf: true,
            },
            {
              title: '表单123456',
              key: '0-1-1',
              isLeaf: true,
            },
          ],
        },
      ];

      return {
        panes,
        activeKey,
        onEdit,
        registerTable,
        expandedKeys,
        selectedKeys,
        treeData,
      };
    },
  });
</script>
