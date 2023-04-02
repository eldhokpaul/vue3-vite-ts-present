<template>
  <aside
    :class="[
      'fixed top-0 left-0 z-40 w-72 h-screen transition-transform sm:translate-x-0',
      showSidebar ? 'transform-none' : '-translate-x-full',
    ]"
    aria-label="Sidebar"
  >
    <div class="h-full overflow-y-auto bg-gray-100 dark:bg-gray-800 flex flex-col">
      <DefaultHomeBanner
        @update:show-sidebar="$emit('update:showSidebar', $event)"
        class="text-3xl md:pl-8 pl-4 my-6 block"
      />
      <div v-if="dashboardData.isLoading && !dashboardData.data.value?.data" class="mx-4">
        <Skeleton class="mb-3" width="100%" height="50px" />
        <Skeleton class="mb-3" width="100%" height="50px" />
        <Skeleton class="mb-3" width="100%" height="50px" />
      </div>
      <ul v-else class="space-y-2 font-medium">
        <li v-for="item in items" :key="item.to">
          <RouterLink
            :to="item.to"
            class="flex items-center px-4 md:py-3 py-2 border-l-4 border-l-transparent text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition"
            active-class="bg-white dark:bg-gray-700 !border-l-red-600"
            exact
            @click="$emit('update:showSidebar', false)"
          >
            <component
              :is="mapIcon[item.icon]"
              aria-hidden="true"
              class="flex-shrink-0 w-7 h-7 text-gray-500 dark:text-gray-400"
            />
            <span class="ml-2 font-light">{{ item.title }}</span>
          </RouterLink>
        </li>
      </ul>
      <div :class="['plugin', enabled ? 'plugin--enabled' : 'plugin--disabled']">
        All plugins
        {{ enabled ? 'enabled' : 'disabled' }}
        <ToggleColor v-model="enabled" />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useGetDashboardData, useMutateToggleAllPlugin } from '@composables/api/useDashboardData';
import MDIDotsGrid from '~icons/mdi/dots-grid';
import MDICurrencyUsd from '~icons/mdi/currency-usd';
import MDICalendarCheck from '~icons/mdi/calendar-check';

defineProps<{ showSidebar: boolean }>();
defineEmits<{(e: 'update:showSidebar', value: string): void }>();

const enabled = ref(true);
const dashboardData = useGetDashboardData();
const mutation = useMutateToggleAllPlugin();

const mapIcon: Record<string, any> = {
  'icon-marketing': MDIDotsGrid,
  'icon-finance': MDICurrencyUsd,
  'icon-people': MDICalendarCheck,
};

const items = computed(() => Object.entries(dashboardData.data.value?.data.tabdata ?? {})
  .map(([key, value]: [string, any]) => ({
    title: value.title,
    icon: value.icon,
    to: `/${key}`,
  })));

watch(enabled, (t) => {
  // @ts-ignore
  mutation.mutate({ disabled: !t });
});
</script>

<style lang="postcss" scoped>
.plugin {
  @apply mt-auto dark:text-gray-200 p-6 font-light flex items-center w-full justify-between;

  &--enabled {
    background: linear-gradient(0deg, rgb(180 243 209) 0%, rgb(241 241 241 / 0%) 70%);
  }

  &--disabled {
    background: linear-gradient(0deg, rgb(255 204 204) 0%, rgb(241 241 241 / 0%) 70%);
  }
}
</style>
