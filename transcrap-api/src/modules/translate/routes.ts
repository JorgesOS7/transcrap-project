import { Router } from "express";
import { translateModule } from ".";


const router = Router()
const module = translateModule()

router.get('/translate', (req,res) => module.index(req,res))

export { router as translateRoutes }