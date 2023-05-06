const multer = require("multer");

// creating storage using multer
const storage = multer.diskStorage({
    destination: function (req,res,cb){
        cb(null, "uploads/");
    },
    filename: function (req,file,cb) {
        // creating unique file name for each uploaded file 
        const Suffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        cb(null,filename + "-" + Suffix + ".png");
    },
});

exports.upload = multer({storage: storage});