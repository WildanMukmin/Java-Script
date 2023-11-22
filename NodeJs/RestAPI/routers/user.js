const express = require("express");

const router = express.Router();

const { loginUser, singupUser } = require("../controllers/userController");

// login page
router.post("login", loginUser);

// singup page
router.post("singup", singupUser);

module.exports = router;
