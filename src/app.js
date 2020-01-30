const express = require('express');
const cors = require('cors');

const db = require('./db/connection');
const teacherValidation = require('./helpers/validations/teacher');
const studentValidation = require('./helpers/validations/student');
const { 
    StudentController, 
    TeacherController,
    StudentGroupController 
} = require('./controllers'); 

const app = express();
app.use(express.json());
app.use(cors());

app.get('/teacher', TeacherController.All);
app.post('/teacher', teacherValidation.create, TeacherController.Create);
app.delete('/teacher/:id', TeacherController.Delete);
app.patch('/teacher/:id', teacherValidation.create, TeacherController.Update);
app.get('/teacher/:id', TeacherController.Show);

app.get('/student', StudentController.All);
app.post('/student', studentValidation.create, StudentController.Create);
app.delete('/student/:id', StudentController.Delete);
app.patch('/student/:id', studentValidation.create, StudentController.Update);
app.get('/student/:id', StudentController.Show);

app.get('/studentgroup', StudentGroupController.All);
app.post('/studentgroup', StudentGroupController.Create);
app.delete('/studentgroup/:id', StudentGroupController.Delete);
app.patch('/studentgroup/:id', StudentGroupController.Update);
app.get('/studentgroup/:id', StudentGroupController.Show);


app.listen(3000, function(err) {
    if (err) {
        return console.log(err);
    }

    console.log('Server runned!');
});; 