const postModel = require("../models/post.model")

module.exports.feedController = async(req,res)=>{
    try{
       const feedData = await postModel.aggregate([
        {
          '$lookup': {
            'from': 'users', 
            'localField': '_id', 
            'foreignField': 'posts', 
            'as': 'author'
          }
        }, {
          '$unwind': {
            'path': '$author'
          }
        }
      ])
      return res.status(200).json({
        data:feedData,
        message:"SucessFully Fetched"
      })
    }
    catch(error){
        return res.status(400).json({
            message:"Error In Getting The Posts"
        })
    }
}