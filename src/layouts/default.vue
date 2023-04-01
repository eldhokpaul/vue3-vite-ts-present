<template>
  <main>
    <DefaultHeader v-model:showSidebar="showSidebar" />

    <div
      v-if="showSidebar"
      @click="showSidebar = false"
      class="fixed left-0 right-0 bottom-0 top-0 bg-transparent"
    />

    <DefaultSidebar v-model:show-sidebar="showSidebar" />

    <div class="p-4 sm:ml-72">
      <RouterView />
    </div>
  </main>
</template>

<script lang="ts" setup>
const showSidebar = ref(false);
</script>
