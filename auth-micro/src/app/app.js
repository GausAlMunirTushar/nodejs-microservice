import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { routes } from '../routes/index.js'
const app = express()

dotenv.config()


// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Routes
app.use(routes)

app.get('/', (req, res) => {
  res.json({ message: 'Hello from auth-micro' })
})

export default app