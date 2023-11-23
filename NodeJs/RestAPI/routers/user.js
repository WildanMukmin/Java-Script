const express = require("express");
const router = express.Router();
const {
    loginUser,
    singupUser,
    test,
} = require("../controllers/userController");

// login page
router.post("/login", loginUser);

// singup page
router.post("/singup", singupUser);

// router test
router.get("/", test);

module.exports = router;
