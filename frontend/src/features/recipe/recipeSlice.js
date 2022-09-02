import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import recipeService from '../recipe/recipeService'

const initialState = {
	recipes: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
}

//Create new recipe
export const createRecipe = createAsyncThunk(
	'recipe/create',
	async (recipeData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await recipeService.createRecipe(recipeData, token)
		} catch (error) {
			const message =
				(error.response && error.data && error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

export const recipeSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createRecipe.pending, (state) => {
				state.isLoading = true
			})
			.addCase(createRecipe.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.recipes.push(action.payload)
			})
			.addCase(createRecipe.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset } = recipeSlice.actions
export default recipeSlice.reducer
