<script setup lang="ts">
import { Spinner, CopyButton } from '.';
type ContainerResultProps = {
  translation: string;
  isLoading: boolean;
}
defineProps<ContainerResultProps>()
</script>
<template>
  <div class="relative flex-1 rounded-xl bg-sky-50 p-4">
    <p class="lg:text-xl font-normal">
      {{ translation }}
    </p>
    <Spinner v-if="isLoading" />
    <CopyButton v-if="translation" :result="translation"/>
  </div>
</template>