<script setup lang="ts">
import { useAttrs } from 'vue';

const attrs = useAttrs()
const emit = defineEmits(['click'])
const onClick = (ev: Event) => {
  emit('click', ev)
}
</script>
<template>
    <div class="absolute bottom-4 right-4">
      <button v-bind="attrs" @click="onClick" class="py-2 px-4 bg-sky-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
          <path
            d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      </button>
    </div>
</template>