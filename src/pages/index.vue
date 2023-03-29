<template>
  <div>
    Home
    <h1 class="text-3xl font-bold underline">
      Hello world!
      {{ a }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
const a = ref(2)
</script>