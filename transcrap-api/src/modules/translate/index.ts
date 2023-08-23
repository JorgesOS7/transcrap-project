import { TranslateController } from "./translate.controller"
import { TranslateService } from "./translate.service"


export const translateModule = () => {
  const service = new TranslateService()
  const controller = new TranslateController(service)
  return controller
}