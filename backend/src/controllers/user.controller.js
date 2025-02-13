const userModel = require('../models/user.model');
const CustomError = require("../utils/CustomError");
const bcrypt = require("bcrypt");

module.exports.createUserController = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        // 🛑 Input Validation
        if (!username || !email || !password) {
            throw new CustomError("All fields are required!", 400);
        }

        // ❌ Check if User Already Exists
        const isExists = await userModel.findOne({
            $or: [{ email: email }, { username: username }],
        });

        if (isExists) {
            throw new CustomError("User already exists! Please login.", 400);
        }

        // 🔐 Password Hashing
        const hashPassword = await userModel.hash(password, 10);

        // ✅ Save User
        const userSaved = await userModel.create({
            username,
            email,
            password: hashPassword,
        });

        if (!userSaved) {
            throw new CustomError("Error while saving the user!", 500);
        }

        // 🎉 Success Response
        return res.status(201).json({
            success: true,
            message: "User created successfully!",
            data: userSaved,
        });
    } catch (error) {
        next(error);
    }
};


module.exports.loginController = async (req,res)=>{
    try{

    }
    catch(error){
        next(error)
    }
}

module.exports.profileController = async(req,res)=>{
    try{

    }
    catch(error){
      next(error)
    }
}