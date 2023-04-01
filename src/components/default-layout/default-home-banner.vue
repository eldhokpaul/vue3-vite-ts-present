<template>
  <RouterLink to="/" class="block dark:text-white text-slate-800" @click="$emit('update:showSidebar', false)">
    <span class="font-light">Data</span>
    <span class="font-bold">Guard</span>
  </RouterLink>
</template>

<script lang="ts" setup>
defineEmits<{(e: 'update:showSidebar', value: string): void }>();

</script>
