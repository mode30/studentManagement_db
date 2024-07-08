const { where } = require('sequelize');
const Faculty=require('../model/facultyModel');
exports.allFaculty=(req,res)=>{
    Faculty.findAll().then((faculty) => {
        if(faculty.length===0){
            res.status(400).json({
                message:"No faculty inputted"
            })
        }
        return res.status(200).json({
            message:"All faculty listed",
            faculty
        })
        
    }).catch((err) => {
        res.status(500).json({
            message:"Server Error cannot make list of faculty",
            err
        })
    });
}

exports.postFaculty = (req, res) => {
    const { faculty_name ,schoolId} = req.body;

    if ( faculty_name.length === 0) {
        return res.status(400).json({
            message: "Faculty name wasn't provided"
        });
    }

    Faculty.findOne({where:{faculty_name:faculty_name}}).then((facultyExist) => {
        if(facultyExist){
            return res.status(404).json({
                message:"faculty already exist"
            })
        }
        
    })

    Faculty.create({ faculty_name,schoolId })
        .then((faculty) => {
            return res.status(201).json({
                message: "Faculty added",
                faculty
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server failed",
                error: err.message
            });
        });
};
exports.DeleteFaculty=(req,res)=>{
    const {id}=req.params;
    Faculty.destroy({where:{id}}).then((deletedRow) => {
        if(deletedRow===0){
           return  res.status(404).json({
               message:"row already deleted" 
            })
        }
        return res.status(200).json({
            message:"row deleted"
        })
        
    }).catch((err) => {
        res.status(500).json({
            message:"Server Error Cannot delete",
            err
        })
    });
}
