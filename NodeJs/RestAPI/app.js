require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRouters = require("./routers/user");
// express app
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/api/auth/", userRouters);

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
