import { Link } from 'react-router-dom'

const Menu = () => {
	return (
		<header className='flex col-span-3'>
			<nav>
				<ul>
					<li>
						<img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt='logo' />
					</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/calculator'>Calculator</Link>
					</li>
					<li>Login</li>
				</ul>
			</nav>
		</header>
	)
}
export default Menu
