const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/BelajarDB");

const ContactSchema = mongoose.model("Contacts", {
    nama: {
        type: String,
        required: true,
    },
    nohp: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

module.exports = { ContactSchema };
