import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import { Content, Form } from '../styled/Content'
import Spinner from '../components/Spinner'

import { FaSignInAlt } from 'react-icons/fa'

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	)

	useEffect(() => {
		if (isError) {
			toast.error(message)
		}
		if (isSuccess || user) {
			navigate('/dashboard') // change to dashboard later
		}
		dispatch(reset)
	}, [user, isError, isSuccess, message, navigate, dispatch])

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}
	const onSubmit = (e) => {
		e.preventDefault()

		const userData = { email, password }
		dispatch(login(userData))
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<>
			<Content>
			{/* <div className='col-start-2 w-full flex flex-row-reverse justify-between items-start bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'> */}
				<div className='w-full flex items-center justify-between flex-col'>
					<section>
						<h1>
							<FaSignInAlt /> Login
						</h1>
						<p>Login to the account:</p>
						<Form onSubmit={onSubmit}>
							<label htmlFor='email'>Email:</label>
							<input
								className='form__input--big'
								type='email'
								id='email'
								name='email'
								value={email}
								placeholder='Enter your email'
								onChange={onChange}
							/>
							<label htmlFor='password'>Password:</label>
							<input
								className='form__input--big'
								type='password'
								id='password'
								name='password'
								value={password}
								placeholder='Enter your password'
								onChange={onChange}
							/>
							<button className='form__input--button' type='submit'>
								Submit
							</button>
						</Form>
					</section>
				</div>
			{/* </div> */}
			</Content>
		</>
	)
}

export default Login
