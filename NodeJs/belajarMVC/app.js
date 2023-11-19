const express = require("express");
const methodOverride = require("method-override");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const port = 3000;

// set mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/BelajarDB");

// set middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// set ejs
app.set("view engine", "ejs");

// routes
app.listen(port, () => {
    console.log(`listening on | http://localhost:${port}`);
});

// halaman root
app.get("/", (req, res) => {
    res.render("index", {
        title: "Contact | Home",
    });
});

// halaman about
app.get("/about", (req, res) => {
    res.render("about", {
        title: "Contact | About",
    });
});

app.use("/contact", contactRoutes);
