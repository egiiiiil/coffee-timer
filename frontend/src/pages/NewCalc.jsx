import { useState, useEffect } from 'react'
// import sendToDB from '../utils/sendToDB.js'

//import Ratio from '../components/Ratio.js'
//import Measurement from '../components/Measurement.js'
import ExtraInfo from '../components/ExtraInfo.jsx'
import LikeButton from '../components/LikeButton.jsx'
import SaveButton from '../components/SaveButton.jsx'

function Calculator() {
	// const [form, setForm] = useState({
	// 	ratio: [1, 16],
	// 	coffeeToWater: [16, 256],
	// 	timer: '04:00',
	// 	method: 'v60',
	// 	directions: '',
	// 	author: 'egiiiiil',
	// 	name: "Egil's Standard",
	// 	beans: '3rd wave coffee',
	// })
	// console.log('bbbb', form.ratio[0])
	const [coffeeRatio, setCoffeeRatio] = useState(1)
	const [waterRatio, setWaterRatio] = useState(16)

	const [coffeeMeasurement, setCoffeeMeasurement] = useState(16)
	const [waterMeasurement, setWaterMeasurement] = useState(256)

	const [timer, setTimer] = useState('04:00')
	const [method, setMethod] = useState('v60')

	const [comment, setComment] = useState('')

	// const [saveRecipe, setSaveRecipe] = useState(sendToDB)

	const coffeeRatioInputValue = (e) => {
		e.preventDefault()
		setCoffeeRatio(e.target.value)
	}
	const waterRatioInputValue = (e) => {
		e.preventDefault()
		setWaterRatio(e.target.value)
	}

	const coffeeMeasurementInputValue = (e) => {
		e.preventDefault()
		setCoffeeMeasurement(e.target.value)
	}
	const waterMeasurementInputValue = (e) => {
		e.preventDefault()
		let waterMeasurementInput = (waterRatio / coffeeRatio) * coffeeMeasurement
		setWaterMeasurement(waterMeasurementInput.toFixed(2))
	}
	const commentInputValue = (e) => {
		e.preventDefault()
		setComment(e.target.value)
	}
	const timerInputValue = (e) => {
		e.preventDefault()
		setTimer(e.target.value)
	}
	const methodInputValue = (e) => {
		e.preventDefault()
		setMethod(e.target.value)
	}
	// const saveRecipeValue = (e) => {
	// 	e.preventDefault()
	// 	setSaveRecipe(setSaveRecipe)
	// 	console.log(saveRecipe)
	// }

	const onSubmit = (e) => {
		e.preventDefault()
		// postRecipe({
		// 	coffeeRatio,
		// 	waterRatio,
		// 	coffeeMeasurement,
		// 	waterMeasurement,
		// 	comment,
		// 	timer,
		// 	method,
		// })
		fetch('http://localhost:8080/api/recipes', {
			method: 'POST',
			body: {
				ratio: [4, 4],
				coffeeToWater: [4, 4],
				timer: '04:00',
				method: 'method',
				directions: 'comment',
				author: 'egiiiiil',
				name: "Egil's Standard",
				beans: '3rd wave coffee',
			},
			// body: {
			// 	ratio: [coffeeRatio, waterRatio],
			// 	coffeeToWater: [coffeeMeasurement, waterMeasurement],
			// 	timer: timer,
			// 	method: method,
			// 	directions: comment,
			// 	author: 'egiiiiil',
			// 	name: "Egil's Standard",
			// 	beans: '3rd wave coffee',
			// },
		})
		console.log(`
		${coffeeRatio}, 
		${waterRatio}, 
		${coffeeMeasurement}, 
		${waterMeasurement}, 
		${comment}, 
		${timer}, 
		${method}`)
	}
	useEffect(() => {
		console.log(`Coffee R: ${coffeeRatio}`)
	}, [coffeeRatio])
	useEffect(() => {
		console.log(`Water R: ${waterRatio}`)
	}, [waterRatio])
	useEffect(() => {
		console.log(`Coffee M: ${coffeeMeasurement}`)
	}, [coffeeMeasurement])
	useEffect(() => {
		console.log(`Water M: ${waterMeasurement}`)
	}, [waterMeasurement])
	useEffect(() => {
		console.log(`Comment is: ${comment}`)
	}, [comment])
	useEffect(() => {
		console.log(`Timer is: ${timer}`)
	}, [timer])
	useEffect(() => {
		console.log(`Method is: ${method}`)
	}, [method])
	// useEffect(() => {
	// 	console.log(`Saved valuie is: ${saveRecipe}`)
	// }, [saveRecipe])

	return (
		<>
			<div className='col-start-2 w-full flex flex-col justify-between items-start bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'>
				{/* <LikeButton /> */}
				<form
					onSubmit={onSubmit}
					className='w-full flex items-center justify-between flex-col'
				>
					{/* <Ratio
						coffeeRatio={coffeeRatio}
						waterRatio={waterRatio}
						coffeeRatioInputValue={coffeeRatioInputValue}
						waterRatioInputValue={waterRatioInputValue}
					/> */}

					<div className='w-full [&>*]:mb-4'>
						<h2>Ratio</h2>
						<div className='flex items-center flex-row justify-between'>
							{/* <form className='w-40 flex items-center justify-between flex-row'> */}
							<label className='hidden h-0 w-0'>Coffe</label>
							<input
								className='h-10 w-28 bg-white p-5 rounded-xl text-center'
								placeholder='Coffee'
								value={coffeeRatio}
								id='coffeeRatioInput'
								name='coffeeRatioInput'
								onChange={coffeeRatioInputValue}
								type='number'
							></input>
							<span>:</span>
							<label className='hidden h-0 w-0'>Water</label>
							<input
								className='h-10 w-28 bg-white p-5 rounded-xl text-center'
								placeholder='Water'
								value={waterRatio}
								id='waterRatioInput'
								name='waterRatioInput'
								onChange={waterRatioInputValue}
								type='number'
							></input>
						</div>
					</div>
					<div className='w-full [&>*]:mb-4'>
						<h2>Measurement</h2>
						<div className='flex items-center flex-row justify-between'>
							<label className='hidden h-0 w-0'>Coffe</label>
							<input
								className='h-10 w-28 bg-white p-5 rounded-xl text-center'
								placeholder='Coffee'
								value={coffeeMeasurement}
								id='coffeeMeasurementInput'
								name='coffeeMeasurementInput'
								onChange={coffeeMeasurementInputValue}
								type='number'
							></input>
							<span>:</span>
							<label className='hidden h-0 w-0'>Water</label>
							<input
								className='h-10 w-28 bg-white p-5 rounded-xl text-center'
								placeholder='Water'
								value={waterMeasurement}
								id='waterMeasurementInput'
								name='waterMeasurementInput'
								onChange={waterMeasurementInputValue}
								type='number'
							></input>
						</div>
					</div>
					<div className='flex items-center flex-col w-full [&>*]:mb-4'>
						<label className='hidden h-0 w-0'>Timer:</label>
						<input
							className='h-10 w-full bg-white p-5 rounded-xl text-center'
							type='time'
							id='timer'
							name='timer'
							min='00:00'
							max='24:00'
							onChange={timerInputValue}
						></input>
						<label className='hidden h-0 w-0'>Comment</label>
						<select
							className='h-10 w-full bg-white text-black  rounded-xl text-center'
							name='brewtype'
							id='brewtype'
							placeholder='Method'
							onChange={methodInputValue}
						>
							<option defaultValue disabled>
								Select option
							</option>
							<option value='fench-press'>French press</option>
							<option value='cold-brew'>Cold brew</option>
							<option value='siphon'>Siphon</option>
							<option value='v60'>V60</option>
							<option value='kalita-wave'>Kalita Wave</option>
							<option value='chemex'>Chemex</option>
							<option value='clever-dripper'>Clever Dripper</option>
							<option value='espresso'>Espresso</option>
							<option value='moka-pot'>Moka pot</option>
							<option value='aeropress'>AeroPress</option>
							<option value='other'>Other</option>
						</select>

						<label className='hidden h-0 w-0'>Comment</label>
						<textarea
							className='h-40 w-full bg-white p-5 rounded-xl resize-none'
							placeholder='Comment'
							id='commentInput'
							name='commentInput'
							onChange={commentInputValue}
							type='text'
						></textarea>
					</div>
					<button className='h-11 w-full bg-black text-white p-5 rounded-xl text-center p-0'>
						Save recipe
					</button>
				</form>
			</div>
		</>
	)
}

export default Calculator
