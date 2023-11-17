const express = require("express");
const contact = require("./utils/contacts");
const { validationResult, body, check } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const app = express();
const port = 3000;

const contacts = contact.loadContact();
const addContact = (tambah) => contact.addContact(tambah);
const findContact = (nama) => contact.findContact(nama);
const cekDuplikat = (nama) => contact.cekDuplikat(nama);

const halaman = {
    root: "/",
    contact: "/contact",
    about: "/about",
    detail: "/contact/:nama",
    addContact: "/addContact",
};

// -------------- MiddleWare -------------- //
app.set("view engine", "ejs");
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
// -------------- Akhir MiddleWare -------------- //

// -------------- Halaman -------------- //
app.get(halaman.root, (req, res) => {
    res.render("index", {
        title: "Halaman Root",
        halaman,
    });
});

app.get(halaman.addContact, (req, res) => {
    res.render("addContact", {
        title: "Halaman Add Contact",
        halaman,
    });
});

app.post(
    halaman.contact,
    [
        body("nama").custom((value) => {
            const duplikat = cekDuplikat(value);
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
                title: "Halaman Add Contact ",
                errors: errors.array(),
                halaman,
            });
        } else {
            addContact(req.body);
            req.flash("success_msg", "Contact successfully added");
            res.redirect("/contact");
        }
    }
);

app.get(halaman.contact, (req, res) => {
    res.render("contact", {
        title: "Halaman contact",
        contacts: contacts,
        msg: req.flash("success_msg"),
        halaman,
    });
});

app.get(halaman.detail, (req, res) => {
    const contact = findContact(req.params.nama);
    res.render("detail", {
        title: "Halaman Detail",
        contact: contact,
        halaman,
    });
});

app.get(halaman.about, (req, res) => {
    res.render("about", {
        title: "Halaman about",
        halaman,
    });
});
// -------------- Akhir Halaman -------------- //

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
