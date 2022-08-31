import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import Menu from './components/Menu'

import Calculator from './pages/Calculator'
import Feed from './pages/Feed'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'

function App() {
	return (
		<div className='h-screen w-screen grid grid-cols-3 bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100'>
			<Menu />
			<div className='w-auto' />
			<Routes>
				<Route path='/' element={<Feed />} />
				<Route path='/about' element={<About />} />
				<Route path='/calculator' element={<Calculator />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<NoMatch />} />
			</Routes>
			<ToastContainer />
			<div className='w-auto' />
		</div>
	)
}

export default App
