const express = require('express');
const router = express.Router();
const { createPostController, likeController } = require('../controllers/post.controller');
const {isAuth} = require('../middlewares/authMiddleware')

router.post('/create',isAuth,createPostController)
router.post('/like',likeController)
module.exports = router