import express, { Express } from "express"
import "express-async-errors"
import dotenv from "dotenv"
import peopleRouter from "./routes/peopleRoutes"
import { errorHandler } from "./middlewares/errorHandler"
dotenv.config()

const app: Express = express()
app.use(express.json())
app.use(peopleRouter)
app.use(errorHandler)

const port: number = Number(process.env.PORT) || 5000
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))