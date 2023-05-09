<template>
  <PageWrapper>
  <Tabs type="card">
    <TabPane key="1" tab="模板查询"> <TempFormTable /></TabPane>
    <TabPane key="2" tab="数据导入详情查询"> <VxeTable /></TabPane>
    <!-- <h1 >11111</h1> -->
  </Tabs>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Tabs,TabPane } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';

  import TempFormTable from './components/FormTable.vue';
  import VxeTable from './components/VxeTable.vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
