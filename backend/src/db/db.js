const mongoose = require('mongoose');
const config = require('../config/config');
const connectDB  = async(req,res)=>{
    try{
        await mongoose.connect(config.MONGO_URI)
        console.log("Connected With DB")
    }
    catch(error){
        console.log(error)
        return res.status(400).json({
            message:"Error In Connecting WithDB"
        })
    }
}
module.exports = connectDB