<template>
  <div class="flex items-center p-2 justify-between border-b dark:border-b-gray-800 md:hidden">
    <button
      type="button"
      aria-controls="logo-sidebar"
      @click="$emit('update:showSidebar', true)"
      class="header-icon"
    >
      <span class="sr-only">Open sidebar</span>
      <i-mdi-menu class="w-6 h-6" />
    </button>

    <DefaultHomeBanner @update:show-sidebar="$emit('update:showSidebar', $event)" class="text-lg" />

    <button
      type="button"
      aria-controls="theme"
      @click="isDark ? setLight() : setDark()"
      class="header-icon"
    >
      <span class="sr-only">Change theme</span>
      <i-mdi-theme-light-dark class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import useDarkMode from '@composables/useDarkMode';

defineProps<{ showSidebar: boolean }>();
defineEmits<{(e: 'update:showSidebar', value: string): void }>();

const { isDark, setDark, setLight } = useDarkMode();
</script>

<style lang="postcss" scoped>
.header-icon {
  @apply p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700;
}
</style>
