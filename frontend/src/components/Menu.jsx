import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser, FaCalculator } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { Header, Navigation, Ul } from '../styled/Navigation'

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
		<Header>
			<Navigation>
				<Ul>
					<li>
						<Link to='/'>
							<img
								src={process.env.PUBLIC_URL + '/img/logo.svg'}
								alt='Logotyoe & link home'
							/>
						</Link>
					</li>


					<li>
						<Link to='/calculator'>
							<FaCalculator />
							Calculator
						</Link>
					</li>
					{user ? (
						<>
							<li>
								<button onClick={onLogout}>
									<FaSignOutAlt />
									Logout
								</button>
							</li>
							<li>
								<Link to='/dashboard'>
									<FaUser />
									User
								</Link>
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
				</Ul>
			</Navigation>
		</Header>
	)
}
export default Menu
