import express from 'express'
import { getRecipes } from '../controllers/recipeController.js'

const recipeRouter = express.Router()

recipeRouter.route('/').get(getRecipes)

export default recipeRouter
