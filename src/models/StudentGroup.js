const mongoose = require('mongoose');
const { Schema } = mongoose;

const StudentGroupSchema = new Schema(
    {
        id: String,
        name: String,
        studentGroup: [{ type: String, ref: 'Student' }] 
    },
    {
        timestamps: true
    }
);

const StudentGroup = mongoose.model('StudentGroup', StudentGroupSchema);

module.exports = StudentGroup;
