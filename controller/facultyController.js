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
    const { faculty_name } = req.body;

    if ( faculty_name.length === 0) {
        return res.status(400).json({
            message: "Faculty name wasn't provided"
        });
    }

    Faculty.create({ faculty_name })
        .then((faculty) => {
            if(undefined){
                res.status(400).json({
                    message:"a query return empty"
                })
            }
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
