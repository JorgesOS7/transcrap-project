<script setup lang="ts">
import { MainSection, SelectLanguages, ContainerResult, ContainerInput, ChangeButton } from "."
import { useTranscrapAPI } from "../composables"
import { reactive, ref, watch } from "vue"
import AlertError from "./AlertError.vue";
const state = reactive({
  fromLanguage: 'en',
  toLanguage: 'pt',
  input: '',
})
const translation = ref('')
const errorMessage = ref('')
const { isLoading, getTranslation } = useTranscrapAPI()

const onClickTranslate = async () => {
  try {
    clearError()
    translation.value = ''
    const response = await getTranslation(state)
    if (response)
      translation.value = response.translation
  } catch (error: any) {
    if(error?.response) {
      const data = error.response.data
      errorMessage.value = data.message
    }
  }
}
const onClickChangeLanguage = () => {
  const to = state.toLanguage
  const from = state.fromLanguage
  state.toLanguage = from
  state.fromLanguage = to
}

const clearError = () => {
  errorMessage.value = ''
}
watch(state, () => {
  if (!state.input) {
    translation.value = ''
  }
}) 
</script>
<template>
    <MainSection>
      <div class="space-y-4">
      <AlertError :message="errorMessage" v-if="errorMessage"/>
      <div class="flex items-center justify-center gap-5">
        <SelectLanguages name="from-language" id="from-language" v-model="state.fromLanguage" />
        <ChangeButton @click="onClickChangeLanguage"/>
        <SelectLanguages name="to-language" id="to-language" v-model="state.toLanguage" />
      </div>
      <ContainerInput name="input-field" id="input-field" cols="30" rows="10"  v-model="state.input" @on-translate="onClickTranslate" :lang="state.fromLanguage" spellcheck="false" :is-loading="isLoading"/>
    </div>
    <ContainerResult :translation="translation" :is-loading="isLoading" />
  </MainSection>
</template>