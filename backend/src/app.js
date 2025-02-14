const dotenv = require('dotenv');
dotenv.config()
const express  = require('express');
const app = express()
const userRoutes = require('../src/routes/user.routes')
const postRoutes = require('../src/routes/post.routes')






app.use('/users',userRoutes)
app.use('/post',postRoutes)
module.exports = app;