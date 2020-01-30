const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentSchema = new Schema(
    {
        id: String,
        firstName: String,
        lastName: String,
        age: Number,
        class_study: String
    },
    {
        timestamps: true
    }
);

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
