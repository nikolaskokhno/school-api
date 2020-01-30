const StudentController = require('./StudentController');
const TeacherController = require('./TeacherController');
const StudentGroupController = require('./StudentGroupController');
const LessonController = require('./LessonController');

module.exports = {
    StudentController: new StudentController(),
    TeacherController: new TeacherController(),
    StudentGroupController: new StudentGroupController(),
    LessonController: new LessonController()
}