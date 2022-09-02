import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CalculatorForm from '../components/CalculatorForm'

function Calculator() {
	const navigate = useNavigate()
	const { user } = useSelector((state) => state.auth)

	useEffect(() => {
		if (!user) {
			navigate('/login')
		}
	}, [user, navigate])

	return (
		<>
			<div className='col-start-2 w-full flex flex-row-reverse justify-between items-start bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'>
				<div className='w-full flex items-center justify-between flex-col'>
					<h1>Dashboard</h1>
					<section>
						<h2>Welcome {user && user.username}</h2>
						<CalculatorForm />
					</section>
				</div>
			</div>
		</>
	)
}

export default Calculator
