// setting express
const express = require("express");
const app = express();
const port = 3000;

// ejs
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
    res.render("home", {
        title: "Home",
    });
});

// server
app.listen(port, () => {
    console.log(`listening on port ${port}!`);
});
