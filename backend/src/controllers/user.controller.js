const userModel = require('../models/user.model')
module.exports.createUserController = async(req,res)=>{
    try{
        const {username,email,password} = req.body;
        const profilePic = req.file ? req.file.filename : null; 
        const filePath = 'src/upload/'+profilePic
        console.log("Uploaded file:", req.file);
       
        if(!username){
            return res.status(400).json({
                message:"Required Username"
            })
        }

        if(!email){
            return res.status(400).json({
                message:"Required Email"
            })
        }

        if(!password){
            return res.status(400).json({
                message:"Required Password"
            })
        }

        // if user is exists 
        const userExists = await userModel.findOne({
            $or:[
                {
                    email:email,
                    username:username
                }
            ]
        })

        if(userExists){
            return res.status(400).json({
                message:"User Is Exists"
            })
        }

        // hash the password 
        const hashPassword = await userModel.hashing(password);

        if(!hashPassword){
            return res.status(400).json({
                message:"Error In Hashing"
            })
        }

        // register the user

        const user = await userModel.create({
            username,
            email,
            password:hashPassword,
            profilePic:filePath
        })

        // generating token

        const token = user.generateToken()
 
        // seding the reponse

        return res.status(200).json({
            token,
            message:"User Created Successfully"
        })

    }
    catch(error){
        console.log(error)
        return res.status(400).json({
            message:"Error In Creation"
        })
    }
}

module.exports.loginUserController = async(req,res)=>{
      try{
          const {email,password} = req.body;
          // validation of feild
          if(!email){
            return res.status(400).send({
                message:"Invalid Credentials"
            })}

          if(!password){
              return res.status(400).send({
                message:"Invalid Password"
              })
          }

          // finding user exists or not
          const userExists = await userModel.findOne({email})
          if(!userExists){
            return res.status(400).send({
                message:"Invalid Credentails"
              })
          }
          
          // cheking valid password

        const matchedPassword = await userModel.comparePassword(password,userExists.password)
        if(!matchedPassword){
            return res.status(400).send({
                message:"Invalid Credentails"
              })
        }

        // generator of token

        const token  = userExists.generateToken();

        return res.status(200).json({
            token,
            message:"Logged In Successfully"
        })




      }
      catch(error){
        console.log(error)
        return res.status(400).json({
            message:"Error In Login"
        })
    }
}

module.exports.profileUserController = async(req,res)=>{
    try{
          const profileUser = await userModel.findById(req.user.id).populate('posts')
          return res.status(200).send({
            message:profileUser
          })
    }
    catch(error){
        console.log(error)
        return res.status(400).json({
            message:"Error In Profile"
        })
    }
}