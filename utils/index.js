const mongoose = require('mongoose')

const checkMongoID = id =>mongoose.Types.ObjectId.isValid(id)

const isAdmin = user => user.role ==='ADMIN'


module.exports = {checkMongoID, isAdmin}