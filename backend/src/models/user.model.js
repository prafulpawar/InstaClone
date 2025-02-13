const mongoose = require('mongoose');
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
        maxlength:[20,"email Should Be Great Then 20"],
        trime:true
    },
    password:{
        type:String
    },
    profilePic:{
        type:String
    }
})

const userModel = mongoose.model("User",userSchema);
module.exports  = userModel;
