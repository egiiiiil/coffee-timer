import express from 'express'
import {
	getRecipes,
	postRecipe,
	updateRecipe,
	deleteRecipe,
} from '../controllers/recipeController.js'

const recipeRouter = express.Router()

recipeRouter.route('/').get(getRecipes).post(postRecipe)
recipeRouter.route('/:id').put(updateRecipe).delete(deleteRecipe)

export default recipeRouter
