// POST http://localhost:8080/api/recipes
async function postRecipe({
	coffeeRatio,
	waterRatio,
	coffeeMeasurement,
	waterMeasurement,
	comment,
	timer,
	method,
}) {
	let response = fetch('http://localhost:8080/api/recipes', {
		method: 'POST',
		body: {
			ratio: [4, 4],
			coffeeToWater: [4, 4],
			timer: '04:00',
			method: 'method',
			directions: 'comment',
			author: 'egiiiiil',
			name: "Egil's Standard",
			beans: '3rd wave coffee',
		},
		// body: {
		// 	ratio: [coffeeRatio, waterRatio],
		// 	coffeeToWater: [coffeeMeasurement, waterMeasurement],
		// 	timer: timer,
		// 	method: method,
		// 	directions: comment,
		// 	author: 'egiiiiil',
		// 	name: "Egil's Standard",
		// 	beans: '3rd wave coffee',
		// },
	})
		.then((res) => res.json())
		.catch((err) => console.log(err))
	return response
}

// coffeeRatio
// waterRatio
// coffeeMeasurement
// waterMeasurement
// comment
// timer
// method

export { postRecipe }
