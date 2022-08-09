import { Routes, Route } from 'react-router-dom'

import './App.css'
import Menu from './components/Menu'
import Calculator from './pages/Calculator'
import Feed from './pages/Feed'
import About from './pages/About'
import NoMatch from './pages/NoMatch'

function App() {
	return (
		<div className='grid grid-cols-3 bg-gradient-to-r from-cyan-500 to-blue-500'>
			<Menu />
			<div className='w-auto' />
			<Routes>
				<Route path='/' element={<Feed />} />
				<Route path='/about' element={<About />} />
				<Route path='/calculator' element={<Calculator />} />
				<Route path='*' element={<NoMatch />} />
			</Routes>

			<div className='w-auto' />
		</div>
	)
}

export default App
