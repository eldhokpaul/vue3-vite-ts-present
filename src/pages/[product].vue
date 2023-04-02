<template>
  <div>
    <div v-if="dashboardData.isLoading || !currentTab">
      <Skeleton class="md:mb-6 mb-4" width="200px" height="28px" />
      <div class="grid md:grid-cols-3 md:gap-7 gap-4">
        <PluginCardSkeleton v-for="i in 6" :key="i" />
      </div>
    </div>
    <template v-else>
      <h1 class="text-lg md:mb-6 mb-4 dark:text-gray-100">{{ currentTab?.title }} Plugins</h1>
      <div class="grid md:grid-cols-3 md:gap-7 gap-4">
        <PluginCard
          v-for="plugin in resultPlugins"
          :key="plugin.id"
          :title="plugin.title"
          :name="plugin.name"
          :description="plugin.description"
          :disabled="plugin.disabled"
          :active="plugin.active"
          :tab-name="currentTab.name"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { useGetDashboardData } from '@composables/api/useDashboardData';
import type { Plugin } from '@ts-types/api';

defineProps<{ product: string }>();

const dashboardData = useGetDashboardData();
const route = useRoute();

const plugins = computed(() => dashboardData.data.value?.data.plugins);
const tabdata = computed(() => dashboardData.data.value?.data.tabdata);
const currentTab = computed(() => tabdata.value?.[route.params.product as string]);

const resultPlugins = computed(() => {
  const result: (Plugin & { active?: boolean; disabled?: boolean })[] = [];
  if (currentTab.value) {
    currentTab.value.active.forEach((disabledPlugin: string) => {
      result.push({
        ...plugins.value![disabledPlugin],
        active: true,
      });
    });
    currentTab.value.disabled.forEach((disabledPlugin: string) => {
      result.push({
        ...plugins.value![disabledPlugin],
        disabled: true,
      });
    });
    currentTab.value.inactive.forEach((disabledPlugin: string) => {
      result.push({
        ...plugins.value![disabledPlugin],
        active: false,
      });
    });
  }

  // to keep the order of plugins
  return result.sort((a, b) => +a.id - +b.id);
});
</script>
