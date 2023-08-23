import { ref } from "vue";
import { useAxios } from "./useAxios";

type TranslationParams = {
  toLanguage: string;
  fromLanguage: string;
  input: string;
};

type TranslationResponse = {
  translation: string
}
export const useTranscrapAPI = () => {
  const axios = useAxios();
  const isLoading = ref(false)
  const toggleLoading = () => {
    isLoading.value = !isLoading.value
  }
  const getTranslation = async (params: TranslationParams) => {
    try {
      toggleLoading()
      const response = await axios.get<TranslationResponse>("/translate", { params });
      return response.data;
    } catch (error: any) {
      if (error?.response) {
        console.log(error.response);
      }
    } finally {
      toggleLoading()
    }
  };
  return { isLoading, getTranslation };
};
