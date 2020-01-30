const StudentController = require('./StudentController');
const TeacherController = require('./TeacherController');

module.exports = {
    StudentController: new StudentController(),
    TeacherController: new TeacherController()
}