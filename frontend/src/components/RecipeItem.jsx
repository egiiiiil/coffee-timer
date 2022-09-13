import { useDispatch } from 'react-redux'
import {deleteRecipe} from '../features/recipe/recipeSlice'
import { FaTrashAlt } from 'react-icons/fa'
const RecipeItem = ({recipes}) => {
	const dispatch = useDispatch()
	return (
		<div>
			<h2>{recipes.name}</h2>
			<button onClick={() => dispatch(deleteRecipe(recipes._id))}><FaTrashAlt /></button>
			<p>{recipes.coffeeRatio}:{recipes.waterRatio}</p>
			<p>{recipes.coffeeMeasurement}:{recipes.waterMeasurement}</p>
			{recipes.timer ? <p>{recipes.timer}</p> : <p>no timer</p>}
			{recipes.method ? <p>{recipes.method}</p> : <p>V60</p>}
			{recipes.beans ? <p>{recipes.beans}</p> : <p>no beans</p>}
			{recipes.directions ? <p>{recipes.directions}</p> : <p>no directions</p>}
		</div>
	)
}
export default RecipeItem
