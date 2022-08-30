import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

const Menu = () => {
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
				</ul>
			</nav>
		</header>
	)
}
export default Menu
