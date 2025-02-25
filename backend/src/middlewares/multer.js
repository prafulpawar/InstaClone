const multer = require('multer');
const path  = require('path');
const mongoose = require('mongoose')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'src/upload/')
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix = Date.now()+'-' + Math.round(Math.random()*1E9);
        // cb(null,file.fieldname+''+uniqueSuffix+path.extname(file.originalname))
        cb(null,mongoose.Types.ObjectId.toString()+path.extname(file.originalname))
    }
})


  const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
  
  });
  
  module.exports = upload;