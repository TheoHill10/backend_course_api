const express = require('express')
const cors = require('cors')
const app = express()
const courses = require('./routes/courseRouter')

app.use(cors())
app.use(express.json())
app.use('/courses', courses)

app.get('/', (req, res) => {
    res.send('Welcome to frisbee golf course finder')
})

module.exports = app