const { validationResult } = require('express-validator'); 
const { Teacher } = require('../models');

function TeacherController () {}

const Create = function (req, res) {
    const errors = validationResult(req);

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        position: req.body.position
    }

    // validation
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            success: false,
            message: errors.array() 
        })
    }

    Teacher.create(data, function(err, doc) {
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
        const teacher = await Teacher.findById(id).exec();

        res.json ({
            success: true,
            data: teacher
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
    
    Teacher.deleteOne({ _id: id }, (err) => {
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
    const teachertId = req.params.id;
    const errors = validationResult(req);

    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        position: req.body.position
    }

    // validation
    if (!errors.isEmpty()) {
        return res.status(422).json({ 
            success: false,
            message: errors.array() 
        })
    }

    Teacher.updateOne(
        { _id: teachertId },
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
    Teacher.find({}, function(err, docs) {
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

TeacherController.prototype = {
    All,
    Show,
    Create,
    Delete,
    Update
}

module.exports = TeacherController;