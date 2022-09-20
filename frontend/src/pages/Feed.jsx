import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {Content, DashboardCardContainer, DashboardContent} from '../styled/Content'
import Spinner from '../components/Spinner'
import FeedItem from '../components/FeedItem'
//import { getRecipes, reset } from '../features/recipe/recipeSlice'
import { getEveryones, reset } from '../features/recipe/recipeSlice'

function Dashboard() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { 
		recipes, 
		isLoading, 
		isError, 
		message 
	} = useSelector((state) => state.recipes)



	useEffect(() => {
		if(isError) {
			console.log(message)
		}


		dispatch(getEveryones()) //31:47, error

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
					<h1>Feed</h1>
					<DashboardCardContainer>


						
						{recipes.length > 0 ? (
						<>
							{recipes && recipes.map((recipes, i) => (<FeedItem key={recipes._id} recipes={recipes}/>))} 
						</>
						) : (<h3>No recipes</h3>) }
					</DashboardCardContainer>
				</DashboardContent>
			{/* </div> */}
			</Content>
		</>
	)
}

export default Dashboard
