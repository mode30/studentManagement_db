const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');
const sequelize = require("../utils/Database");
router.get('/student',studentController.getStudents);
// router.get('/specific_student/:id',studentController.getDetails);
router.delete('/delete_student/:id',studentController.DeleteStudents);
router.post('/add_student',studentController.createStudent);
router.get('/birthdays',studentController.birthdayCheck)
// router.post('/update_student/:id',studentController.updateStudent);
// router.patch('/patch_student/:id',studentController.patchStudent);
module.exports = router;