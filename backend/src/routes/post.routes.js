const express = require('express');
const router = express.Router();
const { createPostController, likeController } = require('../controllers/post.controller');
const { isAuth } = require('../middlewares/authMiddleware');
// const upload = require('../middlewares/multer'); // witahout memory storage
// with memory storrage
const multer = require('multer')
 const upload = multer({storage:multer.memoryStorage()})

router.post('/create', isAuth, upload.single('image'), createPostController);
router.post('/like', likeController);

module.exports = router;