exports.error=(err,req,res,next)=>{
    res.status(500).json({
        status:"Server Error",
       message: err.message
    })

}