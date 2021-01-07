const express = require('express')
const middleware = require('./setup/middleware')

const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./api')

const port = process.env.PORT || 4000

// application instance
const app = express()

// middlewares
app.use(cors())
app.use(bodyParser.json())

app.post('/save', api.saveState)
app.get('/load', api.loadState)

app.use(middleware.handleError)
app.use(middleware.notFound)

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
