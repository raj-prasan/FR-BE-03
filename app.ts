import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'

import { taskRouter } from "./routes/task.route.js"


const app = express()
app.use(cors())

app.use(express.json({limit: "16Kb"}))
app.use(cookieParser());

app.use("/tasks", taskRouter)

export {app};