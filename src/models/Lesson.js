const mongoose = require('mongoose');
const { Schema } = mongoose;


const LessonSchema = new Schema(
    {
        id: String,
        name: String,
        teacher: {type: String, ref: 'Teacher'},
        groupStudents: { type: Schema.Types.ObjectId, ref: 'StudentGroup' },
        cabinet: String,
        countLesson: String
    },  
    {
        timestamps: true
    }
);

const Lesson = mongoose.model('Lesson', LessonSchema);

module.exports = Lesson;
