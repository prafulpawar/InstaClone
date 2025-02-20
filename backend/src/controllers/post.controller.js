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

module.exports.likeController = async (req, res) => {
    try {
        const {  postId, userId } = req.body;

        // Validate userId and postId
        if (!userId || !postId) {
            return res.status(400).json({
                message: "User ID or Post ID is missing",
            });
        }

        // Fetch user and post
        const user = await userModel.findById(userId);
        const post = await postModel.findById(postId);

        if (!user) {
            return res.status(400).json({ message: "Invalid User ID" });
        }

        if (!post) {
            return res.status(400).json({ message: "Invalid Post ID" });
        }

        // Handle Like/Unlike
        if (post.like.includes(user._id)) {
            // Unlike (remove user from likes array)
            await postModel.findByIdAndUpdate(postId, {
                $pull: { like: user._id },
            });
            return res.status(200).json({ message: "Post unliked" });
        } else {
            // Like (add user to likes array)
            await postModel.findByIdAndUpdate(postId, {
                $push: { like: user._id },
            });
            return res.status(200).json({ message: "Post liked" });
        }



    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Error in like operation",
        });
    }
};
