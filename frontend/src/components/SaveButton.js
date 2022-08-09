const SaveButton = ({ saveRecipeValue }) => {
	return (
		<button
			className='h-11 w-full bg-gradient-to-r from-lime-400 to-blue-400 p-5 rounded-xl text-center p-0'
			onChange={saveRecipeValue}
		>
			Save recipe
		</button>
	)
}

export default SaveButton
