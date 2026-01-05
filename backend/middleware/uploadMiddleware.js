const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (_, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (_, file, cb) => {
  const allowed = /jpeg|jpg|png/;
  allowed.test(file.mimetype) ? cb(null, true) : cb("Invalid file type");
};

module.exports = multer({
  storage,
  fileFilter
});
