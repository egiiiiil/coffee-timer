import { useState, useEffect } from 'react'

function Feed() {
	const [data, setData] = useState(null)

	useEffect((data) => {
		fetch('http://localhost:8080/api/recipes')
			.then((response) => response.json())
			.then(setData)
	}, [])
	useEffect(() => {
		console.log(data)
	}, [data])
	if (!data) {
		return (
			<>
				<div className='col-start-2 w-full flex flex-row-reverse justify-between items-start bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'>
					<div className='w-full flex items-center justify-between flex-col'>
						<p>No Feed</p>
					</div>
				</div>
			</>
		)
	} else {
		return (
			<>
				<div className='col-start-2 w-full flex flex-row-reverse justify-between items-start bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg'>
					<div className='w-full flex items-center justify-between flex-col'>
						<p>Feed</p>
						<ul>
							{data && data.map((data, i) => <li key={i}>{data.name}</li>)}
						</ul>
					</div>
				</div>
			</>
		)
	}
}
export default Feed
