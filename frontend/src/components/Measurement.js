const Measurement = ({
	coffeeMeasurement,
	waterMeasurement,
	coffeeMeasurementInputValue,
	waterMeasurementInputValue,
}) => {
	return (
		<>
			<div className='flex items-center flex-col'>
				<div>
					<h2>Measurement</h2>
					<label className='hidden h-0 w-0'>Coffe</label>
					<input
						className='h-10 w-20 border-solid border-2 rounded-2xl border-black'
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
						className='h-10 w-20 border-solid border-2 rounded-2xl border-black'
						placeholder='Water'
						value={waterMeasurement}
						id='waterMeasurementInput'
						name='waterMeasurementInput'
						onChange={waterMeasurementInputValue}
						type='number'
					></input>
				</div>
			</div>
		</>
	)
}
export default Measurement
