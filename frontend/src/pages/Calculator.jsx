import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Content, DashboardContent } from '../styled/Content'

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
			<Content>
			{/* <div className='col-start-2 w-full flex flex-row-reverse justify-between items-start bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'> */}
				{/* <div className='w-full flex items-center justify-between flex-col'> */}
				<DashboardContent>
					<h1>Calculator</h1>
					<section>
						<CalculatorForm />
					</section>
				</DashboardContent>
			{/* </div> */}
			</Content>
		</>
	)
}

export default Calculator
