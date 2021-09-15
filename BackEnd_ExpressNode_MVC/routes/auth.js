const express = require('express');

const router = express.Router();


const authController = require('../controllers/auth'); 

router.post('/Registration' ,authController.signup); 

router.post('', authController.login); 

module.exports = router; 