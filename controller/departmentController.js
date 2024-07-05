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
    const {faculty,department_name}=req.body
    if(!department_name|| department_name.length===0){
        res.status(400).json({
            message:"deparment field empty "
        })
    }
    Department.create({
        faculty,
        department_name
    }).then((department) => {
      res.status(201) .json({
        message:"department created",
        department
      })
        
    }).catch((err) => {
        res.status(500).json({
            message:"Server Error",
            err
        })
    });
}