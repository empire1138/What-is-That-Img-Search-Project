const express = require('express');
const router = express.Router();

const ImgUploadController = require('../controllers/ImgUpload')


// post for image uploads 
router.post('/', ImgUploadController.upLoadImg);
// get for confirmed uploads 
router.get('/', ImgUploadController.confirmedUpload); 
// get for image upload preview done by ID 
router.get('/:ID', ImgUploadController.imgByID); 

module.exports = router; 

