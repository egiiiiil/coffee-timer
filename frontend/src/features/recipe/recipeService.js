import axios from 'axios'

const API_URL = 'http://localhost:8080/api/recipes/'

// Create new recipe
const createRecipe = async (recipeData, token) => {
	console.log('service', recipeData.formData)
	recipeData = recipeData.formData
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.post(API_URL, recipeData, config)

	return response.data
}

const recipeService = {
	createRecipe,
}

export default recipeService
