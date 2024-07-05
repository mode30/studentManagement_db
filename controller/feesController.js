const Fees=require('../model/feesModel');
exports.allFees=(req,res)=>{
    Fees.findAll().then((fees) => {
        if(fees===0){
            res.status(404).json({
                message:"No fees inputted"
            })
        }
        return res.status(201).json({
            message:"All departments and fees listed",
            fees
        })
        
    }).catch((err) => {
        res.status(500).json({
            message:"Server Error cannot make list of departments and fees",
            err
        })
    });
}
exports.postFees=(req,res)=>{
    const {amount}=req.body
    if(amount===0){
        res.status(404).json({
            message:"fees amount entry empty",
        })
    }
    Fees.create({
        amount
    }).then((fees) => {
        res.status(201).json({
            message:"fees added",
            fees
        })
    }).catch((err) => {
        res.status(500).json({
            message:"Server failed to add Fees",
            err
        })
    });

}