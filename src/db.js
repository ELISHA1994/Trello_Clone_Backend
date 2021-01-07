const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_URI || 'mongodb://localhost:8080/TRELLO-CLONE',
    {useNewUrlParser: true, useCreateIndex: true}
)

module.exports = mongoose
