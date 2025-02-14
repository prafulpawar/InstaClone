const userModel = require("../models/user.model")

module.exports.isAuth = async (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1]

        if(!token){
            return res.status(400).json({
                message:"Error In Authentication"
            })
        }

        const decode = await userModel.verifyToken(token);
        const user = await userModel.find({
            _id:decode.id
        })

        req.user = user
    }
    catch(error){
        return res.status(400).json({
            message:"Error In Authentication"
        })
    }
}