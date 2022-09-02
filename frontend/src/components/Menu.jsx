import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Menu = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.auth)

	const onLogout = () => {
		dispatch(logout())
		dispatch(reset())
		navigate('/')
	}

	return (
		<header className='flex col-span-3'>
			<nav>
				<ul className='flex flex-row items-center'>
					<li>
						<Link to='/'>
							<img
								src={process.env.PUBLIC_URL + '/img/logo.svg'}
								alt='Logotyoe & link home'
							/>
						</Link>
					</li>

					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/calculator'>Calculator</Link>
					</li>
					{user ? (
						<>
							<li>
								<button onClick={onLogout}>
									<FaSignOutAlt />
									Logout
								</button>
							</li>
						</>
					) : (
						<>
							<li>
								<Link to='/login'>
									<FaSignInAlt />
									Login
								</Link>
							</li>
							<li>
								<Link to='/register'>
									<FaUser />
									Register
								</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	)
}
export default Menu
