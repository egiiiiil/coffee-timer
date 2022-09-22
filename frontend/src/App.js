import React from 'react'

import styled from 'styled-components'

import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import Menu from './components/Menu'

import Calculator from './pages/Calculator'
import Feed from './pages/Feed'
import Recipe from './pages/Recipe'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'

import './fonts/RobotoFlex.ttf'

const ContainerDiv = styled.div`
	max-height: fit-content;
	width: 100vw;
	display: grid;
	background: linear-gradient(
		to right bottom,
		rgb(199, 210, 254),
		rgb(254, 202, 202),
		rgb(254, 249, 195)
	);

	grid-template-columns: auto 80% auto;
	@media (max-width: 576px) {
		grid-template-columns: 1em 1fr 1em;
	}
	grid-template-rows: min-content;
	@font-face {
		font-family: 'RobotoFlex';
		src: url('./fonts/RobotoFlex.ttf');
	}
	body {
		font-family: 'RobotoFlex', serif;
	}
	h1 {
		font-size: 2em;
	}
	h2 {
		font-size: 1.4em;
	}
	h3 {
	}
	h4 {
	}
	h5 {
	}
	h6 {
	}
	p {
		font-size: 1em;
	}
`

function App() {
	return (
		<ContainerDiv>
			<Menu />
			<Routes>
				<Route path='/' element={<Feed />} />
				<Route path='/about' element={<About />} />
				<Route path='/calculator' element={<Calculator />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/recipe/:id' element={<Recipe />} />
				<Route path='*' element={<NoMatch />} />
			</Routes>
			<ToastContainer />
		</ContainerDiv>
	)
}

export default App
