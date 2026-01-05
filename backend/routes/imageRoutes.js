const express = require("express");
const router = express.Router();

const {
  getAllImages,
  getMyImages,
  getPublicProfileImages,
  uploadImage,
  deleteImage
} = require("../controllers/imageController");

const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.get("/", getAllImages);
router.get("/me", auth, getMyImages);
router.get("/profile/:username", getPublicProfileImages);
router.post("/upload", auth, upload.single("image"), uploadImage);
router.delete("/:id", auth, deleteImage); 

module.exports = router;
