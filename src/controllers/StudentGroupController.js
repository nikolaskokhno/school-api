const { validationResult } = require('express-validator'); 
const { StudentGroup } = require('../models');

function StudentGroupController () {}

const Create = function (req, res) {

    const data = {
        name: req.body.name,
        studentGroup: req.body.studentGroup
    }

    StudentGroup.create(data, function(err, doc) {
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
        const studentgroup = await StudentGroup.findById(id).exec();

        res.json ({
            success: true,
            data: studentgroup
        }); 
    } catch (e) {
        return res.status(404).json({
            success: false,
            message: "STUDENTGROUP_NOT_FOUND"
        });
    }
}

const Delete = function (req, res) {
    const id = req.params.id;
    
    StudentGroup.deleteOne({ _id: id }, (err) => {
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
    const studentGroupId = req.params.id;

    const data = {
        name: req.body.name,
        studentGroup: req.body.studentGroup
    }

    StudentGroup.updateOne(
        { _id: studentGroupId },
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
    StudentGroup.find({}, function(err, docs) {
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

StudentGroupController.prototype = {
    All,
    Show,
    Create,
    Delete,
    Update
}

module.exports = StudentGroupController;