<template>
  <PageWrapper>
    <div class="lg:flex">
      <div class="lg:w-10/10 w-full !mr-4 enter-y">
        <Inventory :loading="loading" class="enter-y" />
      </div>
      
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import Inventory from './components/Inventory.vue';
  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
