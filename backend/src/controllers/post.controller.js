const fs = require("fs");
const imagekit = require("../middlewares/imagekit");
const userModel = require("../models/user.model");
const postModel = require("../models/post.model");
const { Readable } = require("stream")
const mongoose = require('mongoose');

// const upload = require("../middlewares/multer");


module.exports.createPostController = async (req, res) => {
  // const fileBuffer = fs.readFileSync(req.file.path); 

    try {
        if (!req.file) {
            return res.status(400).json({ message: "Media is required" });
        }

        const { caption } = req.body;
        if (!caption) {
            return res.status(400).json({ message: "Caption is required" });
        }
       
        console.log(req.file)
        const uploadedImage = await imagekit.upload({
            //file: req.file.buffer.toString('base64'),// iski jagah stream conversion karna honga to ek module lagenga hame 
            file:Readable.from(req.file.buffer), 
            fileName:new mongoose.Types.ObjectId().toString(),
            folder: "uploads/",
            isPublished:true,
            isPrivateFile:false,
        });
        console.log(uploadedImage)
        
        // fs.unlink(req.file.path, (err) => {
        //     if (err) console.error("Failed to delete file:", err);
        // });
        

    
        const createdPost = await postModel.create({
            media: uploadedImage.url, 
            caption
        });

       
        await userModel.findByIdAndUpdate(req.user.id, {
            $push: { posts: createdPost.id }
        });

        return res.status(200).json({ message: "Post Created Successfully", post: createdPost });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error in Creating Post" });
    }
};



module.exports.likeController = async (req, res) => {
    try {
      const { postId, userId } = req.body;
  
      
      if (!userId || !postId) {
        return res.status(400).json({ message: "USER ID || POSTID required" });
      }
  
      
      const user = await userModel.findById(userId);
      const post = await postModel.findById(postId);
  
      if (!user) {
        return res.status(400).json({ message: "Invalid User ID" });
      }
      if (!post) {
        return res.status(400).json({ message: "Invalid Post ID" });
      }
  
     
      const hasLiked = post.like.includes(user._id);
  
      if (hasLiked) {
       
        await postModel.findByIdAndUpdate(postId, {
          $pull: { like: user._id },
        });
        return res.status(200).json({ message: "unliked" });
      } else {
       
        await postModel.findByIdAndUpdate(postId, {
          $push: { like: user._id },
        });
        return res.status(200).json({ message: "liked" });
      }


    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Error in like operation" });
    }
  };