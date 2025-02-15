
const express  = require('express');
const app = express()
const userRoutes = require('../src/routes/user.routes')
const postRoutes = require('../src/routes/post.routes')
const indexRoutes = require('../src/routes/index.routes')
const cors  = require('cors');
app.use(express.json());
app.use(express.urlencoded({extend:true}))
app.use(cors())
app.use('/users',userRoutes)
app.use('/posts',postRoutes)
app.use('/',indexRoutes)

module.exports = app;