// @desc		Get Recipes
// @route		GET /api/recipes
// @access	Private
const getRecipes = (req, res) => {
	res.status(200).json({ message: 'Get Recipes' })
}

export { getRecipes }
