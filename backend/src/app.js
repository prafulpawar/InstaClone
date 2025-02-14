
const express  = require('express');
const app = express()
const userRoutes = require('../src/routes/user.routes')
const postRoutes = require('../src/routes/post.routes')

app.use(express.json());
app.use(express.urlencoded({extend:true}))

app.use('/users',userRoutes)
app.use('/posts',postRoutes)
module.exports = app;