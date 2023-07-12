const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  uploadPic,
} = require("../Controllers/userController");
const { protect } = require("../Middlewares/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.put("/update-profile-pic", protect, uploadPic);

module.exports = router;
