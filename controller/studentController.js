const Student=require('../model/studentModel')
exports.getStudents=(req,res)=>{
    Student.findall().then((student) => {
        if(student===0){
            res.status(401).json({
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

exports.createStudent=(req,res)=>{
    const {firstname,lastname,department,email,Dob,fees_amount,fees_paid}=req.body
    // if(!(firstname||lastname||department||email||Dob||fees_amount||fees_paid)){
    //     res.status(400).json({
    //         message:"Missing argument in variable,please provide complete varaible needed"
    //     })
    // }
    if(undefined){

        res.status(400).json({
            message:"Missing argument in variable,please provide complete varaible needed"
    })
    }
    Student.create({
    firstname,
    lastname,
    department,
    email,
    Dob,
    fees_amount,
    fees_paid

    }).then((student) => {
        if(!student){
            res.status(401).json({
                message:"coundnt create student"
            })
        }
        return res.status(201).json({
            message:"student created",
            student
        })

        
    }).catch((err) => {
        res.status(500).json({

            error:err
        })
    });
}