const { Op } = require('sequelize');
const { fn, col, where } = require('sequelize');
const Student=require('../model/studentModel')
const Fees = require('../model/feesModel');
// const { where, DATE } = require('sequelize');
// const Department = require('../model/departmentModel');
exports.getStudents=(req,res)=>{
    Student.findAll().then((student) => {
        if(student.length===0){
            res.status(400).json({
                message:"Student not found!!"
            })
        }
        res.status(201).json({
            message:"All students found",
            student
        })
    }).catch((err) => {
       res.status(500).json({
        message:"Server Failed",
        err
       }) 
    });
}



exports.createStudent = (req, res) => {
    const { firstname, lastname,  email, Dob, fees_paid,departmentId ,schoolId} = req.body;
    const requireField=['firstname','lastname','email','Dob','fees_paid','departmentId','schoolId']
    const missingField=requireField.filter(field=>!req.body[field])
    if(missingField.length>0){
        return res.status(400).json({
            message:`missing required field: ${missingField.join(', ')}`
        })
    }


    let departmentFees;
    let createdStudent;

    // Fetch department fees
    Fees.findOne({
        where: { departmentId: departmentId }
    })
    .then(fees => {
        if (!fees) {
            throw new Error(`No fees for  department`);
        }
        departmentFees = fees;
        const paid_amount = parseFloat(fees_paid) || 0;

        // Create student
        return Student.create({
            firstname,
            lastname,
            email,
            Dob,
            fees_paid: paid_amount,
            departmentId,
            schoolId
        });
    })
    .then(student => {
        if (!student) {
            throw new Error("Couldn't create student");
        }
        createdStudent = student;
        const paid_amount = parseFloat(student.fees_paid) || 0;
        const fees_amount = departmentFees.fees_amount;

        // Check fees status
        if (paid_amount < fees_amount) {
            const outstanding = fees_amount - paid_amount;
            return res.status(201).json({
                message: "Student created, but fees are outstanding",
                student: createdStudent,
                feesStatus: {
                    paid: paid_amount,
                    total: fees_amount,
                    outstanding: outstanding
                }
            });
        } else {
            return res.status(201).json({
                message: "Student created, fees fully paid",
                student: createdStudent,
                feesStatus: {
                    paid: paid_amount,
                    total: fees_amount,
                    overpaid: paid_amount > fees_amount ? paid_amount - fees_amount : 0
                }
            });
        }
    })
    .catch(err => {
        console.error(err);
        return res.status(500).json({
            message: "Server Error",
            error: err.message
        });
    });
};

exports.DeleteStudents=(req,res)=>{
    const {id}=req.params
    Student.destroy({where:{id}}).then((deletedRow) => {
        if(deletedRow===0){
           return  res.status(404).json({
                message:"row doesnt exist or has been deleted already"
            })
        }
        return res.status(200).json({
            message:"Student deleted"
        })
        
    }).catch((err) => {
        res.status(500).json({
            message:"Server Error",
            err
        })
    });
}



exports.birthdayCheck = (req, res) => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // getMonth() returns 0-11
    const currentDay = today.getDate();

    Student.findAll()
        .then((students) => {
            const birthdayStudents = students.filter(student => {
                const dob = new Date(student.Dob);
                return dob.getMonth() + 1 === currentMonth && dob.getDate() === currentDay;
            });

            if (birthdayStudents.length === 0) {
                return res.status(404).json({
                    message: "No birthdays for today"
                });
            }

            return res.status(200).json({
                message: "Happy birthday",
                students: birthdayStudents
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Error: Server not responding",
                error: err
            });
        });
}