const dotenv = require('dotenv');
dotenv.config()
const express  = require('express');
const app = express()
const userRoutes = require('../src/routes/user.routes')

app.use('/users',userRoutes)
module.exports = app;