import { useState, useEffect } from 'react'
import sendToDB from '../utils/sendToDB.js'

import Ratio from './Ratio.js'
import Measurement from './Measurement.js'
import ExtraInfo from './ExtraInfo.js'
import LikeButton from './LikeButton.js'
import SaveButton from './SaveButton.js'

function Calculator() {
	const [coffeeRatio, setCoffeeRatio] = useState(1)
	const [waterRatio, setWaterRatio] = useState(16)

	const [coffeeMeasurement, setCoffeeMeasurement] = useState(16)
	const [waterMeasurement, setWaterMeasurement] = useState(256)

	const [timer, setTimer] = useState('04:00')
	const [method, setMethod] = useState('v60')

	const [comment, setComment] = useState('')

	const [saveRecipe, setSaveRecipe] = useState(sendToDB)

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
	const saveRecipeValue = (e) => {
		e.preventDefault()
		setSaveRecipe(setSaveRecipe)
		console.log(saveRecipe)
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
	useEffect(() => {
		console.log(`Saved valuie is: ${saveRecipe}`)
	}, [saveRecipe])
	return (
		<>
			<div
				className='col-start-2 w-full flex flex-row-reverse justify-between items-start bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200

'
			>
				{/* <LikeButton /> */}
				<form className='w-full flex items-center justify-between flex-col'>
					<Ratio
						coffeeRatio={coffeeRatio}
						waterRatio={waterRatio}
						coffeeRatioInputValue={coffeeRatioInputValue}
						waterRatioInputValue={waterRatioInputValue}
					/>
					<Measurement
						coffeeMeasurement={coffeeMeasurement}
						waterMeasurement={waterMeasurement}
						coffeeMeasurementInputValue={coffeeMeasurementInputValue}
						waterMeasurementInputValue={waterMeasurementInputValue}
					/>
					<ExtraInfo
						commentInputValue={commentInputValue}
						timerInputValue={timerInputValue}
						methodInputValue={methodInputValue}
					/>
					<SaveButton saveRecipeValue={saveRecipeValue} />
				</form>
			</div>
		</>
	)
}

export default Calculator
