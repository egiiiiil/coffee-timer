import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})

	const { name, email, password, password2 } = formData
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
							<FaUser /> Register
						</h1>
						<p>Create the account:</p>
						<form onSubmit={onSubmit}>
							<label for='name'>Name:</label>
							<input
								type='text'
								id='name'
								name='name'
								value={name}
								placeholder='Enter your name'
								onChange={onChange}
							/>
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
							<label for='password2'>Retype Password:</label>
							<input
								type='password'
								id='password2'
								name='password2'
								value={password2}
								placeholder='Confirm your password'
								onChange={onChange}
							/>
							<button type='submit'>Submit</button>
						</form>
					</section>
				</div>
			</div>
		</>
	)
}

export default Register
