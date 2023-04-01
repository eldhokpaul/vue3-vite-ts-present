<template>
  <aside
    :class="[
      'fixed top-0 left-0 z-40 w-72 h-screen transition-transform sm:translate-x-0',
      showSidebar ? 'transform-none' : '-translate-x-full',
    ]"
    aria-label="Sidebar"
  >
    <div class="h-full overflow-y-auto bg-gray-100 dark:bg-gray-800">
      <DefaultHomeBanner @update:show-sidebar="$emit('update:showSidebar', $event)" class="text-3xl md:pl-8 pl-4 my-6 block" />
      <ul class="space-y-2 font-medium">
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
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{ showSidebar: boolean }>();
defineEmits<{(e: 'update:showSidebar', value: string): void }>();

const mapIcon: Record<string, any> = {
  'icon-marketing': defineAsyncComponent(() => import('~icons/mdi/dots-grid')),
  'icon-finance': defineAsyncComponent(() => import('~icons/mdi/currency-usd')),
  'icon-personal': defineAsyncComponent(() => import('~icons/mdi/calendar-check')),
};

// TODO: remove static data
const items = ref([
  {
    title: 'Marketing',
    icon: 'icon-marketing',
    to: '/marketing',
  },
  {
    title: 'Finance',
    icon: 'icon-finance',
    to: '/finance',
  },
  {
    title: 'Personal',
    icon: 'icon-personal',
    to: '/personal',
  },
]);
</script>
