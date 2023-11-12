const express = require("express");
const contact = require("./utils/contacts");
const { query, validationResult } = require("express-validator");
const app = express();
const port = 3000;

const contacts = contact.loadContact();
const addContact = (tambah) => contact.addContact(tambah);
const findContact = (nama) => contact.findContact(nama);
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

app.post(halaman.contact, (req, res) => {
    addContact(req.body);
    res.redirect("/contact");
});

app.get(halaman.contact, (req, res) => {
    res.render("contact", {
        title: "Halaman contact",
        contacts: contacts,
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
