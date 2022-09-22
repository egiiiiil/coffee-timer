import collections from '../config/db.js'
import mongodb from 'mongodb'

const recipeCollection = collections.recipe
const userCollection = collections.users

// @desc		Get Recipes
// @route		GET /api/recipes
// @access	Public
const getRecipes = async (req, res) => {
	/* 	let filter = {}
	const query = req.query
	if (query.category) {
		filter = { type: query.category }
	} */
	try {
		const items = await recipeCollection.find({}).toArray()
		res.status(200).json(items)
	} catch (err) {
		console.log(err.message)
	}
}

// @desc		Get One Recipe
// @route 	GET /api/recipes:id
// @access	Private
const getOneRecipe = async (req, res) => {
	const recipeId = req.params.id
	try {
		const recipe = await recipeCollection.findOne({
			_id: new mongodb.ObjectId(recipeId),
		})
		if (!recipe) {
			res.status(404)
			throw new Error('Recipe not found')
		}
		res.status(200).json(recipe)
	} catch (err) {
		console.log(err.message)
	}
	//res.status(200).json({ message: `Delete Recipe ${req.params.id}` })
}

// @desc		Get My Recipes
// @route		GET /api/recipes
// @access	Private
const getMyRecipes = async (req, res) => {
	try {
		const items = await recipeCollection
			.find({ author: new mongodb.ObjectId(req.user?._id) })
			.toArray()
		console.log(items)
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
			coffeeRatio,
			waterRatio,
			coffeeMeasurement,
			waterMeasurement,
			timer,
			method,
			directions,
			name,
			beans,
		} = req.body

		const recipe = await recipeCollection.insertOne({
			coffeeRatio: Number(coffeeRatio),
			waterRatio: Number(waterRatio),
			coffeeMeasurement: Number(coffeeMeasurement),
			waterMeasurement: Number(waterMeasurement),
			timer: timer,
			method: method,
			directions: directions,
			author: new mongodb.ObjectId(req.user?._id),
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
			coffeeRatio,
			waterRatio,
			coffeeMeasurement,
			waterMeasurement,
			timer,
			method,
			directions,
			name,
			beans,
		} = req.body

		const user = await userCollection.find({
			_id: new mongodb.ObjectId(req.user._id),
		})

		// Check for user
		if (!user) {
			res.status(401)
			throw new Error('User not found')
		}

		// Make sure that the logged in user maches the recipe author
		if (recipe.author.toString() !== req.user._id.toString()) {
			res.status(401)
			throw new Error('User not authorised')
		}

		const updatedRecipe = await recipeCollection.findOneAndUpdate(
			{ _id: new mongodb.ObjectId(recipeId) },
			{
				$set: {
					coffeeRatio: Number(coffeeRatio),
					waterRatio: Number(waterRatio),
					coffeeMeasurement: Number(coffeeMeasurement),
					waterMeasurement: Number(waterMeasurement),
					timer: timer,
					method: method,
					directions: directions,
					author: new mongodb.ObjectId(req.user?._id),
					name: name,
					beans: beans,
				},
			}
		)

		res.status(200).json(updatedRecipe)
	} catch (err) {
		console.log(err.message)
	}
}

// @desc		Delete Recipe
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

		const user = await userCollection.find({
			_id: new mongodb.ObjectId(req.user._id),
		})

		// Check for user
		if (!user) {
			res.status(401)
			throw new Error('User not found')
		}

		// Make sure that the logged in user maches the recipe author
		if (recipe.author.toString() !== req.user._id.toString()) {
			res.status(401)
			throw new Error('User not authorised')
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

export {
	getRecipes,
	getOneRecipe,
	getMyRecipes,
	postRecipe,
	updateRecipe,
	deleteRecipe,
}
