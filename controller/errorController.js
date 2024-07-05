exports.error=(err,req,res)=>{
    console.log(err)
    res.status(500).json({
        message:"Server Error",
        err
    })

}