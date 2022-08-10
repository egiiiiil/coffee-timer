import collections from '../config/db.js'

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
const postRecipe = (req, res) => {
	if (!req.body.text) {
		res.status(400)
		throw new Error('Please add a text field')
	}
	res.status(200).json({ message: 'Set Recipes' })
}

// @desc		Update goal
// @route 	PUT /api/recipes:id
// @access	Private
const updateRecipe = (req, res) => {
	res.status(200).json({ message: `Update Recipe ${req.params.id}` })
}

// @desc		Delete goal
// @route 	DELETE /api/recipes:id
// @access	Private
const deleteRecipe = (req, res) => {
	res.status(200).json({ message: `Delete Recipe ${req.params.id}` })
}

export { getRecipes, postRecipe, updateRecipe, deleteRecipe }
