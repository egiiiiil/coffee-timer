import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email, password } = formData
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}
	const onSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<div className='col-start-2 w-full flex flex-row-reverse justify-between items-start bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'>
				<div className='w-full flex items-center justify-between flex-col'>
					<section>
						<h1>
							<FaSignInAlt /> Login
						</h1>
						<p>Login to the account:</p>
						<form onSubmit={onSubmit}>
							<label for='email'>Email:</label>
							<input
								type='email'
								id='email'
								name='email'
								value={email}
								placeholder='Enter your email'
								onChange={onChange}
							/>
							<label for='password'>Password:</label>
							<input
								type='password'
								id='password'
								name='password'
								value={password}
								placeholder='Enter your password'
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

export default Login
