const express = require("express");
const router = express.Router();
const {
    loginUser,
    singupUser,
    test,
} = require("../controllers/userController");

// login page
router.get("/", singupUser);

module.exports = router;
