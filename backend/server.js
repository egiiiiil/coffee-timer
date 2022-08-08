import express from 'express'
import 'dotenv/config'
import recipeRouter from './routers/recipeRoute.js'
import { errorHandler } from './middleware/errorMiddleware.js'

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/recipes', recipeRouter)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
