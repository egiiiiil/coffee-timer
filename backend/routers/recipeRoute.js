import express from 'express'
import {
	getRecipes,
	getOneRecipe,
	getMyRecipes,
	postRecipe,
	updateRecipe,
	deleteRecipe,
} from '../controllers/recipeController.js'
import { protect } from '../middleware/authMiddleware.js'

const recipeRouter = express.Router()

recipeRouter.route('/').get(getRecipes).post(protect, postRecipe)
recipeRouter.route('/me').get(protect, getMyRecipes)
recipeRouter
	.route('/:id')
	.get(protect, getOneRecipe)
	.put(protect, updateRecipe)
	.delete(protect, deleteRecipe)

export default recipeRouter
