<template>
  <PageWrapper>
    <div class="lg:flex">
      <div class="lg:w-10/10 w-full !mr-4 enter-y">
        <Profit :loading="loading" class="enter-y" />
      </div>
      
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import Profit from './components/Profit.vue';
  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
