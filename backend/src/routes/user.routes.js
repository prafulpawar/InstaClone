const express = require('express');
const router  = express.Router()
const { createUserController, loginUserController } = require('../controllers/user.controller')
const {isAuth} = require('../middlewares/authMiddleware')

router.post('/register',createUserController)
router.post('/login',loginUserController)
router.post('/profile',isAuth,loginUserController)


module.exports = router