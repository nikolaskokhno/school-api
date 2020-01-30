const StudentController = require('./StudentController');
const TeacherController = require('./TeacherController');
const StudentGroupController = require('./StudentGroupController');

module.exports = {
    StudentController: new StudentController(),
    TeacherController: new TeacherController(),
    StudentGroupController: new StudentGroupController()
}