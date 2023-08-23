import { Request, Response } from "express";
import { TranslateService } from "./translate.service";

export class TranslateController {
  constructor(private translateService: TranslateService) {}

  async index(req: Request, res: Response) {
    const { toLanguage, fromLanguage, input } = req.query as any;
    const response = await this.translateService.translate({
      fromLanguage,
      toLanguage,
      input,
    });
    return res.json({ translation: response })
  }
}
