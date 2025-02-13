const userModel = require('../models/user.model');
module.exports.createUserController = async (req,res)=>{
     try{
        const {username,email,password} = req.body;
        if(!username){
            return res.status(400).send({
                message:"Username Is Required"
            })
        }

        if(!email){
            return res.status(400).send({
                message:"Email Is Required"
            })
        }
        if(!password){
            return res.status(400).send({
                message:"Password Is Required"
            })
        }

        //If User Exists Cheking
        const isExists = await userModel.findOne({
            $or:[{
                email:email,
                username:username
            }]
        })
        if(isExists){
            return res.status(400).send({
                message:"UserAlredy Exists Plase Login"
            })
        }
        


     }
     catch(error){
        return res.status(400).send({
             message:"Error While Creating The User"
        })
     }
}