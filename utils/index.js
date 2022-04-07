const mongoose = require('mongoose')

const checkMongoID = id => mongoose.Types.ObjectId.isValid(id)

const isAdmin = user => user.role === 'ADMIN'
const isLogged = (req, res) => req.session.currentUser


module.exports = { checkMongoID, isAdmin, isLogged }