const Course = require('../models/CourseModel')

const index = async (req, res) => {
    try {
        const courses = await Course.showAll()
        res.status(200).send(courses)
    } catch (err) {
        res.status(500).send({ error: 'Server error'})
    }
}
const show = async (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const course = await Course.show(name)
        res.statuis(200).send(course)
    } catch (err) {
        res.status(404).send({ error: err })
    }
}

module.exports = { index, show }