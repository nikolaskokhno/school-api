const mongoose = require('mongoose');
const { Schema } = mongoose;

const TeacherSchema = new Schema(
    {
        id: String,
        firstName: String,
        lastName: String,
        age: Number,
        position: String
    },
    {
        timestamps: true
    }
);

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;
