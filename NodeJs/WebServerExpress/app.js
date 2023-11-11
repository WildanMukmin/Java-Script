const express = require("express");
const app = express();
const port = 3000;

//gunakan ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Halaman Root",
    });
});
app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Halaman contact",
    });
});
app.get("/about", (req, res) => {
    res.render("about", {
        title: "Halaman about",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
