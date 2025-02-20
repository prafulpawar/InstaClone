const userModel = require("../models/user.model")
const postModel = require('../models/post.model')

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
        console.log(req.user)
        await userModel.findByIdAndUpdate(req.user.id,{
            $push:{
                posts:createdPost.id
            }
        })

        return res.status(200).json({
            message:"Post Is Created "
        })


    }
    catch(error){
        console.log(error)
        return res.status(400).json({
            message:"Error In Creating Post"
        })
    }
}

module.exports.likeController = async(req,res)=>{
    try{
         const { likeCount,postId,userId } = req.body;
         //
         const userID = await userModel.findById({
            _id:userId
         })

         const postID = await postModel.findById({
            _id:postId
         })

         if(!userID){
            return res.status(400).json({
                message:'Post Is Invalid'
            })
         }

         if(!postID ){
            return res.status(400).json({
                message:'Post Is Invalid'
            })
         } 
         
         const LikeCount = await postModel.findOne({_id:postId})
         console.log(LikeCount.like.length)
         if(LikeCount.like.length === likeCount ){
            console.log("Hello")
                const liked = await postModel.findByIdAndUpdate({_id:LikeCount._id},{
                    $push:{
                        like:userID._id
                    }
                })
                return res.status(200).json({
                    message:LikeCount,
                    data:userID
                 })
         }
         else{
            console.log("Hello")
                const liked = await postModel.findByIdAndUpdate({_id:LikeCount._id},{
                    $pull:{
                        like:userID._id
                    }
                })

                return res.status(200).json({
                    message:LikeCount,
                    data:userID
                 })
         }
       
         return res.status(200).json({
            message:LikeCount,
            data:userID
         })


    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            message:'Error In Like'
        })
    }
}