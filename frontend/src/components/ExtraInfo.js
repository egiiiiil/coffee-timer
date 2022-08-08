const ExtraInfo = ({
	commentInputValue,
	timerInputValue,
	methodInputValue,
}) => {
	return (
		<>
			<div className='flex items-center flex-col'>
				<div>
					{' '}
					<label className='hidden h-0 w-0'>Timer:</label>
					<input
						type='time'
						id='timer'
						name='timer'
						min='00:00'
						max='24:00'
						onChange={timerInputValue}
					></input>
				</div>
				<div>
					<label className='hidden h-0 w-0'>Comment</label>
					<select name='brewtype' id='brewtype' onChange={methodInputValue}>
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
				</div>
				<div>
					<label className='hidden h-0 w-0'>Comment</label>
					<textarea
						className='h-40 w-full border-solid border-2 rounded-2xl border-black resize-none'
						placeholder='Comment'
						id='commentInput'
						name='commentInput'
						onChange={commentInputValue}
						type='text'
					></textarea>
				</div>
			</div>
		</>
	)
}
export default ExtraInfo
