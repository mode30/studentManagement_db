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
    const {school_name,location,department}=req.body
    if(undefined){
        res.status(401).json({
            message:"missing variable,please add all fields"
        })
    }
    
    School.create({
        school_name,
        location,
        department

    }).then((school) => {
        if(!school){
            res.status(401).json({
                message:"no school found"
            })
        }
        return res.status(201).json({
            message:"School found",
            school
        })
        
    }).catch((err) => {
        res.status(500).json({
            message:"Server Error cant create student",
            err
        })
    });
}