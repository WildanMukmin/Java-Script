require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const loginRoutes = require("./routers/loginRoutes");
const singupRoutes = require("./routers/singupRoutes");
// express app
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));

// mongodb connect
mongoose
    .connect("mongodb://localhost:27017/Auth")
    .then(() => {
        app.listen(3000, () => {
            console.log(`Connected to ${3000}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
    });

// routers
app.use("/api/user/login", loginRoutes);
app.use("/api/user/singup", singupRoutes);
