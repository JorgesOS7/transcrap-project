<script setup lang="ts">
import { useAttrs } from 'vue';
import { TranslateButton } from '.';
type ContainerProps = {
  modelValue: string;
  isLoading: boolean
}
type ContainerEmits = {
  (e: "update:modelValue", value: string ): void;
  (e: 'onTranslate', value: Event): void
}
defineProps<ContainerProps>()
const attrs = useAttrs()
const emit = defineEmits<ContainerEmits>()
const onInput = (ev: Event) => {
  const el = ev.target as HTMLTextAreaElement
  emit('update:modelValue', el.value)
}
const onClickTranslate = (ev: Event) => {
  emit('onTranslate', ev)
}
</script>

<template>
  <div class="relative">
    <textarea v-bind="attrs" placeholder="Write here" :value="modelValue" @input="onInput"
      class="resize-none rounded  border-gray-300 bg-gray-50 w-full shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"></textarea>
    <TranslateButton @click="onClickTranslate" :disabled="isLoading" />
  </div>
</template>