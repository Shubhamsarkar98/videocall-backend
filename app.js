import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
const app = express()
//cors add in express 
app.use(cors({
    origin: process.env.CORS_Origin,
    credentials: true
}))
//app json
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended }))
app.use(express.static("public"))
app.use(cookieParser())
export { app }