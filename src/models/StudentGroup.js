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

const StudentGroupSchema = new Schema(
    {
        id: String,
        name: String,
        studentGroup: [StudentSchema] 
    },
    {
        timestamps: true
    }
);

const StudentGroup = mongoose.model('StudentGroup', StudentGroupSchema);

module.exports = StudentGroup;
