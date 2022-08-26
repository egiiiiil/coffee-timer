import { Link } from 'react-router-dom'

const Menu = () => {
	return (
		<header className='flex col-span-3'>
			<nav>
				<ul>
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
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/register'>Register</Link>
					</li>
					<li>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
export default Menu
