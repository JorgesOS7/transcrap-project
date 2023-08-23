import { Router } from "express";
import { translateRoutes } from "src/modules/translate/routes";


const router = Router()
router.get('/', (req,res) => res.json({ app: 'Transcrap API' }))
router.use(translateRoutes)
export { router as routes }