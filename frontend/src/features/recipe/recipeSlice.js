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
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

//Get user recipes
export const getEveryones = createAsyncThunk(
	'recipe/getEveryones',
	async (_, thunkAPI) => {
		try {
			return await recipeService.getAllRecipes()
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

//Get all recipes
export const getRecipes = createAsyncThunk(
	'recipe/getAll',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await recipeService.getRecipes(token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

//Get one recipe
export const getOneRecipe = createAsyncThunk(
	'recipe/getOne',
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await recipeService.getOneRecipe(id, token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	}
)

//Delete user recipe
export const deleteRecipe = createAsyncThunk(
	'recipe/delete',
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token
			return await recipeService.deleteRecipe(id, token)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
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
			.addCase(getEveryones.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getEveryones.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.recipes = action.payload
			})
			.addCase(getEveryones.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getRecipes.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getRecipes.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.recipes = action.payload
			})
			.addCase(getRecipes.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(getOneRecipe.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getOneRecipe.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.recipes = action.payload
			})
			.addCase(getOneRecipe.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
			.addCase(deleteRecipe.pending, (state) => {
				state.isLoading = true
			})
			.addCase(deleteRecipe.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.recipes = state.recipes.filter(
					(recipe) => recipe._id !== action.payload.id
				)
			})
			.addCase(deleteRecipe.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})
	},
})

export const { reset } = recipeSlice.actions
export default recipeSlice.reducer
