const userModel = require("../models/user.model");
const CustomError = require("../utils/CustomError");
module.exports.isAuth = async (req,res,next)=>{
    try{
       const token = req.headers.authorization.split("")[1];
       if(!token){
          throw new CustomError("UnAuth Access!!",400)
       }

       const decode = await userModel.verifyToken(token);
       if(!decode){
        throw new CustomError("UnAuth Access!!",400)
       }
       
       const user  = await userModel.findOne({
           _id:decode.id
       })

       req.user = user
       next()

    }
    catch(error){
        return res.status(400).json({
            message:"Error In Authentication"
        })
    }
}