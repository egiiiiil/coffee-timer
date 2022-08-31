import axios from 'axios'

const API_URL = 'http://localhost:8080/api/users/'

// Register User
const register = async (userData) => {
	const response = await axios.post(API_URL, userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response))
	}

	return response.data
}

const logout = () => {}

const authService = {
	register,
}

export default authService

/* const response = await fetch(URL, {
	method: 'POST',
	// credentials: 'include',
	// mode: 'cors',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(data),
})
	.then((res) => res.json())
	.catch((err) => console.log(err)); 
	localStorage.setItem('cartId', JSON.stringify(response.cartId));
	*/
