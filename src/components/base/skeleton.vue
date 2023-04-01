<template>
  <div
    data-testid="skeleton"
    class="animate-pulse bg-gray-200 dark:bg-gray-600 rounded-lg"
    :style="{ width, height }"
  />
</template>

<script setup lang="ts">
defineProps<{ width?: string; height?: string }>();
</script>
