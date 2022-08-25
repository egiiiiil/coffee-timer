import express from 'express'
import {
	registerUser,
	loginUser,
	getMe,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const userRouter = express.Router()

userRouter.route('/').post(registerUser)
userRouter.route('/login').post(loginUser)
userRouter.route('/me').get(protect, getMe)

export default userRouter
//
