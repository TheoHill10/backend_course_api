const express = require('express')
const router = express.Router()
const courses = require('../controllers/courseControllers')

router.get('/', courses.index)
router.get('/course/:name', courses.show)

module.exports = router