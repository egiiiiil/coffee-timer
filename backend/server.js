import express from 'express'
import 'dotenv/config'
import 'colors'
import cors from 'cors'
import recipeRouter from './routers/recipeRoute.js'
import userRouter from './routers/userRoute.js'
import { errorHandler } from './middleware/errorMiddleware.js'

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(
	cors({
		origin: 'http://localhost:3000',
	})
)

app.use('/api/recipes', recipeRouter)
app.use('/api/users', userRouter)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`.green))
