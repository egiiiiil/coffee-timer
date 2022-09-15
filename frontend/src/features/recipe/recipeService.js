import axios from 'axios'

const API_URL = 'http://localhost:8080/api/recipes/'

// Create new recipe
const createRecipe = async (recipeData, token) => {
	recipeData = recipeData.formData
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.post(API_URL, recipeData, config)
	return response.data
}

// Get user recipes
const getRecipes = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.get(API_URL + 'me', config)

	return response.data
}
// Delete user recipe
const deleteRecipe = async (recipeId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.delete(API_URL + recipeId, config)

	return response.data
}

const recipeService = {
	createRecipe,
	getRecipes,
	deleteRecipe,
}

export default recipeService
