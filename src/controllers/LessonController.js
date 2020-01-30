const { Lesson } = require('../models');

function LessonController () {}

const Create = function (req, res) {

    const data = {
        name: req.body.name,
        teacher: req.body.teacher,
        groupStudents: req.body.groupStudents,
        cabinet: req.body.cabinet,
        countLesson: req.body.countLesson
    }

    Lesson.create(data, function(err, doc) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err
            });
        }

        res.status(201).json ({
            success: true,
            data: doc
        });
    })
}

const Show = async function(req, res) {
    const id = req.params.id;
    
    try {
        const lesson = await Lesson.findById(id).exec();

        res.json ({
            success: true,
            data: lesson
        }); 
    } catch (e) {
        return res.status(404).json({
            success: false,
            message: "LESSON_NOT_FOUND"
        });
    }
}

const Delete = function (req, res) {
    const id = req.params.id;
    
    Lesson.deleteOne({ _id: id }, (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err
            });
        }

        res.json ({
            success: true
        }); 
    });
}

const Update = function (req, res) {
    const LessonId = req.params.id;

    const data = {
        name: req.body.name,
        teacher: req.body.teacher,
        groupStudents: req.body.groupStudents,
        cabinet: req.body.cabinet,
        countLesson: req.body.countLesson
    }

    Lesson.updateOne(
        { _id: LessonId },
        { $set: data },
        function(err, doc) {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err
                });
            }

            res.json ({
                success: true,
                data: doc
            });
        })
    }

const All = function (req, res) {
    Lesson.find({}, function(err, docs) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err
            });
        }

        res.json ({
            success: true,
            data: docs
        });
    });
}

LessonController.prototype = {
    All,
    Show,
    Create,
    Delete,
    Update
}

module.exports = LessonController;