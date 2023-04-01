<template>
  {{ dashboardData.data.value?.data }}
</template>

<script lang="ts" setup>
import { useGetDashboardData } from '@composables/api/useDashboardData';

defineProps<{product: string}>();

const dashboardData = useGetDashboardData();

</script>
