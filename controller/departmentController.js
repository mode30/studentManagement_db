const Department=require('../model/departmentModel');
exports.alldepartments=(req,res)=>{
    Department.findAll().then((department) => {
        if(department.length===0){
            res.status(404).json({
                message:"No department found "
            })
        }
        return res.status(201).json({
            message:"All department listed",
            department
        })
        
    }).catch((err) => {
        res.status(500).json({
            message:"Server Error cannot make list of departments",
            err
        })
    });
}

exports.postDepartment=(req,res)=>{
    const {department_name,facultyId}=req.body
    const requiredField=['department_name','facultyId']
    const missingField=requiredField.filter(fields=>!req.body[fields])
    if(missingField>0){
        return res.status(400).json({
            message:`missing field ${missingField.join(', ')}`
        })
    }
    Department.create({
        department_name,
        facultyId
    }).then((result) => {
      res.status(201) .json({
        message:"department created",
        result
        })
        
    }).catch((err) => {
        res.status(500).json({
            message:"Server Error",
            err
        })
    });
}