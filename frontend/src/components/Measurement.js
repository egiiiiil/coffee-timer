const Measurement = ({
	coffeeMeasurement,
	waterMeasurement,
	coffeeMeasurementInputValue,
	waterMeasurementInputValue,
}) => {
	return (
		<>
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
		</>
	)
}
export default Measurement
