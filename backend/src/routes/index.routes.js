const express  = require('express');
const { feedController } = require('../controllers/index.controller');
const router   = express.Router();

router.post('/feed',feedController)

module.exports = router