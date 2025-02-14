const express = require('express');
const router = express.Router();
const { createPostController } = require('../controllers/post.controller');
const {isAuth} = require('../middlewares/authMiddleware')
router.post('/create',isAuth,createPostController)
module.exports = router