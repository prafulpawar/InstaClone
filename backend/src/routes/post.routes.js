const express = require('express');
const router = express.Router();
const { createPostController } = require('../controllers/post.controller');


router.post('/create',createPostController)
module.exports = router