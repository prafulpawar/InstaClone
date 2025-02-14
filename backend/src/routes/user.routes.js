const express = require('express');
const router  = express.Router()
const { createUserController, loginUserController, profileUserController } = require('../controllers/user.controller')
const {isAuth} = require('../middlewares/authMiddleware')

router.post('/register',createUserController)
router.post('/login',loginUserController)
router.post('/profile',isAuth,profileUserController)


module.exports = router