import "express-async-errors"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import { routes } from "./routes"
import { handleAppError, handleNotFoundRouteError } from "./app-errors"

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use(routes)
app.use(handleAppError)
app.use(handleNotFoundRouteError)