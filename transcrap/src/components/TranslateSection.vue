<script setup lang="ts">
import { MainSection, SelectLanguages, ContainerResult, ContainerInput, ChangeButton } from "."
import { useTranscrapAPI } from "../composables"
import { reactive, ref, watch } from "vue"
const state = reactive({
  fromLanguage: 'en',
  toLanguage: 'pt',
  input: '',
})
const translation = ref('')
const { isLoading, getTranslation } = useTranscrapAPI()

const onClickTranslate = async () => {
  const response = await getTranslation(state)
  if (response)
    translation.value = response.translation
}
const onClickChangeLanguage = () => {
  const to = state.toLanguage
  const from = state.fromLanguage
  state.toLanguage = from
  state.fromLanguage = to
}
watch(state, () => {
  if (!state.input) {
    translation.value = ''
  }
}) 
</script>
<template>
    <MainSection>
    <div class="space-y-5">
      <div class="flex items-center justify-center gap-5">
        <SelectLanguages name="from-language" id="from-language" v-model="state.fromLanguage" />
        <ChangeButton @click="onClickChangeLanguage"/>
        <SelectLanguages name="to-language" id="to-language" v-model="state.toLanguage" />
      </div>
      <ContainerInput name="input-field" id="input-field" cols="30" rows="10"  v-model="state.input" @on-translate="onClickTranslate" :lang="state.fromLanguage" :is-loading="isLoading"/>
    </div>
    <ContainerResult :translation="translation" :is-loading="isLoading" />
  </MainSection>
</template>