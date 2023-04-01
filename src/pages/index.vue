<template>
  <div class="font-light dark:text-gray-200">
    Welcome to the
    <span class="font-bold text-lg">DataGuard</span>
    Dashboard
  </div>
</template>

<script lang="ts" setup>
import { useGetDashboardData } from '@composables/api/useDashboardData';

useGetDashboardData();
</script>
