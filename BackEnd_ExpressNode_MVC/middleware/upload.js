const multer = require('multer')

module.exports.files = {
    storage = () => {
        let storage = multer.diskStorage({
            destination: function (req, file, cd) {
                cb(null, 'public/images')
            },
            filename: function (req, file, cd) {
                cb(null, file.originalname)
            }
        })
        return storage;
    },
    allowedImage = (req, file, cb) => {
        // Allowed ext
        const filetypes = /jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF/;
        // Check ext
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        // Check mime
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            req.fileValidationError = 'Only image files are allowed!';
            return cb(new Error('Only image files are allowed!'), false);
        }
    }
}
