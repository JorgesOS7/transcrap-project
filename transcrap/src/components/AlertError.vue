<script setup lang="ts">
defineProps<{ message: string }>()
</script>

<template>
  <div class="p-2 border border-rose-300 bg-rose-50 rounded">
    <p class="text-sm font-medium text-rose-500">{{ message }}</p>
  </div>
</template>