const userModel = require("../models/user.model")

module.exports.createPostController = async (req,res)=>{
    try{
        const {media,caption} = req.body
        if(!media){
            return res.status(400).json({
                message:"Media Is Required"
            }) 
        }

        if(!caption){
            return res.status(400).json({
                message:"Caption Is Required"
            }) 
        }

        // creating post

        const createdPost = await postModel.create({
            media,
            caption
        })
        // adding and post id inside the users posts arrys so that
        // traking the post with corresponding post will be done
        await userModel.findById(req.user.id,{
            $push:{
                _id:createdPost.id
            }
        })

        return res.status(400).json({
            message:"Post Is Created "
        })



    }
    catch(error){
        return res.status(400).json({
            message:"Error In Creating Post"
        })
    }
}