import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { Content, Form } from '../styled/Content'
import Spinner from '../components/Spinner'

import { register, reset } from '../features/auth/authSlice'

function Register() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
	})

	const { username, email, password, password2 } = formData

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
			navigate('/dashboard')
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

		if (password !== password2) {
			toast.error('Passwords do not match')
		} else {
			const userData = {
				username,
				email,
				password,
			}
			dispatch(register(userData))
		}
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
							<FaUser /> Register
						</h1>
						<p>Create the account:</p>
						<Form onSubmit={onSubmit}>
							<label htmlFor='name'>Name:</label>
							<input
								className='form__input--big'
								type='text'
								id='name'
								name='username'
								value={username}
								placeholder='Enter your name'
								onChange={onChange}
							/>
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
							<label htmlFor='password2'>Retype Password:</label>
							<input
							className='form__input--big'
								type='password'
								id='password2'
								name='password2'
								value={password2}
								placeholder='Confirm your password'
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

export default Register
