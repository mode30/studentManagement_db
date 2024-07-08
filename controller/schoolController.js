const { where } = require('sequelize');
const School=require('../model/schoolModel');
exports.registeredSchool=(req,res)=>{
    School.findAll().then((school) => {
        if(school.length===0){
            res.status(400).json({
                message:"No school included"
            })
        }
            return res.status(201).json({
                message:"School found",
                school
            })
        }
    ).catch((err) => {
        res.status(500).json({
            message:"Server failed",
            err
        })
    });

}

exports.postSchool=(req,res)=>{
    const {school_name,location}=req.body
 
    if(!school_name||!location){
        const requiredFields=['school_name','location']
        const missingField=requiredFields.filter(fields=>!req.body[fields])
        if(missingField.length>0){
            return res.status(400).json({
            message:"missing variable,please add all fields",
            remaing_field:`the remaining fields ${missingField.join(', ')}`
        })
        }
        
    }
       School.findOne({where:{school_name:school_name}}).then((exsistingSchool) => {
        if(exsistingSchool){
           return  res.status(400).json({
                message:"school already exsist"
            })
        }
        
    })
    
     School.create({
        school_name,
        location,

    }).then((school) => {
        if(!school){
            res.status(401).json({
                message:"no school found"
            })
        }
        if(school_name)
        return res.status(201).json({
            message:"School found",
            school
        })
        
    }).catch((err) => {
        res.status(500).json({
            message:"Server Error cant create schools ",
            err
        })
    });
}
exports.DeleteSchool = (req, res) => {
    const { id } = req.params
    School.destroy({ where: { id } }).then((deletedRow) => {
        if (deletedRow === 0) {
            return res.status(401).json({
                message: "Unable to delete school, row doesn't exist"
            });
        }
        return res.status(200).json({
            message: "School deleted"
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Server Error",
            err: err.message
        });
    });
};
