const Image = require("../models/Image");
const User = require("../models/User");
const fs = require("fs");
const path = require("path");

exports.uploadImage = async (req, res) => {
  try {
    const image = await Image.create({
      user: req.user,
      imageUrl: `/uploads/${req.file.filename}`,
      title: req.body.title || "Untitled"
    });

    res.status(201).json(image);
  } catch (err) {
    res.status(500).json({ message: "Upload failed" });
  }
};

exports.getMyImages = async (req, res) => {
  const images = await Image.find({ user: req.user })
    .sort("-createdAt")
    .populate("user", "username");

  res.json(images);
};

exports.getPublicProfileImages = async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  if (!user) return res.status(404).json({ message: "User not found" });

  const images = await Image.find({ user: user._id })
    .sort("-createdAt")
    .populate("user", "username");

  res.json(images);
};

exports.getAllImages = async (req, res) => {
  const images = await Image.find()
    .sort("-createdAt")
    .populate("user", "username");

  res.json(images);
};

exports.deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    if (image.user.toString() !== req.user) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const filePath = path.join(__dirname, "..", image.imageUrl);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await image.deleteOne();
    res.json({ message: "Image deleted" });

  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};
