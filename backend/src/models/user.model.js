const mongoose = require('mongoose');
const jwt      = require('jsonwebtoken')
const bcrypt   = require('bcrypt');
const config   = require('../config/config')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:[3,"Username Should Be Less Then 3"],
        maxlength:[20,"Username Should Be Great Then 20"],
        trime:true
    },

    email:{
        type:String,
        required:true,
        minlength:[3,"email Should Be Less Then 3"],
        maxlength:[50,"email Should Be Great Then 50"],
        trime:true
    },
    password:{
        type:String
    },
    profilePic:{
        type:String,
        default:'abcd'
    },
    posts:[
        {
            type:mongoose.Types.ObjectId,
            ref:'post'
        }
    ]
})
userSchema.methods.generateToken = function (){
    return  jwt.sign({
         _id:this.id,
         username:this.username,
         email:this.email
    },config.JWT_SECRET) 
}
userSchema.static.verifyToken =  function (token){
    return  jwt.verify(token,config.JWT_SECRET)
}

userSchema.statics.hashing = async function (password){
    return await bcrypt.hash(password,10)
}
userSchema.statics.comparePassword = async function(password,hashPass){
    return await bcrypt.compare(password,hashPass)
}

const userModel = mongoose.model("User",userSchema);
module.exports  = userModel;
