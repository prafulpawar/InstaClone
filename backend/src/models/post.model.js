const mongoose = require('mongoose');

// Post Schema
const postSchema = new mongoose.Schema({
    media: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    like:[
       {
          type: mongoose.Types.ObjectId
       }
    ]
});

const postModel = mongoose.model("post", postSchema);
module.exports = postModel 