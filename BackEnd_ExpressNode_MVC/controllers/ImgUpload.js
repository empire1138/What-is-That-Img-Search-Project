const multer = require('multer');
const ImageMiddleware = require('../middleware/upload');
const ImgUpload = require('../models/image.js');



// Right Its just rending the data is sent to it. 
exports.imageUploadData = async (req, res) => {
    res.render('upload-data');
}

exports.storeImage = async (req, res) => {
    let upload = multer({
        storage: ImageMiddleware.image.storage(),
        allowedImage: ImageMiddleware.image.allowedImage
    }).single('image')

    await upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            res.send(err);
        } else if (err) {
            res.send(err)
        } else {
            let imageName = req.file.originalname;
            let inputValues = {
                image_name: imageName
            }

            ImgUpload.storeImage(inputValues, function (data) {
                res.render('upload-form', { alertMsg: data })
            })
        }
    })
}

exports.imgByID = async (req, res,  next) => {
    try {                                       // this is a body item for now might change it later
        const getImage = await ImgUpload.fetchOne(req.body.item)

        req.status(201).json(getImage); 
    }catch(error){
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
    
}

exports.downloadImage = async (req, res) => {
    const fileName = req.params.name;
    // this path will change at some point
    const directoryPath = "/public/images";

    await res.download(directoryPath + fileName, fileName, (error) => {
        if (error) {
            res.status(500).send({
                message: "Not able to download image Error: " + error,
            })
        }
    })

}