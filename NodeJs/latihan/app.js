// set express
const express = require("express");
const app = express();

// set ejs
app.set("view engine", "ejs");

// set routes
app.get("/", (req, res) => {
    res.render("index", {
        tittle: "Halaman Index",
    });
});
app.get("/about", (req, res) => {
    res.render("about", {
        tittle: "My Profile",
    });
});
app.use((req, res) => {
    res.status(404);
    res.render("404", {
        tittle: "Page Not Found",
    });
});

app.listen(3000, () => {
    console.log(`server listening on port 3000`);
});
