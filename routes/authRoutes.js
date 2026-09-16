const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { JWT_SECRET } = require("../middleware/auth");

// Endpoint: POST /api/auth/login
router.post("/login", async (req, res) => {
  const { username, passwd } = req.body;

  if (!username || !passwd) {
    return res
      .status(400)
      .json({ success: false, error: "Username and password required" });
  }

  try {
    // Note: For production, compare hashed passwords using bcrypt
    const user = await User.findByUsername(username);
    if (!user || user.passwd !== passwd) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });
    }

    const payload = {
      userID: user.userID,
      username: user.username,
      urole: user.urole,
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
