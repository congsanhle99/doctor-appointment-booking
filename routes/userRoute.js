const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleWare = require("../middlewares/authMiddleware");

router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(200).send({ message: "User already exists", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send({ message: "User created successfully", success: true });
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: "Error creating User!", success: false, error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send({ message: "User does not exist", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      // isMatch true -> user VALID(email and pass present in DB)
      // => gene token stored in FRONT-END
      return res.status(200).send({ message: "Password is Incorrect", success: false });
    } else {
      // gene token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.status(200).send({ message: "Login successful", success: true, data: token });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: "Error Login!", success: false, error });
  }
});

router.post("/get-user-info-by-id", authMiddleWare, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });
    if (!user) {
      return res.status(200).send({ message: "User does not exist", success: false });
    } else {
      res.status(200).send({
        success: true,
        data: {
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Error getting user info", success: false, error });
  }
});

module.exports = router;
