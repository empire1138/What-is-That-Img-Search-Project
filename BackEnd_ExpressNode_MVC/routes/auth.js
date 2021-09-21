const express = require('express');

const router = express.Router();


const authController = require('../controllers/auth'); 

router.post('/registration' ,authController.signup); 

router.post('/login', authController.login); 

module.exports = router; 