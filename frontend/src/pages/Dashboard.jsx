import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import RecipeItem from '../components/RecipeItem'
//import { getRecipes, reset } from '../features/recipe/recipeSlice'
import { getRecipes, reset } from '../features/recipe/recipeSlice'

function Dashboard() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.auth)
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
		if (!user) {
			navigate('/login')
		}

		dispatch(getRecipes()) //31:47, error

		return () => {
			dispatch(reset())
		}
	}, [user, navigate, isError, message, dispatch])
	if(isLoading) {
		return <Spinner />
	}
	return (
		<>
			<div className='col-start-2 w-full flex flex-row-reverse justify-between items-start bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'>
				<div className='w-full flex items-center justify-between flex-col'>
					<h1>Dashboard</h1>
						<h2>Welcome {user && user.username}</h2>
					<section>


						
						{recipes.length > 0 ? (
						<>
							{recipes.map((recipes, i) => (<RecipeItem key={recipes._id} recipes={recipes}/>))} 
						</>
						) : (<h3>No recipes</h3>) }
					</section>
				</div>
			</div>
		</>
	)
}

export default Dashboard
