const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const { validationResult, body, check } = require("express-validator");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

// set mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/contact");
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
app.use(methodOverride("_method"));

// set ejs
app.set("view engine", "ejs");

// set halaman
const halaman = {
    root: "/",
    about: "/about",
    contact: "/contact",
    addContact: "/addContact",
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

// halaman detail
app.get("/contact/:nama", async (req, res) => {
    const contact = await ContactSchema.findOne({ nama: req.params.nama });
    res.render("detail", {
        title: "Contact | Detail",
        halaman,
        contact,
    });
});

//halaman edit contact
app.get("/editContact", (req, res) => {
    const contact = ContactSchema.findOne({ nama: req.body.nama });
    res.render("editContact", {
        title: "Contact | Edit Contact",
        halaman,
        contact,
    });
});

// halaman addContact
app.get("/addContact", (req, res) => {
    res.render("addContact", {
        title: "Contact | Add Contact",
        halaman,
    });
});

// post method
app.post(
    "/contact",
    [
        body("nama").custom(async (value) => {
            const duplikat = await ContactSchema.findOne({ nama: value });
            if (duplikat) {
                throw new Error("Nama sudah di gunakan");
            }
            return true;
        }),
        check("nohp", "Nomor ini tidak valid").isMobilePhone("id-ID"),
        check("email", "Email ini tidak valid").isEmail(),
    ],

    (req, res) => {
        const errors = validationResult(req);
        console.log(errors.array());
        if (!errors.isEmpty()) {
            res.render("addContact", {
                title: "Contact | Add Contact",
                errors: errors.array(),
                halaman,
            });
        } else {
            ContactSchema.insertMany(req.body);
            // const contact = new ContactSchema(req.body);
            // contact.save().then((result) => console.log(result));
            req.flash("success_msg", "Contact successfully added");
            res.redirect("/contact");
        }
    }
);

// delete method
app.delete("/contact", (req, res) => {
    ContactSchema.deleteOne({ nama: req.body.nama })
        .then((result) => {
            console.log(result);
            req.flash("success_msg", "Contact successfully deleted");
            res.redirect("/contact");
        })
        .catch((err) => {
            console.log(err);
        });
});

// method put
app.put("/contact", (req, res) => {
    ContactSchema.updateOne(
        { nama: req.body.nama },
        {
            $set: {
                nama: req.body.nama,
                nohp: req.body.nohp,
                email: req.body.email,
            },
        }
    ).then((result) => {
        req.flash("success_msg", "Contact successfully changed");
        res.redirect("/contact");
    });
});
