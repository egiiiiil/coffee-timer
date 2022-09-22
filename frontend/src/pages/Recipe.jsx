import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";
import {Content, DashboardCardContainer, DashboardContent} from '../styled/Content'
import Spinner from '../components/Spinner'
import FeedItem from '../components/FeedItem'
//import { getRecipes, reset } from '../features/recipe/recipeSlice'
import { getOneRecipe, reset } from '../features/recipe/recipeSlice'

function Recipe() {

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { id } = useParams();
	console.log(id)
	const { 
		recipes, 
		isLoading, 
		isError, 
		message 
	} = useSelector((state) => state.recipes)
	console.log(recipes)


	useEffect(() => {
		if(isError) {
			console.log(message)
		}


		dispatch(getOneRecipe(id)) 

		return () => {
			dispatch(reset())
		}
	}, [navigate, isError, message, dispatch])
	if(isLoading) {
		return <Spinner />
	}
	return (
		<>
			<Content>
			{/* <div className='col-start-2 w-full flex flex-row-reverse justify-between items-start bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'> */}
				<DashboardContent>

				<h1>{recipes.name}</h1>

			<p>{recipes.coffeeRatio}:{recipes.waterRatio}</p>
			<p>{recipes.coffeeMeasurement}:{recipes.waterMeasurement}</p>
			{recipes.timer ? <p>{recipes.timer}</p> : <p>no timer</p>}
			{recipes.beans ? <p>{recipes.beans}</p> : <p>no beans</p>}
			{recipes.directions ? <p>{recipes.directions}</p> : <p>no directions</p>}
				</DashboardContent>
			{/* </div> */}
			</Content>
		</>
	)
}

export default Recipe