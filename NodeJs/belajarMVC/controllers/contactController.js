const { ContactSchema } = require("../models/contactDb");

// contact_index
const contact_index = async (req, res) => {
    const contacts = await ContactSchema.find();

    res.render("contact", {
        title: "Contact | Contact",
        contacts,
    });
};

const contact_edit = async (req, res) => {
    const contact = await ContactSchema.findOne({ nama: req.body.nama });
    res.render("editContact", {
        title: "Contact | Edit Contact",
        contact,
    });
};

const contact_add_get = (req, res) => {
    res.render("addContact", {
        title: "Contact | Add Contact",
    });
};

const contact_detail = async (req, res) => {
    const contact = await ContactSchema.findOne({ nama: req.params.nama });
    res.render("detail", {
        title: "Contact | Detail",
        contact,
    });
};

const contact_add_post = (req, res) => {
    ContactSchema.insertMany(req.body);
    res.redirect("/contact");
    // const contact = new ContactSchema(req.body);
    // contact.save().then((result) => console.log(result));
};

const contact_delete = (req, res) => {
    ContactSchema.deleteOne({ nama: req.body.nama })
        .then((result) => {
            console.log(result);
            res.redirect("/contact");
        })
        .catch((err) => {
            console.log(err);
        });
};

const contact_update_put = (req, res) => {
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
        res.redirect("/contact");
    });
};

module.exports = {
    contact_index,
    contact_edit,
    contact_add_get,
    contact_detail,
    contact_add_post,
    contact_delete,
    contact_update_put,
};
