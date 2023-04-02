<template>
  <Card>
    <div :class="['flex gap-5 justify-between', disabled ? 'dark:opacity-30 gcm -40' : '']">
      <div class="font-light">
        <div class="mb-4 text-lg dark:text-gray-100">{{ title }}</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">
          {{ description }}
        </div>
      </div>
      <div class="flex flex-col">
        <ToggleColor
          :disabled="disabled || mutation.isLoading.value"
          class="mb-2"
          :model-value="localActive"
          @update:model-value="updateActive($event)"
        />
        <Skeleton class="w-11" height="20px" v-if="mutation.isLoading.value" />
        <span v-else :class="['font-light text-xs', localActive ? 'text-green-600' : 'text-red-600']">
          {{ localActive ? 'Allowed' : 'Blocked' }}
        </span>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core';
import { useMutatePlugin } from '@/composables/api/useDashboardData';

const props = withDefaults(
  defineProps<{
    title: string
    description: string
    disabled?: boolean
    active?: boolean
    name: string
    tabName: string
  }>(),
  { active: true },
);
const emit = defineEmits<{(e: 'update:modelValue', value: boolean): void
  (e: 'update:active', value: boolean): void
}>();

const localActive = useVModel(props, 'active', emit);

const mutation = useMutatePlugin();

function updateActive(active: boolean) {
  // @ts-ignore
  mutation.mutate({ plugin: props.name, active, tab: props.tabName });
}
</script>
