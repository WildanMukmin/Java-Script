const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = 3000;

// set mongoose
const { ContactSchema } = require("./models/contactDb");

// set middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("secret"));
app.use(
    session({
        cookie: { maxAge: 6000 },
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(flash());

// set ejs
app.set("view engine", "ejs");

// set halaman
const halaman = {
    root: "/",
    about: "/about",
    contact: "/contact",
    addcontact: "/addcontact",
};

// routes
app.listen(port, () => {
    console.log(`listening on | http://localhost:${port}`);
});

// halaman root
app.get("/", (req, res) => {
    res.render("index", {
        title: "Contact | Home",
        halaman,
    });
});

// halaman about
app.get("/about", (req, res) => {
    res.render("about", {
        title: "Contact | About",
        halaman,
    });
});

// halaman contact
app.get("/contact", async (req, res) => {
    const contacts = await ContactSchema.find();

    res.render("contact", {
        title: "Contact | Contact",
        msg: req.flash("success_msg"),
        contacts,
        halaman,
    });
});

// halaman addcontact
app.get("/contact/:nama", async (req, res) => {
    const contact = await ContactSchema.findOne({ nama: req.params.nama });
    res.render("detail", {
        title: "Contact | Detail",
        halaman,
        contact,
    });
});
