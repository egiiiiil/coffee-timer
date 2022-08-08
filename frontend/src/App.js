import './App.css'
import Menu from './components/Menu'
import Calculator from './components/Calculator'

function App() {
	return (
		<div className='grid grid-cols-3 bg-gradient-to-r from-cyan-500 to-blue-500'>
			<Menu />
			<div className='w-auto' />
			<Calculator />

			<div className='w-auto' />
		</div>
	)
}

export default App
