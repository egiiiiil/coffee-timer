import collections from '../config/db.js'
import mongodb from 'mongodb'

const recipeCollection = collections.recipe

// @desc		Get Recipes
// @route		GET /api/recipes
// @access	Private
const getRecipes = async (req, res) => {
	let filter = {}
	const query = req.query
	if (query.category) {
		filter = { type: query.category }
	}
	try {
		const items = await recipeCollection.find({}).toArray()
		res.status(200).json(items)
	} catch (err) {
		console.log(err.message)
	}
}

// @desc		Post Recipes
// @route		POST /api/recipes
// @access	Private
const postRecipe = async (req, res) => {
	if (!req.body) {
		res.status(400)
		throw new Error('Please add a post')
	}
	console.log('B', req.body)
	try {
		const {
			ratio,
			coffeeToWater,
			timer,
			method,
			directions,
			author,
			name,
			beans,
		} = req.body
		const recipe = await recipeCollection.insertOne({
			ratio: ratio,
			coffeeToWater: coffeeToWater,
			timer: timer,
			method: method,
			directions: directions,
			author: author,
			name: name,
			beans: beans,
		})
		res.status(200).json(recipe)
	} catch (err) {
		console.log(err.message)
	}
}

// @desc		Update goal
// @route 	PUT /api/recipes:id
// @access	Private
const updateRecipe = async (req, res) => {
	const recipeId = req.params.id
	const recipeBody = req.body
	try {
		const recipe = await recipeCollection.findOne({
			_id: new mongodb.ObjectId(recipeId),
		})
		if (!recipe) {
			res.status(400)
			throw new Error('Recipe not found')
		}
		const {
			ratio,
			coffeeToWater,
			timer,
			method,
			directions,
			author,
			name,
			beans,
		} = req.body
		const updatedRecipe = await recipeCollection.findOneAndUpdate(
			{ _id: new mongodb.ObjectId(recipeId) },
			{
				$set: {
					ratio: ratio,
					coffeeToWater: coffeeToWater,
					timer: timer,
					method: method,
					directions: directions,
					author: author,
					name: name,
					beans: beans,
				},
				upsert: true,
				returnNewDocument: true,
			}
		)

		res.status(200).json(updatedRecipe)
	} catch (err) {
		console.log(err.message)
	}
}

// @desc		Delete goal
// @route 	DELETE /api/recipes:id
// @access	Private
const deleteRecipe = async (req, res) => {
	const recipeId = req.params.id
	try {
		const recipe = await recipeCollection.findOne({
			_id: new mongodb.ObjectId(recipeId),
		})
		if (!recipe) {
			res.status(404)
			throw new Error('Recipe not found')
		}

		const deletedRecipe = await recipeCollection.deleteOne({
			_id: new mongodb.ObjectId(recipeId),
		})

		res.status(200).json(deletedRecipe)
	} catch (err) {
		console.log(err.message)
	}
	//res.status(200).json({ message: `Delete Recipe ${req.params.id}` })
}

export { getRecipes, postRecipe, updateRecipe, deleteRecipe }
