const express = require('express');
const router = express.Router();

const ImgUploadController = require('../controllers/ImgUpload')


// post for image uploads 
router.post('/store-image', ImgUploadController.storeImage);
// get for Image Data
router.get('/get-image-data', ImgUploadController.imageUploadData); 
// get for image upload preview done by ID  ** Still need to make
router.get('/image-preview:ID', ImgUploadController.imgByID); 
// Get for an Img down load by Name 
router.get('/image-download:name', ImgUploadController.downloadImage); 

module.exports = router; 

