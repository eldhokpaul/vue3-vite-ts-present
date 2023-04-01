<template>
  <label :class="['relative inline-flex items-center', disabled ? 'cursor-not-allowed' : 'cursor-pointer']">
    <input type="checkbox" v-model="localModelValue" class="sr-only peer" checked :disabled="disabled">
    <div
      :class="[`w-11 h-6 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 bg-red-600 dark:bg-red-700`]"
    />
  </label>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';

const props = defineProps<{ modelValue: boolean; disabled?: boolean }>();
const emit = defineEmits<{(e: 'update:modelValue', value: boolean): void }>();

const localModelValue = useVModel(props, 'modelValue', emit);
</script>
