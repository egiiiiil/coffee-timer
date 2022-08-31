import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'

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
			<div className='col-start-2 w-full flex flex-row-reverse justify-between items-start bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'>
				<div className='w-full flex items-center justify-between flex-col'>
					<section>
						<h1>
							<FaUser /> Register
						</h1>
						<p>Create the account:</p>
						<form onSubmit={onSubmit}>
							<label htmlFor='name'>Name:</label>
							<input
								type='text'
								id='name'
								name='username'
								value={username}
								placeholder='Enter your name'
								onChange={onChange}
							/>
							<label htmlFor='email'>Email:</label>
							<input
								type='email'
								id='email'
								name='email'
								value={email}
								placeholder='Enter your email'
								onChange={onChange}
							/>
							<label htmlFor='password'>Password:</label>
							<input
								type='password'
								id='password'
								name='password'
								value={password}
								placeholder='Enter your password'
								onChange={onChange}
							/>
							<label htmlFor='password2'>Retype Password:</label>
							<input
								type='password'
								id='password2'
								name='password2'
								value={password2}
								placeholder='Confirm your password'
								onChange={onChange}
							/>
							<button type='submit' className='bg-black text-white'>
								Submit
							</button>
						</form>
					</section>
				</div>
			</div>
		</>
	)
}

export default Register
