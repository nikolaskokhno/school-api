const { validationResult } = require('express-validator'); 
const { Student } = require('../models');

function StudentController () {}

const Create = function (req, res) {
    const errors = validationResult(req);

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        class_study: req.body.class_study
    }

    // validation
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            success: false,
            message: errors.array() 
        })
    }

    Student.create(data, function(err, doc) {
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
        const student = await Student.findById(id).exec();

        res.json ({
            success: true,
            data: student
        }); 
    } catch (e) {
        return res.status(404).json({
            success: false,
            message: "STUDENT_NOT_FOUND"
        });
    }
}

const Delete = function (req, res) {
    const id = req.params.id;
    
    Student.deleteOne({ _id: id }, (err) => {
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
    const studentId = req.params.id;
    const errors = validationResult(req);

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        class_study: req.body.class_study
    }

    // validation
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            success: false,
            message: errors.array() 
        })
    }

    Student.updateOne(
        { _id: studentId },
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
    Student.find({}, function(err, docs) {
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

StudentController.prototype = {
    All,
    Show,
    Create,
    Delete,
    Update
}

module.exports = StudentController;