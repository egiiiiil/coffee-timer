import axios from 'axios'

const API_URL = 'http://localhost:8080/api/users/'

// Register User
const register = async (userData) => {
	const response = await axios.post(API_URL, userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
		console.log(response.data)
	}

	return response.data
}
// Login User
const login = async (userData) => {
	const response = await axios.post(API_URL + 'login', userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
		console.log(response.data)
	}

	return response.data
}

// Logout user
const logout = () => {
	localStorage.removeItem('user')
}

const authService = {
	register,
	logout,
	login,
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
