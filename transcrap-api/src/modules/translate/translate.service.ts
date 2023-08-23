import puppeteer from "puppeteer";
import { AppError } from "src/shared/app-errors";

type TranslateParams = {
  toLanguage: string, 
  fromLanguage: string;
  input: string
}
export class TranslateService {

  async translate(params: TranslateParams) {
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-sync',
        '--ignore-certificate-errors'
      ],
      headless: 'new'
    })
    const page = await browser.newPage()
    await page.goto(`https://translate.google.com/m?sl=${params.fromLanguage}&tl=${params.toLanguage}`)
    const input = params.input.replaceAll(/\n/g, '')
    await page.type('.input-field', input, { delay: 100 })
    await page.keyboard.press('Enter')
    const resultContainer = '.result-container'
    await page.waitForSelector(resultContainer)
    const selector = await page.$(resultContainer)
    if(selector) {
      const result = await selector.evaluate(el => el.textContent)
      if(!result) throw new AppError("We couldn't translate for you")
      await page.close()
      await browser.close()
      return result
    }
    await page.close()
    await browser.close()
    throw new AppError('The selector is not found', 500)
  }
}