const { check } = require('express-validator');

const validation = {
    create: [
        check('firstName').isLength({ min: 3, max: 30 }),
        check('lastName').isLength({ min: 3, max: 30 }),
        check('age').isInt({ min: 1, max: 150 }),
        check('class_study').isLength({ min: 1, max: 5 })
    ]
}

module.exports = validation;