import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createRecipe } from '../features/recipe/recipeSlice'

function CalculatorForm() {
	const [formData, setFormData] = useState({
		coffeeRatio: 1,
		waterRatio: 16,
		coffeeMeasurement: 16,
		waterMeasurement: 256,
		timer: '',
		method: '',
		directions: '',
		name: '',
		beans: '',
	})
	const {
		coffeeRatio,
		waterRatio,
		coffeeMeasurement,
		waterMeasurement,
		timer,
		method,
		directions,
		name,
		beans,
	} = formData
	
	const dispatch = useDispatch()

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(formData)
		dispatch(createRecipe({formData}))
		console.log(formData)
		setFormData({
			coffeeRatio: 1,
			waterRatio: 16,
			coffeeMeasurement: 16,
			waterMeasurement: 256,
			timer: '',
			method: '',
			directions: '',
			name: '',
			beans: '',
		})
	}

	return (
		<>
			<section>
				<form
					onSubmit={onSubmit}
					className='w-full flex items-center justify-between flex-col'
				>
					<div className='w-full [&>*]:mb-4'>
						<h2>Ratio</h2>
						
							{/* <form className='w-40 flex items-center justify-between flex-row'> */}
							<label className='hidden h-0 w-0'>Coffe</label>
							<input
								className='h-10 w-28 bg-white p-5 rounded-xl text-center'
								placeholder='Coffee'
								value={coffeeRatio}
								id='coffeeRatio'
								name='coffeeRatio'
								onChange={onChange}
								type='number'
							></input>
							<span>:</span>
							<label className='hidden h-0 w-0'>Water</label>
							<input
								className='h-10 w-28 bg-white p-5 rounded-xl text-center'
								placeholder='Water'
								value={waterRatio}
								id='waterRatio'
								name='waterRatio'
								onChange={onChange}
								type='number'
							></input>
						</div>
					
					<div className='w-full [&>*]:mb-4'>
						<h2>Measurement</h2>
						
							<label className='hidden h-0 w-0'>Coffe</label>
							<input
								className='h-10 w-28 bg-white p-5 rounded-xl text-center'
								placeholder='Coffee'
								value={coffeeMeasurement}
								id='coffeeMeasurement'
								name='coffeeMeasurement'
								onChange={onChange}
								type='number'
							></input>
							<span>:</span>
							<label className='hidden h-0 w-0'>Water</label>
							<input
								className='h-10 w-28 bg-white p-5 rounded-xl text-center'
								placeholder='Water'
								value={waterMeasurement}
								id='waterMeasurement'
								name='waterMeasurement'
								onChange={onChange}
								type='number'
							></input>
						
					</div>

						<label className='hidden h-0 w-0'>Timer:</label>
						<input
							className='h-10 w-full bg-white p-5 rounded-xl text-center'
							type='time'
							id='timer'
							name='timer'
							value={timer}
							min='00:00'
							max='24:00'
							onChange={onChange}
						></input>
						<label className='hidden h-0 w-0'>Comment</label>
						<select
							className='h-10 w-full bg-white text-black  rounded-xl text-center'
							name='method'
							id='method'
							value={method}
							placeholder='Method'
							onChange={onChange}
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
							placeholder='Brewing instructions'
							id='directions'
							value={directions}
							name='directions'
							onChange={onChange}
							type='text'
						></textarea>
					<label className='hidden h-0 w-0'>Name recipe:</label>
					<input
						className='h-10 w-full bg-white p-5 rounded-xl text-left'
						type='text'
						id='name'
						name='name'
						value={name}
						placeholder='Name recipe'
						onChange={onChange}
					></input>
					<label className='hidden h-0 w-0'>Name beans:</label>
					<input
						className='h-10 w-full bg-white p-5 rounded-xl text-left'
						type='text'
						id='beans'
						name='beans'
						value={beans}
						placeholder='Name beans'
						onChange={onChange}
					></input>
					<button className='h-11 w-full bg-black text-white p-5 rounded-xl text-center p-0'>
						Save recipe
					</button>
				</form>
			</section>
		</>
	)
}

export default CalculatorForm