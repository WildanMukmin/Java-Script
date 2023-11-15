const express = require("express");
const app = express();

app.set("view engine", "ejs");

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
