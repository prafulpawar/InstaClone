const mongoose   =  required('mongoose');
const postSchema =  new mongoose.create({
    media:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true
    }
})

const postModel  = mongoose.model("post",postSchema);

module.exports = postModel 