const multer = require('multer')

module.exports.files = {
    storage:function(){
        let storage = multer.diskStorage({
            destination: function (req, file, cd){
                cb(null, 'public/images')
            },
            filename: function (req, file, cd) {
                cb(null, file.originalname)
            }
        })
        return storage; 
    }
}, 