const express = require('express');
const router  = express.Router()
const { createUserController }      = require('../controllers/user.controller')


router.post('/register',createUserController)
module.exports = router