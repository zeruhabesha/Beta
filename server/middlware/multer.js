 const multer = require("multer");
// //configure how the files are stored
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     //where to store the file
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const fileFilter = (req, file, cb) => {
//   //reject a file if it's not a jpg or png
//   if (
//     file.mimetype === "image/jpeg" ||
//     file.mimetype === "image/png" ||
//     file.mimetype === "application/pdf"||
//     file.mimetype === "application/docx"||
//     file.mimetype === "application/xls"||
//     file.mimetype === 'text/csv'||
//     file.mimetype === 'application/vnd.ms-excel'
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   fileFilter: fileFilter,
// });

// module.exports = upload;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {

      cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
      let ext = ''; // set default extension (if any)
      if (file.originalname.split(".").length>1) // checking if there is an extension or not.
          ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
      cb(null,   ext)
  }
})
var upload = multer({ storage: storage });
module.exports = upload;