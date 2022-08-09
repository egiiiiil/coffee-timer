const Ratio = ({
	coffeeRatio,
	waterRatio,
	coffeeRatioInputValue,
	waterRatioInputValue,
}) => {
	return (
		<>
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
		</>
	)
}
export default Ratio
