<script setup lang="ts">
// @ts-ignore
import ISO from "iso-639-1"
import { useAttrs } from "vue";
defineProps<{ modelValue: string}>()
const locales = ISO.getAllCodes().map((code: string) => ({ code, name: ISO.getName(code) }))
const attrs = useAttrs()
const emit = defineEmits<{(e: "update:modelValue", value: string ): void }>()
const onChange = (ev: Event) => {
  const el = ev.target as HTMLSelectElement
  emit('update:modelValue', el.value)
}
</script>

<template>
  <select
    class="rounded-xl border-gray-300 text-sm shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
    v-bind="attrs"
    :value="modelValue"
    @change="onChange"
    >
    <option v-for="locale in locales" :key="locale.code" :value="locale.code">
      {{ locale.name }}
    </option>
  </select>
</template>