const Ratio = ({
	coffeeRatio,
	waterRatio,
	coffeeRatioInputValue,
	waterRatioInputValue,
}) => {
	return (
		<>
			<div className='flex items-center flex-col'>
				<div>
					<h2>Ratio</h2>
					{/* <form className='w-40 flex items-center justify-between flex-row'> */}
					<label className='hidden h-0 w-0'>Coffe</label>
					<input
						className='h-10 w-20 border-solid border-2 rounded-2xl border-black'
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
						className='h-10 w-20 border-solid border-2 rounded-2xl border-black'
						placeholder='Water'
						value={waterRatio}
						id='waterRatioInput'
						name='waterRatioInput'
						onChange={waterRatioInputValue}
						type='number'
					></input>
					{/* </form> */}
				</div>
			</div>
		</>
	)
}
export default Ratio
