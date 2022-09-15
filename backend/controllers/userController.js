import collections from '../config/db.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import mongodb from 'mongodb'

const userCollection = collections.users

// @desc		Register new user
// @route		POST /api/users
// @access	Public
const registerUser = async (req, res) => {
	try {
		console.log('reg user req body: ', req.body)
		const { username, email, password } = req.body

		if (!username || !email || !password) {
			res.status(400)
			throw new Error('Please add all fields')
		}

		// Check if user exist
		const userExists = await userCollection.findOne({ email })
		if (userExists) {
			res.status(400).send('User already exists')
			throw new Error('User already exists')
		}

		// Hash password
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)
		// Create user
		const user = await userCollection.insertOne({
			username,
			email,
			password: hashedPassword,
			date: new Date().toISOString(),
		})
		console.log('inserted user', user)
		const createdUser = await userCollection.findOne({ email })
		console.log('created user', createdUser)
		if (createdUser) {
			console.log('reg user:', createdUser)
			res.status(201).json({
				id: createdUser._id,
				username: createdUser.username,
				email: createdUser.email,
				date: createdUser.date,
				token: generateToken(createdUser._id),
			})
		} else {
			res.status(400)
			throw new Error('Invalid user data')
		}
	} catch (err) {
		console.log(err.message)
	}
}

// @desc		Authenticate a user
// @route		POST /api/login
// @access	Public
const loginUser = async (req, res) => {
	const { email, password } = req.body

	//Check for user email
	const user = await userCollection.findOne({ email })

	if (user && (await bcrypt.compare(password, user.password))) {
		res.status(200).json({
			id: user._id,
			username: user.username,
			email: user.email,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error('Invalid credentials')
	}
}
// @desc		Get user data
// @route		GET /api/users/me
// @access	Private
const getMe = async (req, res) => {
	console.log('req', req.user)
	const user = await userCollection.findOne({
		_id: req.user?._id,
	})
	console.log('db', user)
	res.status(200).json({
		id: user?._id,
		name: user?.username,
		email: user?.email,
	})
}

//Generate JWT
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

export { registerUser, loginUser, getMe }
