import jwt from 'jsonwebtoken'
import mongodb from 'mongodb'
import collections from '../config/db.js'

const userCollection = collections.users

const protect = async (req, res, next) => {
	let token

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			//Get token from header
			token = req.headers.authorization.split(' ')[1]

			//Verify token
			const decoded = jwt.verify(token, process.env.JWT_SECRET)

			//Get user from the token
			const user = await userCollection.findOne({
				_id: new mongodb.ObjectId(decoded.id),
			})
			if (user) {
				req.user = user
			}
			next()
		} catch (err) {
			console.log(err.message)
			res.status(401)
			throw new Error('Not authorised')
		}
	}
	if (!token) {
		res.status(401)
		throw new Error('Not authorised, no token')
	}
}

export { protect }
