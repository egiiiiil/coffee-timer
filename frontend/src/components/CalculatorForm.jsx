import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createRecipe } from '../features/recipe/recipeSlice'
import { Form } from '../styled/Content'

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
				<Form
					onSubmit={onSubmit}
				>
					<div>
						<h2>Ratio</h2>
						<div className='ratio-measurement__container'>
							<span className='ratio-measurement__container--span'>
								<label>Coffee</label>
								<input
									className='form__input--small'
									placeholder='Coffee'
									value={coffeeRatio}
									id='coffeeRatio'
									name='coffeeRatio'
									onChange={onChange}
									type='number'
								></input>
								</span>
								<span>:</span>
								<span className='ratio-measurement__container--span'>
									<label >Water</label>
									<input
										className='form__input--small'
										placeholder='Water'
										value={waterRatio}
										id='waterRatio'
										name='waterRatio'
										onChange={onChange}
										type='number'
									></input>
								</span>
						</div>

							
						</div>
					
					<div>
						<h2>Measurement</h2>
						<div className='ratio-measurement__container'>
							<span className='ratio-measurement__container--span'>
								<label>Coffee</label>
								<input
									className='form__input--small'
									placeholder='Coffee'
									value={coffeeMeasurement}
									id='coffeeMeasurement'
									name='coffeeMeasurement'
									onChange={onChange}
									type='number'
								></input>
							</span>
							<span>:</span>
							<span className='ratio-measurement__container--span'>
								<label >Water</label>
								<input
									className='form__input--small'
									placeholder='Water'
									value={waterMeasurement}
									id='waterMeasurement'
									name='waterMeasurement'
									onChange={onChange}
									type='number'
								></input>
							</span>
							</div>
					</div>

						<label >Timer:</label>
						<input
							className='form__input--big'
							type='time'
							id='timer'
							name='timer'
							value={timer}
							min='00:00'
							max='24:00'
							onChange={onChange}
						></input>
						<label>Brewing method</label>
						<select
							className='form__input--select'
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

						<label className=''>Comment</label>
						<textarea
							className='form__input--textarea'
							placeholder='Brewing instructions'
							id='directions'
							value={directions}
							name='directions'
							onChange={onChange}
							type='text'
						></textarea>
					<label className=''>Name recipe:</label>
					<input
						className='form__input--big'
						type='text'
						id='name'
						name='name'
						value={name}
						placeholder='Name recipe'
						onChange={onChange}
					></input>
					<label className=''>Name beans:</label>
					<input
						className='form__input--big'
						type='text'
						id='beans'
						name='beans'
						value={beans}
						placeholder='Name beans'
						onChange={onChange}
					></input>
					<button className='form__input--button'>
						Save recipe
					</button>
				</Form>
		</>
	)
}

export default CalculatorForm