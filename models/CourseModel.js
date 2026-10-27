const data = require('../courses.json')

class Course {
    constructor(course){
    this.id = course.id
    this.name = course.name
    this.lat = course.lat
    this.lon = course.lon
    this.country_code = course.country_code
    this.holes = course.holes
    }


    static showAll(){
        return data.courses.map(q => new Course(q))
    }

    static show(name){
        const course = data.courses.find((course) => course.name.toLowerCase() == name)
        if (course){
            return new Course(course)
        } else {
            throw "This course doesn't exist"
        }
    }

}

module.exports = Course