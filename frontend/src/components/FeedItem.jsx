import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../features/recipe/recipeSlice'
import { FaCoffee } from 'react-icons/fa'
import { Route,
 				 Routes,
				 Link } from 'react-router-dom'
import { DashboardCard } from '../styled/Content'
import brewMethod from '../utils/brewMethod'

const FeedItem = ({recipes}) => {
	
	return (
		<DashboardCard>
			<Link to={`recipe/${recipes._id}`}>
				<div>
					<h2>{recipes.name}</h2>
				</div>
				<p>{recipes.coffeeRatio}:{recipes.waterRatio}</p>
				<p>{recipes.coffeeMeasurement}:{recipes.waterMeasurement}</p>
				{recipes.timer ? <p>{recipes.timer}</p> : <p>no timer</p>}
				{brewMethod(recipes.method)}
				{recipes.beans ? <p>{recipes.beans}</p> : <p>no beans</p>}
				{recipes.directions ? <p>{recipes.directions}</p> : <p>no directions</p>}
			</Link>
		</DashboardCard>
	)
}
export default FeedItem
