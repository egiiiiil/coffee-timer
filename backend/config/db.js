import mongodb from 'mongodb'
import 'dotenv/config'

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@coffee-cluster.ul4jcxq.mongodb.net/?retryWrites=true&w=majority`
const client = new mongodb.MongoClient(uri)
client.connect((err, db) => {
	if (err || !db) {
		console.log(err.message)
	} else if (db) {
		console.log(`Successfully connected to MongoDB.`.cyan)
	}
})

const database = client.db('coffee-timer')
const collections = {
	recipe: database.collection('recipe'),
	users: database.collection('user'),
}

client.close()

export default collections
